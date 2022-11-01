import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Box, Button, Center, FlatList, HStack, Icon, Image, Pressable, Text, View, VStack } from "native-base"
import React, { useEffect, useState } from "react"
import { getUsers } from "../Api/users"
import { User } from "../Interface/User"

const UsersList = () => {
	const navigation = useNavigation()
	const [users, setUsers] = useState<User[] | null>(null)

	const setNewUsers = async () => {
		if (users !== null && users.length !== 0) {
			const data = await getUsers(users?.length)
			setUsers(data.results)
		}
	}

	const addNewUser = async () => {
		const data = await getUsers(1)
		setUsers((previousUsers) => {
			if (previousUsers !== null) {
				return [...previousUsers, ...data.results]
			}
			return [...data.results]
		})
	}

	const clearUsers = () => {
		if (users !== null) {
			setUsers([])
		}
	}

	useEffect(() => {
		setNewUsers()
	}, [])

	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		if (refresh) {
			setNewUsers()
			setRefresh(false)
		}
	}, [refresh])

	return (
		<>
			<FlatList
				data={users}
				keyExtractor={(item) => item.name.first + item.name.last}
				renderItem={({ item }) => (
					<Pressable
						width="100%"
						bg="gray.100"
						onPress={() =>
							navigation.navigate("UserDetail", {
								user: item
							})
						}>
						<HStack
							width="full"
							padding="4"
							alignItems={"center"}
							space="4"
							borderBottomWidth={1}
							borderBottomColor="gray.200"
							borderBottomStyle={"solid"}>
							<Image
								source={{
									uri: item.picture.medium
								}}
								width="16"
								height="16"
								borderRadius="full"
								alt={item.name.first}
							/>
							<VStack space="1">
								<Text fontWeight={"bold"} fontSize="lg" textAlign={"center"}>{`${item.name.first} ${item.name.last}`}</Text>
								<Text fontSize="md" textAlign={"left"} color="gray.500">
									{item.nat}
								</Text>
							</VStack>
						</HStack>
					</Pressable>
				)}
				ListHeaderComponent={
					<Box display="flex" flexDir="row-reverse" width="full" p="2">
						<Button width="full" onPress={addNewUser} bg="green.500">
							Ajouter un nouvel utilisateur
						</Button>
					</Box>
				}
				ListFooterComponent={
					<Box display="flex" flexDir="row-reverse" width="100%">
						<Button onPress={clearUsers} bg="red.500" borderRadius={"none"} width="full">
							Supprimer tous les utilisateurs
						</Button>
					</Box>
				}
				refreshing={refresh}
				onRefresh={() => setRefresh(true)}
				ListEmptyComponent={
					<Center p="2">
						<Text>Aucun utilisateurs n'a été chargé.</Text>
					</Center>
				}
			/>
		</>
	)
}

export default UsersList

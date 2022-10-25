import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Box, Center, FlatList, HStack, Icon, Text, View } from "native-base"
import React from "react"
import { User } from "../Router/Screens/UsersStack/UsersScreen"

interface Props {
	users: User[]
}

const UsersList = ({ users }: Props) => {
	const navigation = useNavigation()

	return (
		<Center>
			<Text>Utilisateurs</Text>
			<FlatList
				data={users}
				keyExtractor={(item) => item.name.first + item.name.last}
				renderItem={({ item }) => (
					<HStack padding="2" alignItems={"center"} space="2" justifyContent={"center"}>
						<Text fontWeight={"bold"} textAlign={"center"}>{`${item.name.first} ${item.name.last}`}</Text>
						<Icon
							as={FontAwesome}
							name="search-plus"
							size={4}
							color="blue.500"
							onPress={() =>
								navigation.navigate("UserDetail", {
									user: item
								})
							}
						/>
					</HStack>
				)}
			/>
		</Center>
	)
}

export default UsersList

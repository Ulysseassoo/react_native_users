import { Route, useRoute } from "@react-navigation/native"
import { Box, Center, Divider, Image, Text, View, VStack } from "native-base"
import React from "react"
import { User } from "./UsersScreen"

interface Params {
	user: User
}

interface RouteProps {
	key: string
	name: string
	path?: string
	params: Params
}

const UserDetail = () => {
	const { params } = useRoute<RouteProps>()
	const { user } = params

	return (
		<Center p="4">
			<Image
				borderRadius={"full"}
				height="20"
				width="20"
				source={{
					uri: user.picture.medium
				}}
				alt={user.name.first}
			/>

			<Box borderX="1" borderRadius="md">
				<VStack space="4" divider={<Divider />}>
					<Box px="4" pt="4">
						<Text>{`Fullname : ${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
					</Box>
					<Box px="4">
						<Text>{`Email: ${user.email}`}</Text>
					</Box>
					<Box px="4" pb="4">
						<Text textTransform={"capitalize"}>{`Gender : ${user.gender}`}</Text>
					</Box>
				</VStack>
			</Box>
		</Center>
	)
}

export default UserDetail

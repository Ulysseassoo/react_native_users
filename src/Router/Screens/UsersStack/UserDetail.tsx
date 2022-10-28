import { FontAwesome } from "@expo/vector-icons"
import { Route, useRoute } from "@react-navigation/native"
import { Box, Center, Container, Divider, HStack, Icon, Image, Text, View, VStack } from "native-base"
import React from "react"
import ListItem from "../../../Components/ListItem"
import { User } from "../../../Interface/User"

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

	const details = [
		{
			iconName: "user",
			title: "Fullname",
			content: `${user.name.title} ${user.name.first} ${user.name.last}`
		},
		{
			iconName: "birthday-cake",
			title: "Birth date",
			content: `${new Date(user.dob.date).toISOString().split("T")[0]}`
		},
		{
			iconName: "envelope",
			title: "Email",
			content: user.email
		},
		{
			iconName: user.gender === "male" ? "male" : "female",
			title: "Gender",
			content: user.gender
		},
		{
			iconName: "phone",
			title: "Phone",
			content: user.phone
		},
		{
			iconName: "location-arrow",
			title: "Location",
			content: `${user.location.city}, ${user.location.country}`
		}
	]

	return (
		<Box width="100%">
			<Center paddingY="4">
				<Image
					borderRadius={"full"}
					height="150"
					width="150"
					source={{
						uri: user.picture.large
					}}
					alt={user.name.first}
				/>
			</Center>

			<Box borderX="1" borderRadius="md">
				<VStack space="4">
					{details.map((detail, index) => (
						<ListItem {...detail} key={detail.title} isLast={index === details.length - 1} />
					))}
				</VStack>
			</Box>
		</Box>
	)
}

export default UserDetail

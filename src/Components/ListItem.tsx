import { FontAwesome } from "@expo/vector-icons"
import { HStack, Icon, Box, Text } from "native-base"
import React from "react"

interface Props {
	iconName: string
	title: string
	content: string
	isLast?: boolean
}

const ListItem = ({ iconName, title, content, isLast = false }: Props) => {
	return (
		<HStack px="4" pt="4" display={"flex"} flexDir="row" space="3" alignItems={"center"} mb="4">
			<Icon as={FontAwesome} name={iconName} color="gray.500" size="md" />
			<Box borderBottomColor={"gray.200"} borderBottomWidth={isLast ? "0" : "1"} width="100%" pb="2">
				<Text color="gray.500" textTransform={"capitalize"}>
					{title}
				</Text>
				<Text textTransform={"capitalize"}>{content}</Text>
			</Box>
		</HStack>
	)
}

export default ListItem

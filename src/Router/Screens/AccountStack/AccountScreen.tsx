import { useNavigation } from "@react-navigation/native"
import { View, Text, Button } from "native-base"
import React from "react"

const AccountScreen = () => {
	let navigation = useNavigation()

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Account Screen</Text>
			<Button
				onPress={() => {
					navigation.navigate("ExempleFullScreenModal")
				}}>
				open full screen modal
			</Button>
		</View>
	)
}

export default AccountScreen

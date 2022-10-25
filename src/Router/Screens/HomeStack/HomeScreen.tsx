import { useNavigation } from "@react-navigation/native"
import { Text, View } from "native-base"
import React from "react"
import { Button } from "react-native"

const HomeScreen = () => {
	let navigation = useNavigation()

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => {
					navigation.navigate("HomeDetail")
				}}
			/>
		</View>
	)
}

export default HomeScreen

import { useNavigation } from "@react-navigation/native"
import { View } from "native-base"
import React from "react"
import { Button } from "react-native"

const ExempleFullScreenModal = () => {
	let navigation = useNavigation()
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button
				title="Close"
				onPress={() => {
					navigation.goBack()
				}}
			/>
		</View>
	)
}

export default ExempleFullScreenModal

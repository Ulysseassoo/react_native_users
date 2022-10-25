import React, { useEffect, useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import TabBarNavigator from "./src/Router/TabBarNavigator"
import ExempleFullScreenModal from "./src/Router/Screens/Modals/ExempleFullScreenModal"
import { NativeBaseProvider } from "native-base"

export default function App() {
	const RootStack = createNativeStackNavigator()
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<RootStack.Navigator screenOptions={{ headerShown: false }}>
					<RootStack.Group>
						<RootStack.Screen name="TabBar" component={TabBarNavigator} />
					</RootStack.Group>

					<RootStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
						<RootStack.Screen name="ExempleFullScreenModal" component={ExempleFullScreenModal} />
					</RootStack.Group>
				</RootStack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	)
}

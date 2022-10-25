import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import HomeDetailsScreen from "../Screens/HomeStack/HomeDetailsScreen"
import HomeScreen from "../Screens/HomeStack/HomeScreen"

const HomeStack = createNativeStackNavigator()

const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="HomeDetail" component={HomeDetailsScreen} />
		</HomeStack.Navigator>
	)
}

export default HomeStackScreens

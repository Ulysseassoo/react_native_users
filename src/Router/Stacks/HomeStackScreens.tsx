import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import HomeDetailsScreen from "../Screens/HomeStack/HomeDetailsScreen"
import HomeScreen from "../Screens/HomeStack/HomeScreen"

type HomeStackParamList = {
	Home: undefined
	HomeDetail: undefined
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="HomeDetail" component={HomeDetailsScreen} />
		</HomeStack.Navigator>
	)
}

export default HomeStackScreens

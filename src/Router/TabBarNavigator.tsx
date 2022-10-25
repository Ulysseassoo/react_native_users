import { FontAwesome } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon, View } from "native-base"
import React from "react"
import AccountStackScreens from "./Stacks/AccountStackScreens"
import HomeStackScreens from "./Stacks/HomeStackScreens"
import UsersStackScreens from "./Stacks/UsersStackScreens"

const Tab = createBottomTabNavigator()

const TabBarNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="HomeStack"
				component={HomeStackScreens}
				options={{
					tabBarIcon: ({ focused, size }) => <Icon as={FontAwesome} name="home" size={size} color={focused ? "blue.500" : "black"} />
				}}
			/>
			<Tab.Screen
				name="AccountStack"
				component={AccountStackScreens}
				options={{
					tabBarIcon: ({ focused, size }) => <Icon as={FontAwesome} name="user" size={size} color={focused ? "blue.500" : "black"} />
				}}
			/>
			<Tab.Screen
				name="Users"
				component={UsersStackScreens}
				options={{
					tabBarIcon: ({ focused, size }) => <Icon as={FontAwesome} name="users" size={size} color={focused ? "blue.500" : "black"} />
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabBarNavigator

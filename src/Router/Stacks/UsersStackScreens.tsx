import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import UserDetail from "../Screens/UsersStack/UserDetail"
import UsersScreen from "../Screens/UsersStack/UsersScreen"

const UsersStack = createNativeStackNavigator()

const UsersStackScreens = () => {
	return (
		<UsersStack.Navigator>
			<UsersStack.Screen name="UsersHome" component={UsersScreen} />
			<UsersStack.Screen name="UserDetail" component={UserDetail} />
		</UsersStack.Navigator>
	)
}

export default UsersStackScreens

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { User } from "../../Interface/User"
import UserDetail from "../Screens/UsersStack/UserDetail"
import UsersScreen from "../Screens/UsersStack/UsersScreen"

type UsersStackParamList = {
	UsersHome: undefined
	UserDetail: { user: User }
}

const UsersStack = createNativeStackNavigator<UsersStackParamList>()

const UsersStackScreens = () => {
	return (
		<UsersStack.Navigator>
			<UsersStack.Screen name="UsersHome" component={UsersScreen} />
			<UsersStack.Screen name="UserDetail" component={UserDetail} />
		</UsersStack.Navigator>
	)
}

export default UsersStackScreens

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import AccountScreen from "../Screens/AccountStack/AccountScreen"

const AccountStack = createNativeStackNavigator()

const AccountStackScreens = () => {
	return (
		<AccountStack.Navigator>
			<AccountStack.Screen name="Account" component={AccountScreen} />
		</AccountStack.Navigator>
	)
}

export default AccountStackScreens

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import AccountScreen from "../Screens/AccountStack/AccountScreen"

type AccountStackParamList = {
	Account: undefined
}

const AccountStack = createNativeStackNavigator<AccountStackParamList>()

const AccountStackScreens = () => {
	return (
		<AccountStack.Navigator>
			<AccountStack.Screen name="Account" component={AccountScreen} />
		</AccountStack.Navigator>
	)
}

export default AccountStackScreens

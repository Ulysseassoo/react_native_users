import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import UsersList from "../../../Components/UsersList"

const UsersScreen = () => {
	return (
		<SafeAreaView>
			<UsersList />
		</SafeAreaView>
	)
}

export default UsersScreen

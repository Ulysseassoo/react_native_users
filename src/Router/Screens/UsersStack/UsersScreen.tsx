import axios from "axios"
import { Center, Text, View } from "native-base"
import React, { useEffect, useState } from "react"
import UsersList from "../../../Components/UsersList"

export interface User {
	name: {
		title: string
		first: string
		last: string
	}
	gender: string
	email: string
	picture: {
		large: string
		medium: string
	}
}

interface UserResponse {
	results: User[]
}

const UsersScreen = () => {
	const [users, setUsers] = useState<User[] | null>(null)

	useEffect(() => {
		axios.get<UserResponse>("https://randomuser.me/api/?results=5").then((response) => setUsers(response.data.results))
	}, [])

	return <Center>{users === null ? <Text>Loading...</Text> : <UsersList users={users} />}</Center>
}

export default UsersScreen

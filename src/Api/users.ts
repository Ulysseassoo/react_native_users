import axios from 'axios';
import { User } from "../Interface/User";

interface UserResponse {
	results: User[]
}

export const getUsers = async (usersNumber: number) => {
   const data = await axios.get<UserResponse>(`https://randomuser.me/api/?results=${usersNumber}`);
   return data.data;
}
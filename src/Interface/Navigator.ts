import { User } from "./User"

export type RootStackParamList = {
	UsersHome: undefined
	UserDetail: { user: User }
    HomeDetail: undefined
    Home: undefined
    ExempleFullScreenModal: undefined
}
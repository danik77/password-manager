import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";

export interface User {
	id: number;
	login: string;
	password: string;
}

export interface UserState {
	users: Array<User>;
	authUser: User | null;
}

const initialState: UserState = {
	users: JSON.parse(localStorage.getItem("passmanager-users") as string) ?? [],
	authUser:JSON.parse(localStorage.getItem("passmanager-auth") as string) ?? null,
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		registerUser(state, action) {
			state.users.push(action.payload);
			localStorage.setItem("passmanager-users", JSON.stringify(state.users));
			state.authUser = action.payload;
		},
		loginUser(state, action) {
			state.authUser = action.payload;
			localStorage.setItem("passmanager-auth", JSON.stringify(state.authUser));
		},
		logoutUser(state) {
			state.authUser = null;
			localStorage.removeItem("passmanager-auth");
		},
	},
});

export const selectTasks = (state: RootState) => state.users.users;
export const { registerUser, loginUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;

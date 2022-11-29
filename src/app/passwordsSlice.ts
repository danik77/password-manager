import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";

export interface Password {
	id: number;
	text: string;
	origin: string;
	userId: number;
}

export interface PasswordState {
	passwords: Array<Password>;
}

const initialState: PasswordState = {
	passwords:
		JSON.parse(localStorage.getItem("passmanager-passwords") as string) ?? [],
};

export const passwordsSlice = createSlice({
	name: "passwords",
	initialState,
	reducers: {
		addPassword(state, action) {
			state.passwords.unshift(action.payload);
			localStorage.setItem("passmanager-passwords",JSON.stringify(state.passwords));
		},
		editPassword(state, action) {
			state.passwords.map((item) => item.id === action.payload.id && Object.assign(item, action.payload)); /////!!!!!!!!!!!!!
			localStorage.setItem("passmanager-passwords", JSON.stringify(state.passwords));
		},
		deletePassword(state, action) {
			state.passwords = state.passwords.filter((item) => item.id !== action.payload);
			localStorage.setItem("passmanager-passwords", JSON.stringify(state.passwords));
		},
	},
});

export const selectTasks = (state: RootState) => state.passwords.passwords;
export const { addPassword, editPassword, deletePassword } = passwordsSlice.actions;
export default passwordsSlice.reducer;

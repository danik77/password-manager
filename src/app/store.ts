import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import passwordsReducer from './passwordsSlice'
import usersReducer from './usersSlice'

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
    users: usersReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

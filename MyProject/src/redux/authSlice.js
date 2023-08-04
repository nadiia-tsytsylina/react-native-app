import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { userId: null, login: null, email: null },
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess(state, action) {
      state.error = null;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    authError(state, action) {
      state.error = action.payload;
    },
    logInSuccess(state, action) {
      state.error = null;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logInError(state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    authLogOut: () => initialState,
  },
});

export const { authError, authSuccess, logInError, logInSuccess, authLogOut } =
  authSlice.actions;

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

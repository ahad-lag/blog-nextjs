import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  token: '',
  is_auth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginUser: (state , { payload }) => {
        state.is_auth = true;
        state.user = payload.data.user;
        state.token = payload.token;
      },
      logoutUser: (state) => {
        state.is_auth = false;
        state.user = {};
        state.token = '';
      }
    }
})

export const {loginUser,logoutUser} = authSlice.actions

export default authSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: 'ok',
  is_auth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser: (state , { payload }) => {
        state.user = payload
      }
    }
})

export const {setUser} = authSlice.actions

export default authSlice.reducer
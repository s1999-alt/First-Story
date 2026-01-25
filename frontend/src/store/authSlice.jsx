import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    user: null
  },
  reducers: {
    setToken(state, action){
      state.accessToken = action.payload;
    },
    logout(state){
      state.accessToken = null
      state.user = null
    }
  }
})

export const {setToken, logout} = authSlice.actions;
export default authSlice.reducer;
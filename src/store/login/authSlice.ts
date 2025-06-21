import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload; // 将token存储到redux里面
      sessionStorage.setItem("token", action.payload); // 将token存储到本地存储中，双重保险，如果从redux中取不到数据，就可以从本地存储中取
    },
    clearToken: (state) => {
      state.token = null;
      sessionStorage.removeItem("token");
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;

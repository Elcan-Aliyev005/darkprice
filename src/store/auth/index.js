import { createSlice } from "@reduxjs/toolkit";

const isLogin = localStorage.hasOwnProperty("isLogin") ? JSON.parse(localStorage.getItem("isLogin")) : false
 


const initialState = {
    isLogin
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLogin = action.payload
        }
    }
});

export const { setLogin } = AuthSlice.actions;
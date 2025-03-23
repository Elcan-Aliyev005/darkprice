import { createSlice } from "@reduxjs/toolkit";


const initialState = localStorage.hasOwnProperty("user") ? JSON.parse(localStorage.getItem("user")) : {
    name: "",
    username: "",
    email: "",
    phone: "",
    sname: "",
    stores: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, action) => {
            return action.payload
        }
    }
})


export const { setUser } = userSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.hasOwnProperty("store") ? JSON.parse(localStorage.getItem('store')) : {}


export const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        setStore: (state, action) => {
            return action.payload
        }
    }
})


export const { setStore } = storeSlice.actions
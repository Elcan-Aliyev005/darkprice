import { createSlice } from "@reduxjs/toolkit";

const dataIDs = localStorage.hasOwnProperty("dataIDs") ? JSON.parse(localStorage.getItem("dataIDs")) : []

const initialState = {
    dataIDs,

}


export const DataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataIds: (state, action) => {
            state.dataIDs = action.payload
        }
    }
})


export const { setDataIds } = DataSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    offCanvas: false,
    historyModal: false,
}

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setOffCanvas: (state, action) => {
            state.offCanvas = action.payload
        },
        setHistoryModal: (state, action) => {
            state.historyModal = action.payload
        },
    }
})

export const { setOffCanvas, setHistoryModal } = layoutSlice.actions 
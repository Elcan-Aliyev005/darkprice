import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./store/index";
import { AuthSlice } from "./auth";
import { userSlice } from "./user";
import { DataSlice } from "./data";
import { layoutSlice } from "./layout";

export const store = configureStore({
    reducer: {
        store: storeSlice.reducer,
        auth: AuthSlice.reducer,
        user: userSlice.reducer,
        data: DataSlice.reducer,
        layout: layoutSlice.reducer,
    }
})
/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export const globalReducer = createSlice({
    name: "global",
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            Object.assign(state.user, action.payload)
            console.log("DAH KE ASSIGN")
        }
    }
})

export default globalReducer.reducer
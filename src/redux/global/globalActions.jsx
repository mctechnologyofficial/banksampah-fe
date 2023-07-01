/* eslint-disable */
import { globalReducer } from "./globalReducer";

const {
    setUser
} = globalReducer.actions

export const setUserLoggedIn = (payload) => (dispatch) => {
    try {
        dispatch(setUser(payload))
    } catch (error) {
        console.log(error)
    }
}
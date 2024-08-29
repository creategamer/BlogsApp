import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            state.error = null;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.error = null;
        },
        authError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { login, logout, authError } = authSlice.actions;
export default authSlice.reducer;

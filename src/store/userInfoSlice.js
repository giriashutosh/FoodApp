import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    isLoggedIn: false
}

const userInfo = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload);
            state.isLoggedIn = true;
        },

        loggedUserOut: (state, action) => {
            state.user.pop();
            state.isLoggedIn = action.payload;
        },
    },

})

export const { addUser, loggedUserIn, loggedUserOut } = userInfo.actions;

export default userInfo.reducer;
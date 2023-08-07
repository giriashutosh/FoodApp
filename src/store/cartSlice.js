import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeItemToCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !==itemId)
        },
        clearItemToCart: () => {
            state.items.length = 0;
        },
    }
})

export const { addItemToCart, removeItemFromCart, clearItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
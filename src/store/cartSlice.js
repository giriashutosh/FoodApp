import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                const tempProduct = { ...action.payload, quantity: 1 }
                state.items.push(tempProduct)
            }
            state.cartTotalQuantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
                state.cartTotalQuantity -= 1;
            }
        },
        removeItem: (state, action) => {
            const newCartItems = state.items.filter((item) => item.id !== action.payload.id)
            state.cartTotalQuantity -= action.payload.quantity;
            state.items = newCartItems
        },
        clearItemToCart: (state) => {
            state.items = [];
            state.cartTotalQuantity = 0;
        },
        getTotalAmount: (state, action) => {
            const total = state.items.reduce((cartTotal, cartItem) => { 
                const { price, quantity } = cartItem
                cartTotal += quantity * price;
                return cartTotal
            }, 0)
            state.cartTotalAmount = total
        }
    }
})

export const { addItemToCart, decreaseQuantity, getTotalAmount,clearItemFromCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
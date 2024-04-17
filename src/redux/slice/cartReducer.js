// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems.push(action.payload);
    },
    removeItem(state, action) {
      return state.cartItems.filter((item) => item?.id === action.payload.id);
    },
    resetCart(state, action) {
      state.cartItems = []
    },
  },
});

export const { addItem, removeItem, resetCart } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

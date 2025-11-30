import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],  // each item → {id, name, price, image, quantity}
  },

  reducers: {
    // -------------------------------
    // ADD TO CART
    // -------------------------------
    addToCart: (state, action) => {
      const product = action.payload; // full product object

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1; // increase qty if exists
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // -------------------------------
    // REMOVE ITEM
    // -------------------------------
    removeFromCart: (state, action) => {
      const id = action.payload; // only id comes here

      state.items = state.items.filter((item) => item.id !== id);
    },

    // -------------------------------
    // CHANGE QUANTITY
    // -------------------------------
    adjustQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item && quantity >= 1) {
        item.quantity = quantity; // replace with new qty
      }
    },

    // -------------------------------
    // CLEAR WHOLE CART
    // -------------------------------
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  adjustQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

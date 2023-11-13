import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TItemToCart } from "../../types";

export interface IntefaceCartState {
  itemsInCart: TItemToCart[];
  totalPrice: number;
  totalAmount: number;
}

const initialState: IntefaceCartState = {
  itemsInCart: [],
  totalPrice: 0,
  totalAmount: 0,
};

const calcTotalPrice = (items: TItemToCart[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const calcTotalAmount = (items: TItemToCart[]) => {
  return items.reduce((count, obj) => obj.count + count, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TItemToCart>) {
      const findItem = state.itemsInCart.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.itemsInCart.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.itemsInCart);
      state.totalAmount = calcTotalAmount(state.itemsInCart);
    },

    removeItem(state, action: PayloadAction<number>) {
      state.itemsInCart = state.itemsInCart.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.itemsInCart);
      state.totalAmount = calcTotalAmount(state.itemsInCart);
    },

    clearItems(state) {
      state.itemsInCart = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
    },

    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.itemsInCart.find(
        (obj) => obj.id === action.payload
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.itemsInCart);
      state.totalAmount = calcTotalAmount(state.itemsInCart);
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;

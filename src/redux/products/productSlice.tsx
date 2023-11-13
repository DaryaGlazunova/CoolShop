import { createSlice } from "@reduxjs/toolkit";
import { TProductItem, Status } from "./types";

import { fetchProducts } from "./asyncActions";

export interface IntefaceProductState {
  items: TProductItem[];
  status: Status;
}

const initialState: IntefaceProductState = {
  items: [],
  status: Status.LOADING,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = ProductsSlice.actions;

export default ProductsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EnumSortProperty, TSort } from "../../types";

export interface IntefaceFilterState {
  searchValue: string;
  category: string;
  sort: TSort;
  currentPage: number;
  perPage: number;
}

const initialState: IntefaceFilterState = {
  searchValue: "",
  category: "All",
  sort: {
    name: "возрастанию цены ↓",
    sortProperty: EnumSortProperty.PRICE_ASC,
  },
  currentPage: 1,
  perPage: 8,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IntefaceFilterState>) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.currentPage = Number(action.payload.currentPage);
        state.category = action.payload.category;
      } else {
        state.sort = {
          name: "возрастанию цены ↓",
          sortProperty: EnumSortProperty.PRICE_ASC,
        };
        state.currentPage = 1;
        state.perPage = 8;
        state.category = "All";
      }
    },
  },
});

export const {
  setCategory,
  setSort,
  setSearchValue,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

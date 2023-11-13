import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProductItem, TSearchProductParams } from "./types";
const serverPath = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk<
  TProductItem[],
  TSearchProductParams
>("products/fetchProducts", async (params) => {
  const { sortBy, order, categoryName, search } = params;
  console.log(categoryName);
  const url =
    categoryName.toLowerCase() !== "all"
      ? `${serverPath}/category/${categoryName}?sortBy=${sortBy}&order=${order}${search}`
      : `${serverPath}?sortBy=${sortBy}&sort=${order}${search}`;
  console.log("url", url);

  const { data } = await axios.get<TProductItem[]>(url);

  console.log("data", data);
  return data;
});

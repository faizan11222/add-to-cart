import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "get/products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/products");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, () => {
        return {
          loading: true,
        };
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      })
      .addCase(getProducts.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload,
        };
      });
  },
});


const productsReducer = productsSlice.reducer

export default productsReducer
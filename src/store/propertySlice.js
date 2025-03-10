import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch properties
export const fetchProperties = createAsyncThunk("properties/fetch", async () => {
  const { data } = await axios.get("/api/properties");
  return data;
});

// Add a new property
export const addProperty = createAsyncThunk("properties/add", async (property) => {
  const { data } = await axios.post("/api/properties", property);
  return data;
});

const propertySlice = createSlice({
  name: "property",
  initialState: { properties: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => { state.status = "loading"; })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = "success"; state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state) => { state.status = "failed"; })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.properties.push(action.payload);
      });
  },
});

export default propertySlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";

const SLICE_NAME = "auth";
const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const register = createAsyncThunk(
  `${SLICE_NAME}/register`,
  async (userData, thunkApi) => {
    try {
      const {
        data: { data: user },
      } = await API.registerUser(userData);
      return user;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.error);
    }
  }
);
const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { register };
export default authSlice.reducer;

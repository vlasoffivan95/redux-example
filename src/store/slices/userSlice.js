import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";
const SLICE_NAME = "users";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`, () => {
  return API.getUsers();
});

const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
  },
});

export { getUsers };
export default usersSlice.reducer;

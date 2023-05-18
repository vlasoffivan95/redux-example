import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";
const SLICE_NAME = "users";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const getUsers = createAsyncThunk(
  `${SLICE_NAME}/getUsers`,
  async (arg, thunkApi) => {
    try {
      console.log(`arg is ${arg}`);
      const { data: {data:users} } = await API.getUsers(arg);
      return users;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },

  //   extraReducers: {
  //     [getUsers.pending]: (state, action) => {
  //       state.isLoading = true;
  //     },
  //     [getUsers.fulfilled]: (state, action) => {
  //       state.users = action.payload;
  //       state.isLoading = false;
  //     },
  //   },
});

export { getUsers };
export default usersSlice.reducer;

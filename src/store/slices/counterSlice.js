import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += state.step;
    },
    decrement: {
      decrement: (state) => {
        state.count -= state.step;
      },
    },
  },
});

const {
  reducer,
  actions: { increment, decrement },
} = counterSlice;

export default reducer;
export { increment, decrement };

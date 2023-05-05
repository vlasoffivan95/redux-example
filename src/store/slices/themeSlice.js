import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "../../constants";


const initialState = THEMES.THEME.WHITE;

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setTheme: (state, action) => action.payload,
  },
});

const { reducer, actions } = themeSlice;
const { setTheme } = actions;

export default reducer;
export { setTheme };

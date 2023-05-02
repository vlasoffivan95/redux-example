import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const { LANGUAGE } = CONSTANTS;

const initialState = LANGUAGE.UA_UA.VALUE;

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action) => action.payload,
  },
});
const { reducer, actions } = langSlice; 
const { setLanguage } = actions;

export default reducer;
export { setLanguage };

import { createSlice } from "@reduxjs/toolkit";
import { Editable } from "./store.types";

let initialState: Editable = null;

const editableSlice = createSlice({
    name: 'editable',
    initialState,
    reducers: {
        setEditable(state, action) {
            return state = action.payload;
        }
    }
});

export default editableSlice.reducer;

export const { setEditable } = editableSlice.actions;
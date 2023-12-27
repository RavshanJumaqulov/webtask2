import { light } from "@mui/material/styles/createPalette";
import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";

export const filterCategorySlice = createSlice({
    name: 'filterCategory',
    initialState: { data: 0 },
    reducers: {
        changeCategory: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { changeCategory } = filterCategorySlice.actions
export default filterCategorySlice.reducer
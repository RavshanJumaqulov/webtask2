import { createSlice } from "@reduxjs/toolkit";

export const rowsSizeSlice = createSlice({
    name: 'rowsSize',
    initialState: { data: 10 },
    reducers: {
        changeRows: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { changeRows } = rowsSizeSlice.actions
export default rowsSizeSlice.reducer
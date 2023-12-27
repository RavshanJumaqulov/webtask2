import { light } from "@mui/material/styles/createPalette";
import { createSlice } from "@reduxjs/toolkit";

export const modalVisibleSlice = createSlice({
    name: 'Visible modal',
    initialState: { data: false },
    reducers: {
        showModal: (state) => {
            state.data = true
        },
        hideModal: (state) => {
            state.data = false
        }
    }
})

export const { showModal, hideModal } = modalVisibleSlice.actions
export default modalVisibleSlice.reducer
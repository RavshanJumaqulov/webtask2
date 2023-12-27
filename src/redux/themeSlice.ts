import { light } from "@mui/material/styles/createPalette";
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: { data: 'light' },
    reducers: {
        toogleTheme: (state) => {
            if (state.data == 'light') {
                state.data = 'dark'
            }
            else {
                state.data = 'light'
            }

        }
    }
})

export const { toogleTheme } = themeSlice.actions
export default themeSlice.reducer
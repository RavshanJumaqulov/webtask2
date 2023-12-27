import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getProductKeyboards: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'productKeyboards/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-specific-keyboard/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface ProductKeyboardsState {
    categories: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductKeyboardsState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const productKeyboardsSlice = createSlice({
    name: 'productKeyboards',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getProductKeyboards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductKeyboards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getProductKeyboards.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default productKeyboardsSlice.reducer;
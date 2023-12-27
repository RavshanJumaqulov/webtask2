import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getCategories: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'categories/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-category/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface CategoriesState {
    categories: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CategoriesState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default categoriesSlice.reducer;
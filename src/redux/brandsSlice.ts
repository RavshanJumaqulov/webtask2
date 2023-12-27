import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getBrands: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'brandss/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-brand/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface BrandsState {
    categories: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: BrandsState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const brandsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getBrands.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBrands.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getBrands.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default brandsSlice.reducer;
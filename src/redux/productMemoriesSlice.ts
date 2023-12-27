import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getProductMemories: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'productMemories/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-specific-main-memory/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface ProductMemoriesState {
    categories: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductMemoriesState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const productMemories = createSlice({
    name: 'productsMemories',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getProductMemories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductMemories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getProductMemories.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default productMemories.reducer;
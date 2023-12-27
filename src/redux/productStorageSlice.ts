import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getProductStorage: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'productStorage/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-specific-storage/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface productStorageState {
    categories: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: productStorageState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const productStorageSlice = createSlice({
    name: 'productStorageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getProductStorage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductStorage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getProductStorage.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default productStorageSlice.reducer;
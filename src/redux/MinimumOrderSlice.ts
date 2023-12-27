import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface } from "../types/types";

export const getMinimumOrder: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'minimumOrder/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-pricing-min-order/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface MinimumOrderState {
    categories: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MinimumOrderState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const minimumOrderSlice = createSlice({
    name: 'minimumOrder',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getMinimumOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMinimumOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getMinimumOrder.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});


export default minimumOrderSlice.reducer;
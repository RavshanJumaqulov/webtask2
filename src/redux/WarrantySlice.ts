import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getWarranties: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'warranty/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-specific-warranty/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface WarrantyState {
    data: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: WarrantyState = {
    data: [],
    status: 'idle',
    error: null,
};

export const warrantysSlice = createSlice({
    name: 'warranties',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getWarranties.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWarranties.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getWarranties.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default warrantysSlice.reducer;
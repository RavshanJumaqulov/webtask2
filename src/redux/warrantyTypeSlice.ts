import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getWarrantyType: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'warrantyType/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-specific-warranty-type/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface WarrantyTypeState {
    data: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: WarrantyTypeState = {
    data: [],
    status: 'idle',
    error: null,
};

export const warrantyTypeSlice = createSlice({
    name: 'warrantyType',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getWarrantyType.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWarrantyType.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getWarrantyType.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default warrantyTypeSlice.reducer;
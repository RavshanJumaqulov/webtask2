import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";

export const getProductPricingTax: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
    'productPricingTax/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const request = await api({
                url: '/product-pricing-tax/',
                method: 'get',
            });
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



export interface ProductPricingTaxState {
    categories: CategoriesInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductPricingTaxState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const productPricingTaxSlice = createSlice({
    name: 'productsPricingTax',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getProductPricingTax.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductPricingTax.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getProductPricingTax.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

// Reducerlarni eksport qilish
export default productPricingTaxSlice.reducer;
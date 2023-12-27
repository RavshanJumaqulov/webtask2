import { createSlice, createAsyncThunk, AsyncThunkAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../lib/api";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { CategoriesInterface, ProductInterface } from "../types/types";
import { AppDispatch, RootState } from "./store";
import { IFormInput } from "../components/CustomModal";

export const getProducts: AsyncThunk<any, number, AsyncThunkConfig> = createAsyncThunk(
    'products/fetch',
    async (page, { rejectWithValue, dispatch, getState }) => {
        const state = getState() as RootState
        try {
            const request = await api({
                url: `/product-list/?limit=${state.rowsSize.data}&offset=${state.rowsSize.data * (page - 1)}&p=true`,
                method: 'get',
            });
            return request.data.results;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const deleteProducts: AsyncThunk<any, string, AsyncThunkConfig> = createAsyncThunk(
    'products/delete',
    async (guid, { rejectWithValue, dispatch }) => {
        try {
            const request = await api({
                url: `/product-delete/${guid}`,
                method: 'delete',
            });
            dispatch(deleteWithGuid(guid))
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const updateProducts: AsyncThunk<any, string, AsyncThunkConfig> = createAsyncThunk(
    'products/update',
    async (guid, { rejectWithValue, dispatch, getState }) => {
        const state = getState() as RootState
        const product = state.products.products.find((el: ProductInterface) => el.guid !== guid)
        try {
            const request = await api({
                url: `/product-update/${guid}/`,
                method: 'put',
                data: {
                    product: {
                        status: !product?.status
                    }
                }
            });
            dispatch(updateStatusWithGuid(guid))
            return request.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const addProducts: AsyncThunk<any, IFormInput, AsyncThunkConfig> = createAsyncThunk(
    'products/add',
    async (data, { rejectWithValue, dispatch, getState }) => {
        const state = getState() as RootState
        console.log(data);
        const createData = {
            product: {
                title: data.title,
                description: data.description,
                brand: data.brand,
                category: data.category,
                stock: data.stock,
                sales: data.sales,
                status: true,
            },
            productSpecifications: {
                keyboard_language: data.keyboard_language,
                main_memory: data.main_memory,
                storage: data.storage,
                warranty: data.warranty,
                wright: data.wright,
                dimension: data.dimension
            },
            productPricings: {
                tax: data.tax,
                min_order: data.min_order,
                price: data.price
            },
        }
        try {
            const request = await api({
                url: `/product-create/`,
                method: 'post',
                data: createData
            });
            if (request.status == 201) {
                const newBrand = state.brands.categories.find((el: CategoriesInterface) => el.id == request.data.product.brand)
                const newCategory = state.categories.categories.find((el: CategoriesInterface) => el.id == request.data.product.category)
                const addRedux = {
                    id: request.data.product.id,
                    title: request.data.product.title,
                    description: data.description,
                    sales: request.data.product.sales,
                    guid: request.data.product.guid,
                    status: request.data.product.status,
                    stock: request.data.product.stock,
                    brand: {
                        id: request.data.product.brand,
                        guid: newBrand?.guid,
                        title: newBrand?.title
                    },
                    category: {
                        id: request.data.product.category,
                        guid: newCategory?.guid,
                        title: newCategory?.title
                    },
                    productPricings: {
                        tax: request.data.productPricing.tax,
                        min_order: request.data.productPricing.min_order,
                        price: request.data.productPricing.price
                    },
                    productImages: ['']
                }
                dispatch(addNewProduct(addRedux))
            }

            return request.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);





export interface ProductsState {
    products: ProductInterface[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            state.products = [action.payload, ...state.products]
        },
        deleteWithGuid: (state, action) => {
            state.products = state.products.filter((el: ProductInterface) => el.guid !== action.payload)
        },
        updateStatusWithGuid: (state, action) => {
            const toggledStatus = state.products.find((el: ProductInterface) => el.guid === action.payload);
            if (toggledStatus) {
                toggledStatus.status = !toggledStatus.status;
            }
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const { addNewProduct, updateStatusWithGuid, deleteWithGuid } = productsSlice.actions
export default productsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./themeSlice"
import productsSlice from "./productsSlice"
import categoriesSlice from "./categoriesSlice"
import filterCategorySlice from "./filterCategorySlice"
import brandsSlice from "./brandsSlice"
import productKeyboardsSlice from "./productKeyboardsSlice"
import productMemoriesSlice from "./productMemoriesSlice"
import productStorageSlice from "./productStorageSlice"
import productPricingTaxSlice from "./productPricingTaxSlice"
import minimumOrderSlice from "./MinimumOrderSlice"
import modalVisibleSlice from "./modalVisibleSlice"
import rowsSizeSlice from "./rowsSizeSlice"
import warrantySlice from "./WarrantySlice"
import warrantyTypeSlice from "./warrantyTypeSlice"

const store = configureStore({
    reducer: {
        thema: themeSlice,
        modalVisible: modalVisibleSlice,
        rowsSize: rowsSizeSlice,
        products: productsSlice,
        categories: categoriesSlice,
        brands: brandsSlice,
        productKeyboards: productKeyboardsSlice,
        productMemories: productMemoriesSlice,
        productStorage: productStorageSlice,
        productPricingTax: productPricingTaxSlice,
        minimumOrder: minimumOrderSlice,
        warranty: warrantySlice,
        warrantyType: warrantyTypeSlice,
        filterCategory: filterCategorySlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
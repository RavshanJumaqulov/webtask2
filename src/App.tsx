import React, { useEffect } from 'react';
import { Box, PaletteMode, ThemeProvider, Typography } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from './themes/theme';
import { AppDispatch, RootState } from './redux/store';
import { getProducts } from './redux/productsSlice';
import { getCategories } from './redux/categoriesSlice';
import { getBrands } from './redux/brandsSlice';
import { getProductKeyboards } from './redux/productKeyboardsSlice';
import { getProductMemories } from './redux/productMemoriesSlice';
import { getProductStorage } from './redux/productStorageSlice';
import { getProductPricingTax } from './redux/productPricingTaxSlice';
import { getMinimumOrder } from './redux/MinimumOrderSlice';
import { getWarranties } from './redux/WarrantySlice';
import { getWarrantyType } from './redux/warrantyTypeSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const thema = useSelector((state: RootState) => state.thema)
  const {
    products,
    categories,
    brands,
    productKeyboards,
    productMemories,
    productStorage,
    productPricingTax,
    minimumOrder,
    warranty,
    warrantyType
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    if (products.status == 'idle') {
      dispatch(getProducts(1))
    }
    if (categories.status == 'idle') {
      dispatch(getCategories())
    }
    if (brands.status == 'idle') {
      dispatch(getBrands())
    }
    if (productKeyboards.status == 'idle') {
      dispatch(getProductKeyboards())
    }
    if (productMemories.status == 'idle') {
      dispatch(getProductMemories())
    }
    if (productStorage.status == 'idle') {
      dispatch(getProductStorage())
    }
    if (productPricingTax.status == 'idle') {
      dispatch(getProductPricingTax())
    }
    if (minimumOrder.status == 'idle') {
      dispatch(getMinimumOrder())
    }
    if (warranty.status == 'idle') {
      dispatch(getWarranties())
    }
    if (warrantyType.status == 'idle') {
      dispatch(getWarrantyType())
    }
  }, [])


  return (
    <Box sx={{
      '& ::-webkit-scrollbar': {
        width: 3,
        height: 3,
      },

      '& ::-webkit-scrollbar-track': {
        background: 'hsla(0,0%,100%,.1)'
      },

      '& ::-webkit-scrollbar-thumb': {
        background: theme => theme.palette.primary.main,
        opacity: 0.3
      },

      '& ::-webkit-scrollbar-thumb:hover': {
        background: theme => theme.palette.primary.main
      },
    }}>
      <ThemeProvider theme={theme(thema.data as PaletteMode)}>
        <Box sx={{
          background: theme => theme.palette.background.default,
          height: 'auto',
          '& ::-webkit-scrollbar': {
            width: 3,
            height: 3,
          },

          '& ::-webkit-scrollbar-track': {
            background: 'hsla(0,0%,100%,.1)'
          },

          '& ::-webkit-scrollbar-thumb': {
            background: theme => theme.palette.primary.main,
            opacity: 0.3
          },

          '& ::-webkit-scrollbar-thumb:hover': {
            background: theme => theme.palette.primary.main
          },
        }}>
          <BrowserRouter>
            <Navbar>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </Navbar>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;

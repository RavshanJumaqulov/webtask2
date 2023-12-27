import { Box, Paper } from '@mui/material'
import React from 'react'
import PageTop from '../components/PageTop'
import FilterPage from '../components/FilterPage'
import CustomTable from '../components/CustomTable'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TableHeader } from '../types/types'
import { theme } from '../themes/theme'
import CustomModal from '../components/CustomModal'



export default function Home() {
  const { products, categories, modalVisible } = useSelector((state: RootState) => state)

  const tableHeader: TableHeader[] = [
    {
      name: 'check',
      width: 64,
    },
    {
      name: 'Product name',
      width: '50%',
      key: 'title'
    },
    {
      name: 'Brand',
      width: 125,
      key: 'brand'
    },
    {
      name: 'Stock',
      width: 125,
      key: 'stock'
    },
    {
      name: 'Sales',
      width: 125,
      key: 'sales'
    },
    {
      name: 'Price',
      width: 140,
    },
    {
      name: 'Status',
      width: 96,
      key: 'status'
    },
    {
      name: 'Action',
      width: 120,
    },

  ]
  return (
    <Box sx={{ position: 'relative', zIndex: 1, mb: 4 }}>
      {
        modalVisible.data && <CustomModal />
      }
      <Box sx={{ background: theme => theme.palette.background.paper, px: 4, height: 'auto' }}>
        <PageTop />
        <FilterPage categories={categories} />
      </Box>
      <Box sx={{ px: 4, my: 4 }}>
        <CustomTable tableHeader={tableHeader} />
      </Box>
    </Box>
  )
}

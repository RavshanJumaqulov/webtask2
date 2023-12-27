import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import CustomCheckbox from './CustomCheckbox'
import { ProductInterface, TableHeader } from '../types/types'
import CustomSwitch from './CustomSwitch'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { deleteProducts, updateProducts } from '../redux/productsSlice'
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomTableRow({ data, tableHeader }: { data: ProductInterface, tableHeader: TableHeader[] }) {
    const dispatch = useDispatch<AppDispatch>()

    return (
        < Box key={data.id} sx={{ my: 2, display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ width: tableHeader[0].width, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CustomCheckbox />
            </Box>
            <Box sx={{ width: tableHeader[1].width, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', pr: 2 }}>
                <Typography variant='body1' sx={{ width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', }}>
                    {data.title}
                </Typography>
            </Box>
            <Box sx={{ width: tableHeader[2].width, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                <Typography variant='body1'>
                    {data.brand.title}
                </Typography>
            </Box>
            <Box sx={{ width: tableHeader[3].width, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography variant='body1'>
                    {data.stock}
                </Typography>
            </Box>
            <Box sx={{ width: tableHeader[4].width, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography variant='body1'>
                    {data.sales}
                </Typography>
            </Box>
            <Box sx={{ width: tableHeader[5].width, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography variant='body1'>
                    {data.productPricings.price}
                </Typography>
            </Box>
            <Box sx={{ width: tableHeader[6].width, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Box onClick={() => dispatch(updateProducts(data.guid))}><CustomSwitch status={data.status} /></Box>
            </Box>
            <Box sx={{ width: tableHeader[7].width, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <IconButton onClick={() => dispatch(deleteProducts(data.guid))}>
                    <DeleteIcon color='error' />
                </IconButton>
            </Box>
        </Box>
    )
}

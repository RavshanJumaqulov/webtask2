import { Box, Divider, FormControl, MenuItem, Pagination, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomCheckbox from './CustomCheckbox'
import { ProductsState, getProducts } from '../redux/productsSlice'
import CustomProgress from './CustomProgress'
import { ProductInterface } from '../types/types'
import CustomTableRow from './CustomTableRow'
import { useDispatch, useSelector } from 'react-redux'
import { changeRows } from '../redux/rowsSizeSlice'
import { AppDispatch, RootState } from '../redux/store'
interface TableHeader {
    name: string,
    key?: string,
    width: number | string
}

export default function CustomTable({ tableHeader }: { tableHeader: TableHeader[], }) {
    const dispatch = useDispatch<AppDispatch>()
    const { rowsSize, products } = useSelector((state: RootState) => state)
    const [page, setPage] = useState(2)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    useEffect(() => {
        dispatch(getProducts(page))
    }, [page, rowsSize])
    return (
        <Box sx={{
            p: 3,
            mb: 4,
            borderRadius: 4,
            background: theme => theme.palette.background.paper,
        }}>
            <Box sx={{
                width: '100%',
                borderRadius: 3,
                background: theme => theme.palette.background.default,
                display: 'flex',
                flexDirection: 'row'
            }}>
                {
                    tableHeader.map((el: TableHeader, index) => {
                        return (
                            <Box key={index} sx={{ width: el.width, height: 64, display: 'flex', alignItems: 'center', justifyContent: el.name == 'check' ? 'center' : 'flex-start' }}>
                                {
                                    el.name == 'check' ? <CustomCheckbox /> : el.name == 'status' ? '' : <Typography variant='body2'>{el.name}</Typography>
                                }
                            </Box>
                        )
                    })
                }
            </Box>
            {
                products.status == 'loading' ?
                    <Box sx={{
                        my: 2,
                        width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <CustomProgress />
                    </Box> : products.status == 'failed' ? <Typography variant='body3' color='error'>
                        {products.error}
                    </Typography> : products.status == 'succeeded' ?
                        products.products.map((element: ProductInterface) => <CustomTableRow key={element.id} tableHeader={tableHeader} data={element} />) : ''
            }
            <Divider />
            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Stack direction={'row'} sx={{ alignItems: 'center', gap: 2 }}>
                    <Typography variant='body1'>
                        Show rows:
                    </Typography>
                    <FormControl sx={{
                        width: 100,
                        mb: 0.5,
                        "& .MuiInputBase-root": {
                            borderRadius: 3,
                            fontSize: 16,
                            fontWeight: 400,
                            "& fieldset": {
                                transition: '0.3s all',
                                border: "1px solid #E2E8F0",
                            },
                            "&:hover": {
                                "& fieldset": {
                                    borderColor: "#E2E8F0 !important",
                                },
                            },
                            "& .MuiSelect-select": {
                                py: 1.5,
                                px: 1.5,
                                textAlign: "left",
                                fontFamily: 'Inter, sans-serif'
                            },

                            "& .MuiSelect-root": {
                                "&:hover": {
                                    "& fieldset": {
                                        borderColor: "#E2E8F0 !important",
                                    },
                                },
                            },
                            "&.Mui-focused": {
                                color: "text.secondary",
                                fontWeight: 400,
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: 2,
                                    borderColor: "#E2E8F0 !important",
                                },
                            },
                        },
                    }}>
                        <Select value={rowsSize.data} onChange={(e: SelectChangeEvent<number>) => dispatch(changeRows(e.target.value))}>
                            <MenuItem value={10} sx={{ fontSize: 16 }}>
                                10
                            </MenuItem>
                            <MenuItem value={20} sx={{ fontSize: 16 }}>
                                20
                            </MenuItem>
                            <MenuItem value={25} sx={{ fontSize: 16 }}>
                                25
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Pagination onChange={handleChange} count={10} page={page} shape="rounded" />
            </Box>
        </Box >
    )
}

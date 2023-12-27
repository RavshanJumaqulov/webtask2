import { Box, Button, IconButton, SelectChangeEvent, Stack } from '@mui/material'
import React from 'react'
import CustomSelect from './CustomSelect'
import { DashboardIcon, ListIcon, PlusIcon } from '../icons/Icons'
import { CategoriesState } from '../redux/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { changeCategory } from '../redux/filterCategorySlice'
import { showModal } from '../redux/modalVisibleSlice'

export default function FilterPage({ categories }: {
    categories: CategoriesState
}) {
    const filterCategory = useSelector((state: RootState) => state.filterCategory)
    const dispatch = useDispatch<AppDispatch>()
    const change = (event: SelectChangeEvent) => {
        dispatch(changeCategory(event.target.value));
    };

    return (
        <Box sx={{
            py: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Stack direction={'row'} sx={{ gap: 2 }}>
                <CustomSelect zeroItem="Best seller" items={categories.status == 'succeeded' ? categories.categories : []} />
                <CustomSelect
                    zeroItem="All Categories"
                    items={categories.status == 'succeeded' ? categories.categories : []}
                    onChange={change}
                    value={filterCategory.data}
                />
            </Stack>
            <Stack direction={'row'} sx={{ gap: 2 }}>
                <Button
                    onClick={() => dispatch(showModal())}
                    variant='contained'
                    color='primary'
                    disableElevation
                    startIcon={<PlusIcon sx={{ color: '#fff', fontSize: 14, width: 14, height: 14 }} />}
                    sx={{
                        p: 1,
                        pl: 2,
                        py: 1.5,
                        gap: 1,
                        borderRadius: 3,
                        fontSize: '14px !important',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        lineHeight: '160%',
                        textTransform: 'capitalize'
                    }}
                >
                    New Product
                </Button>
                <IconButton sx={{ p: 1.5, width: 48, height: 48, borderRadius: 3, background: theme => theme.palette.background.default }}>
                    <ListIcon />
                </IconButton>
                <IconButton sx={{ p: 1.5, width: 48, height: 48, borderRadius: 3 }}>
                    <DashboardIcon />
                </IconButton>
            </Stack>
        </Box>
    )
}

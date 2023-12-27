import { Box, Button, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import { CloseIcon, ErrorIcon, SelectChervonIcon, UploadIcon } from '../icons/Icons'
import ModalImageItem from './ModalImageItem'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import CustomSelect from './CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { useEffect, useState } from 'react'
import { CategoriesInterface } from '../types/types'
import { hideModal } from '../redux/modalVisibleSlice'
import { SubmitHandler, useForm } from 'react-hook-form'
import CustomInputError from './CustomInputError'
import { addProducts } from '../redux/productsSlice'

export interface IFormInput {
    title: string,
    description: string,
    brand: number,
    category: number,
    stock: number,
    sales: number,
    keyboard_language: number,
    main_memory: number,
    storage: number,
    warranty: number,
    warranty_type?: number,
    wright: string,
    dimension: string,
    tax: number,
    min_order: number,
    price: string
}

export default function CustomModal() {
    const dispatch = useDispatch<AppDispatch>()
    const {
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
    const [page, setPage] = useState<number>(0)

    const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        if (page == 3) {
            dispatch(addProducts(data))
            reset()
            dispatch(hideModal())
        }
    }

    useEffect(() => {
        if (page == 2) {
            setTimeout(() => { setPage(3) }, 100)
        }
    }, [page])


    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                position: 'fixed',
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(15, 23, 42, 0.45)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                "& input": {
                    fontFamily: 'Inter, sans-serif',
                    py: 2,
                    px: 0,
                    width: "100%",
                    background: "none",
                    border: "none",
                    color: "#0F172A",
                    outline: "none",
                    transition: "0.3s all",
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: '150%',
                    letterSpacing: '0.2px',
                    "&:hover": {
                        borderColor: "none",
                        color: "text.secondary",
                    },
                    "&:focus": {
                        outline: "none",
                        boxShadow: "none",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "text.secondary",
                    },
                    "&:autofill": {
                        background: "none !important",
                        color: "text.secondary",
                    },
                    "&:-webkit-autofill": {
                        "&:hover": {
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "text.secondary",
                            transition: "all 5000s ease-in-out 0s",
                        },
                        "&:focus": {
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "text.secondary",
                            WebkitBoxShadow: "none",
                            boxShadow: "none",
                            transition: "all 5000s ease-in-out 0s",
                        },
                        "&:active": {
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "text.secondary",
                            transition: "all 5000s ease-in-out 0s",
                        },
                        background: "none !important",
                    },
                    "&:-internal-autofill-selected": {
                        background: "none !important",
                        backgroundColor: "none",
                    },
                },
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
                        py: 2,
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
                '& .MuiInputLabel-root.Mui-focused': {
                    display: 'none'
                },
                '& .MuiFormLabel-filled': {
                    display: 'none'
                }
            }}>
            <Box sx={{
                width: '95%',
                maxWidth: 613,
                background: theme => theme.palette.background.paper,
                borderRadius: 4
            }}>
                <Stack direction={'row'} sx={{ p: 3, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='body1' sx={{ fontSize: 18, fontWeight: 700 }}>
                        Product Information
                    </Typography>
                    <IconButton onClick={() => dispatch(hideModal())} sx={{ width: 40, height: 40, borderRadius: 2, p: 1, background: "#F8FAFC" }}>
                        <CloseIcon sx={{ fontSize: 10 }} />
                    </IconButton>
                </Stack>
                <Divider sx={{ borderColor: '#F1F5F9' }} />
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', pr: 0, overflow: 'hidden' }}>
                    <Box sx={{
                        width: '100%',
                        minWidth: 'calc(100% - 48px)',
                        p: 3,
                        height: 400,
                        overflowY: 'auto',
                        transform: `translate(-${100 * page}%)`,
                        transition: '0.3s'

                    }}>
                        <Stack direction={'row'}>
                            <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                Product Image
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700, color: '#ED4F9D' }}>
                                *
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{ mt: 0.5 }}>
                            Image format .jpg .jpeg .png and minimum size 300 x 300px
                        </Typography>
                        <Stack direction={'row'} sx={{ mt: 2, mb: 4, overflowX: 'auto', gap: 2, }}>
                            <ModalImageItem />
                            <ModalImageItem />
                            <Box sx={{
                                width: 130,
                                height: 130,
                                minWidth: 130,
                                minHeight: 130,
                                borderRadius: 3,
                                background: '#F8FAFC',
                                p: 1.25,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1.5
                            }}>
                                <UploadIcon sx={{ color: '#2563EB', fontSize: 32 }} />
                                <Typography variant='h6' sx={{ color: '#2563EB', fontWeight: 700 }}>
                                    New Image
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack direction={'row'}>
                            <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                Product Name
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700, color: '#ED4F9D' }}>
                                *
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{ mt: 0.5 }}>
                            Include min. 5 characters to make it more interesting
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                                mb: 4,
                                border: '1px solid #E2E8F0',
                                borderRadius: 3,
                                px: 2,
                                gap: 1.5,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <input
                                type="text"
                                {...register('title', {
                                    required: {
                                        value: true,
                                        message: "Maydon bo'sh qolgan"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Belgilar soni kam!'
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: 'Belgilar soni ko`p'
                                    }
                                }
                                )} placeholder='Enter name' />
                        </Box>
                        {errors.title && <CustomInputError error={errors.title} />}
                        <Stack direction={'row'}>
                            <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                Product Descriptions
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700, color: '#ED4F9D' }}>
                                *
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{ mt: 0.5 }}>
                            Include min. 26 characters to make it easier for buyers to understand and find your product
                        </Typography>
                        <Box
                            component={'textarea'}
                            {...register('description', {
                                required: { value: true, message: "Maydon bo'sh qolgan!" },
                                minLength: {
                                    value: 10,
                                    message: 'Belgilar soni kam!'
                                },
                                maxLength: {
                                    value: 250,
                                    message: 'Belgilar soni ko`p'
                                }
                            })}
                            sx={{
                                mb: 4,
                                width: 'calc(100% - 32px)',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                lineHeight: '150%',
                                letterSpacing: '0.2px',
                                height: 100,
                                p: 2,
                                gap: 2,
                                borderRadius: 3,
                                borderColor: '#E2E8F0',
                                background: 'none',
                                fontSize: 16,
                                outline: 'none',
                                resize: 'none'
                            }}
                        />
                        {errors.description && <CustomInputError error={errors.description} />}
                        <Grid2 container spacing={3}>
                            <Grid2 xs={12} md={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Brand
                                </Typography>
                                <FormControl sx={{ width: '100%', mt: 2 }}>
                                    <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please select</InputLabel>
                                    <Select {...register('brand', { required: { value: true, message: "Maydon bo'sh qolgan!" } })} IconComponent={SelectChervonIcon} >
                                        {brands.status == 'succeeded' &&
                                            brands.categories.map((el: CategoriesInterface) => {
                                                return (
                                                    <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                                        {el.title}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                {errors.brand && <CustomInputError error={errors.brand} mt={0} />}
                            </Grid2>
                            <Grid2 xs={12} md={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Category
                                </Typography>
                                <FormControl sx={{ width: '100%', mt: 2 }}>
                                    <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please select</InputLabel>
                                    <Select {...register('category', { required: { value: true, message: "Maydon bo'sh qolgan!" } })} IconComponent={SelectChervonIcon} >
                                        {categories.status == 'succeeded' &&
                                            categories.categories.map((el: CategoriesInterface) => {
                                                return (
                                                    <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                                        {el.title}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                {errors.category && <CustomInputError error={errors.category} mt={0} />}
                            </Grid2>
                            <Grid2 xs={12} md={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Stock
                                </Typography>
                                <Box
                                    sx={{
                                        mt: 2,
                                        border: '1px solid #E2E8F0',
                                        borderRadius: 3,
                                        px: 2,
                                        gap: 1.5,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        '& input': {
                                            '&::-webkit-outer-spin-button': {
                                                WebkitAppearance: 'none'
                                            },
                                            '&::-webkit-inner-spin-button': {
                                                WebkitAppearance: 'none'
                                            }
                                        }
                                    }}
                                >
                                    <input {...register('stock', { required: { value: true, message: "Maydon bo'sh qolgan!" }, maxLength: { value: 20, message: "Belgilar soni ko'p!" } })} type="number" placeholder='Enter stock' min={0} step={0.01} />
                                </Box>
                                {errors.stock && <CustomInputError error={errors.stock} mt={0} />}
                            </Grid2>
                            <Grid2 xs={12} md={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Sales
                                </Typography>
                                <Box
                                    sx={{
                                        mt: 2,
                                        border: '1px solid #E2E8F0',
                                        borderRadius: 3,
                                        px: 2,
                                        gap: 1.5,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        '& input': {
                                            '&::-webkit-outer-spin-button': {
                                                WebkitAppearance: 'none'
                                            },
                                            '&::-webkit-inner-spin-button': {
                                                WebkitAppearance: 'none'
                                            }
                                        }
                                    }}
                                >
                                    <input {...register('sales', { required: { value: true, message: "Maydon bo'sh qolgan!" }, maxLength: { value: 20, message: "Belgilar soni ko'p!" } })} type="number" placeholder='Enter sales' min={0} />
                                </Box>
                                {errors.sales && <CustomInputError error={errors.sales} mt={0} />}
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        minWidth: 'calc(100% - 48px)',
                        p: 3,
                        height: 400,
                        overflowY: 'auto',
                        transform: `translate(-${100 * page}%)`,
                        transition: '0.3s'

                    }}>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                            <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                Keyboard language
                            </Typography>
                            <ErrorIcon sx={{ color: 'text.secondary', fontSize: 14 }} />
                        </Stack>
                        <FormControl sx={{ width: '100%', mt: 2, mb: 0.5 }}>
                            <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please select</InputLabel>
                            <Select {...register('keyboard_language', { required: { value: true, message: 'No selected keyboard language' } })} IconComponent={SelectChervonIcon} >
                                {productKeyboards.status == 'succeeded' &&
                                    productKeyboards.categories.map((el: CategoriesInterface) => {
                                        return (
                                            <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                                {el.title}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                        {errors.keyboard_language && <CustomInputError error={errors.keyboard_language} mt={0} />}
                        <Grid2 container spacing={3} sx={{ mt: 1 }}>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Memory
                                </Typography>
                                <FormControl sx={{ width: '100%', mt: 2, mb: 0.5 }}>
                                    <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please select</InputLabel>
                                    <Select {...register('main_memory', { required: { value: true, message: 'No selected memory size' } })} IconComponent={SelectChervonIcon}>
                                        {productMemories.status == 'succeeded' &&
                                            productMemories.categories.map((el: CategoriesInterface) => {
                                                return (
                                                    <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                                        {el.title}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                {errors.main_memory && <CustomInputError error={errors.main_memory} mt={0} />}
                            </Grid2>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Storages
                                </Typography>
                                <FormControl sx={{ width: '100%', mt: 2, mb: 0.5 }}>
                                    <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please select</InputLabel>
                                    <Select {...register('storage', { required: { value: true, message: 'No selected storage size' } })} IconComponent={SelectChervonIcon} >
                                        {productStorage.status == 'succeeded' &&
                                            productStorage.categories.map((el: CategoriesInterface) => {
                                                return (
                                                    <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                                        {el.title}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                {errors.storage && <CustomInputError error={errors.storage} mt={0} />}
                            </Grid2>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Product weight
                                </Typography>
                                <Box
                                    sx={{
                                        mt: 2,
                                        border: '1px solid #E2E8F0',
                                        borderRadius: 3,
                                        px: 2,
                                        gap: 1.5,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <input {...register('wright', { required: { value: true, message: "Maydon bo'sh qolgan" } })} type="text" placeholder='Enter weight' />
                                </Box>
                                {errors.wright && <CustomInputError error={errors.wright} mt={0} />}
                            </Grid2>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Dimension (L x W x T)
                                </Typography>
                                <Box
                                    sx={{
                                        mt: 2,
                                        border: '1px solid #E2E8F0',
                                        borderRadius: 3,
                                        px: 2,
                                        gap: 1.5,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <input {...register('dimension', { required: { value: true, message: "Maydon bo'sh qolgan" } })} type="text" placeholder='Enter dimension' />
                                </Box>
                                {errors.dimension && <CustomInputError error={errors.dimension} mt={0} />}
                            </Grid2>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Warranty
                                </Typography>
                                <FormControl sx={{ width: '100%', mt: 2, }}>
                                    <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please fill in</InputLabel>
                                    <Select {...register('warranty', { required: { value: true, message: 'No selected warranty' } })} IconComponent={SelectChervonIcon}>
                                        {warranty.status == 'succeeded' &&
                                            warranty.data.map((el: CategoriesInterface) => {
                                                return (
                                                    <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                                        {el.title}
                                                    </MenuItem>
                                                )
                                            })
                                        }

                                    </Select>
                                </FormControl>
                                {errors.warranty && <CustomInputError error={errors.warranty} mt={0} />}
                            </Grid2>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Warranty type
                                </Typography>
                                <FormControl sx={{ width: '100%', mt: 2, }}>
                                    <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please fill in</InputLabel>
                                    <Select {...register('warranty_type', { required: { value: true, message: 'No selected warranty type' } })} IconComponent={SelectChervonIcon}>
                                        {warrantyType.status == 'succeeded' &&
                                            warrantyType.data.map((el: CategoriesInterface) => {
                                                return (
                                                    <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                                        {el.title}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                {errors.warranty_type && <CustomInputError error={errors.warranty_type} mt={0} />}
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        minWidth: 'calc(100% - 48px)',
                        p: 3,
                        height: 400,
                        overflowY: 'auto',
                        transform: `translate(-${page == 3 ? 100 * (page - 1) : 100 * page}%)`,
                        transition: '0.3s',
                    }}>
                        <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                            Tax included price
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                                mb: 4,
                                border: '1px solid #E2E8F0',
                                borderRadius: 3,
                                px: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <input type="text" placeholder='Enter name' />
                        </Box>
                        <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                            Tax excluded price
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                                mb: 4,
                                border: '1px solid #E2E8F0',
                                borderRadius: 3,
                                px: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <input type="text" placeholder='Enter name' />
                        </Box>
                        <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                            Tax rule
                        </Typography>
                        <FormControl sx={{ width: '100%', mt: 2, mb: 0.5 }}>
                            <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please fill in</InputLabel>
                            <Select {...register('tax', { required: { value: true, message: 'No selected tax rule' } })} IconComponent={SelectChervonIcon}>
                                {productPricingTax.status == 'succeeded' &&
                                    productPricingTax.categories.map((el: CategoriesInterface) => {
                                        return (
                                            <MenuItem key={el.id} value={`${el.id}`} sx={{ fontSize: 16 }}>
                                                {el.title}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                            {errors.tax && <CustomInputError error={errors.tax} mt={0} />}
                        </FormControl>
                        <Grid2 container spacing={3} sx={{ mt: 1 }}>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Unit price
                                </Typography>
                                <Box
                                    sx={{
                                        mt: 2,
                                        border: '1px solid #E2E8F0',
                                        borderRadius: 3,
                                        px: 2,
                                        gap: 1.5,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        '& input': {
                                            '&::-webkit-outer-spin-button': {
                                                WebkitAppearance: 'none'
                                            },
                                            '&::-webkit-inner-spin-button': {
                                                WebkitAppearance: 'none'
                                            }
                                        }
                                    }}
                                >
                                    <input {...register('price', { required: { value: true, message: "Maydon bo'sh qolgan!" } })} type="number" placeholder='Enter sales' min={0} />
                                </Box>
                                {errors.price && <CustomInputError error={errors.price} mt={0} />}
                            </Grid2>
                            <Grid2 xs={6}>
                                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 700 }}>
                                    Minimum order
                                </Typography>
                                <FormControl sx={{ width: '100%', mt: 2, mb: 0.5 }}>
                                    <InputLabel sx={{ color: '#94A3B8', fontWeight: 500 }}>Please fill in</InputLabel>
                                    <Select {...register('min_order', { required: { value: true, message: 'No selected minimum order' } })} IconComponent={SelectChervonIcon} >
                                        {minimumOrder.status == 'succeeded' &&
                                            minimumOrder.categories.map((el: CategoriesInterface) => {
                                                return (
                                                    <MenuItem key={el.id} value={`${el.id}`} sx={{ fontSize: 16 }}>
                                                        {el.title}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                {errors.min_order && <CustomInputError error={errors.min_order} mt={0} />}
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: '#F1F5F9' }} />
                <Box sx={{ p: 3 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={6}>
                            <Button
                                onClick={() => setPage(page => page == 3 ? page - 2 : page - 1)}
                                size='large'
                                variant='outlined'
                                disableElevation
                                disabled={page <= 0 ? true : false}
                                sx={{
                                    borderColor: '#E2E8F0',
                                    width: '100%',
                                    borderRadius: 3,
                                    p: 2,
                                    textTransform: 'capitalize'
                                }}>
                                <Typography variant='body1' sx={{ fontWeight: 700 }}>
                                    Previous
                                </Typography>
                            </Button>
                        </Grid2>
                        <Grid2 xs={6}>
                            {
                                page == 3 ? <Button
                                    type={'submit'}
                                    size='large'
                                    variant='contained'
                                    disableElevation
                                    sx={{
                                        borderColor: '#E2E8F0',
                                        width: '100%',
                                        borderRadius: 3,
                                        p: 2,
                                        textTransform: 'capitalize'
                                    }}>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 700,
                                            color: theme => theme.palette.background.default,
                                        }}>
                                        Done
                                    </Typography>
                                </Button> :
                                    <Button
                                        onClick={() => setPage(page => page == 2 ? page : page + 1)}
                                        disabled={page == 2 ? true : false}
                                        size='large'
                                        type='button'
                                        variant='contained'
                                        disableElevation
                                        sx={{
                                            borderColor: '#E2E8F0',
                                            width: '100%',
                                            borderRadius: 3,
                                            p: 2,
                                            textTransform: 'capitalize'
                                        }}>
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontWeight: 700,
                                                color: theme => theme.palette.background.default,
                                            }}>
                                            Next
                                        </Typography>
                                    </Button>
                            }
                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
        </Box>
    )
}

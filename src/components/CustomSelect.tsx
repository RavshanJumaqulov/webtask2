import { Box, FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import { SelectChervonIcon } from '../icons/Icons'
export default function CustomSelect({ zeroItem, items, onChange = undefined, value = 0 }: { zeroItem: string, items: any, onChange?: any, value?: number }) {

    return (
        <Box sx={{
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
        }}>
            <FormControl sx={{ width: 170 }}>
                <Select value={value} IconComponent={SelectChervonIcon} onChange={onChange}>
                    <MenuItem value={0} sx={{ fontSize: 16 }}>
                        {zeroItem}
                    </MenuItem>
                    {
                        items.map((el: any) => {
                            return (
                                <MenuItem key={el.id} value={el.id} sx={{ fontSize: 16 }}>
                                    {el.title}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

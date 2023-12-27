import { Box } from '@mui/material'
import React from 'react'
import { SearchIcon } from '../icons/Icons'

export default function CustomInput() {
    return (
        <Box
            sx={{
                border: '1px solid #E2E8F0',
                borderRadius: 3,
                px: 2,
                gap: 1.5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                "& input": {
                    py: 2,
                    px: 1,
                    width: "100%",
                    background: "none",
                    border: "none",
                    color: "text.secondary",
                    outline: "none",
                    transition: "0.3s all",
                    fontSize: 16,
                    fontWeight: 400,
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
            }}
        >
            <SearchIcon sx={{color: 'text.secondary'}} />
            <input type="text" placeholder='Search...' />
        </Box>
    )
}

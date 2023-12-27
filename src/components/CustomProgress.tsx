import { CircularProgress } from '@mui/material'
import React from 'react'

export default function CustomProgress() {
    return (
        <CircularProgress sx={{ display: 'block', fontSize: 14, width: '14px !important', height: '14px !important', '& svg': { fontSize: 14, width: 14, height: 14, } }} />
    )
}

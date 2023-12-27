import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomInput from './CustomInput'
import { BellIcon } from '../icons/Icons'

export default function PageTop() {
    return (
        <Box sx={{ display: 'flex', py: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box >
                <Typography variant='subtitle1' >
                    Product List
                </Typography>
                <Typography variant='h6' sx={{ mt: 0.5 }}>
                    Detailed information about your products
                </Typography>
            </Box>
            <Stack direction={'row'} sx={{ alignItems: 'center', gap: 4 }}>
                <CustomInput />
                <Badge color='primary' overlap="circular" badgeContent=" " variant="dot">
                    <BellIcon />
                </Badge>
                <Avatar sx={{width: 40, height: 40}} alt="Remy Sharp" src="avatar.png" />
            </Stack>
        </Box>
    )
}

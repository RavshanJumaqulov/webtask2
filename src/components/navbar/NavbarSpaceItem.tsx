import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface NavbarMenuItemProps {
    name: string;
    to: string;
    color: string
}

export default function NavbarSpaceItem({ name, to, color }: NavbarMenuItemProps) {

    return (
        <Stack
            component={NavLink}
            to={to}
            direction={'row'}
            sx={{
                px: 2,
                py: 2,
                gap: 2,
                borderRadius: 3,
                transition: '0.3s all',
                textDecoration: 'none',
                alignItems: 'center',
                '& .MuiTypography-root': {
                    transition: '0.3s all',
                    color: 'text.primary',
                    fontWeight: 600,
                },
            }}
        >
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: color }} />
            <Typography variant='body3' >
                {name}
            </Typography>
        </Stack>
    )
}

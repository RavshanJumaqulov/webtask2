import { Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface NavbarMenuItemProps {
    icon: React.ReactNode;
    name: string;
    to: string;
}

export default function NavbarMenuItem({ icon, name, to }: NavbarMenuItemProps) {
    const location = useLocation()    
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
                background: location.pathname.startsWith(to) ? '#F8FAFC' : 'none',
                '& .MuiTypography-root': {
                    transition: '0.3s all',
                    color: location.pathname.startsWith(to) ? 'primary.main' :  'text.secondary',
                    fontWeight: location.pathname.startsWith(to) ? 700 :  500,
                },
                '& .MuiSvgIcon-root': {
                    color: location.pathname.startsWith(to) ? 'primary.main' :  'text.secondary',
                    transition: '0.3s all',
                },
                '&:hover': {
                    background: '#F8FAFC',
                    '& .MuiTypography-root': {
                        color: location.pathname.startsWith(to) ? 'primary.main' :  'text.primary'
                    },
                    '& .MuiSvgIcon-root': {
                        color: location.pathname.startsWith(to) ? 'primary.main' :  'text.primary'
                    }
                }
            }}
        >
            {icon}
            <Typography variant='body3' >
                {name}
            </Typography>
        </Stack>
    )
}

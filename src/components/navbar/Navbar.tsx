import { Box, Divider, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import { JsxElement } from 'typescript'
import { DarkModeIcon, DashboardIcon, GoalsIcon, LogoIcon, MinusIcon, MyTasksIcon, PlusIcon, ProductsIcon, SettingsIcons } from '../../icons/Icons'
import NavbarMenuItem from './NavbarMenuItem'
import NavbarSpaceItem from './NavbarSpaceItem'
import useVisiblity from '../../hooks/useVisibility'
import CustomSwitch from '../CustomSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { toogleTheme } from '../../redux/themeSlice'
import { RootState } from '../../redux/store'

interface NavbarMenuItemProps {
    icon: React.ReactNode;
    name: string;
    to: string;
}
interface NavbarSpaceItemProps {
    name: string;
    to: string;
    color: string
}

export default function Navbar({ children }: { children?: React.ReactNode }): JSX.Element {
    const dispatch = useDispatch()
    const thema = useSelector((state: RootState) => state.thema)
    
    const visibility = useVisiblity(true)
    const items: NavbarMenuItemProps[] = [
        {
            icon: <DashboardIcon />,
            name: "Dashboard",
            to: '/dashboard',
        },
        {
            icon: <MyTasksIcon />,
            name: "My Tasks",
            to: '/mytasks',
        },
        {
            icon: <ProductsIcon />,
            name: "Products",
            to: '/products',
        },
        {
            icon: <GoalsIcon />,
            name: "Goals",
            to: '/goals',
        }
    ]
    const spaces: NavbarSpaceItemProps[] = [
        {
            name: 'Website design',
            to: 'website-design',
            color: '#6366F1'
        },
        {
            name: 'SEO Analythics',
            to: 'seo-analythics',
            color: '#F6A723'
        },
        {
            name: 'Hiphonic App',
            to: 'hiphonic-app',
            color: '#34D399'
        }
    ]
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
            <Box sx={{
                background: theme => theme.palette.background.paper,
                position: 'fixed',
                width: 250,
                height: '100vh',
            }}>
                <Box sx={{ px: 2, minHeight: '100vh', maxHeight: '100vh', overflowY: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2 }}>
                        <LogoIcon />
                        <Typography sx={{
                            ml: 0.5,
                            color: '#2563EB',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: 23.2,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '125%',
                            letterSpacing: '-0.29px',
                        }}>
                            4DX
                        </Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#F1F5F9', mb: 2 }} />
                    <Typography
                        variant='h6'
                        sx={{
                            mx: 2,
                            mb: 2,
                            fontWeight: 700,
                            letterSpacing: '1px',
                            color: theme => theme.palette.mode == 'light' ? '#94A3B8' : ''
                        }}>
                        MENU
                    </Typography>
                    {
                        items.map((el: NavbarMenuItemProps, index: number) => <NavbarMenuItem
                            key={index}
                            icon={el.icon}
                            name={el.name}
                            to={el.to}
                        />)
                    }
                    <Divider sx={{ borderColor: '#F1F5F9', my: 2 }} />
                    <Box sx={{
                        pr: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Typography
                            variant='h6'
                            sx={{
                                mx: 2,
                                fontWeight: 700,
                                letterSpacing: '1px',
                                color: theme => theme.palette.mode == 'light' ? '#94A3B8' : ''
                            }}>
                            SPACE
                        </Typography>
                        <Box sx={{ '&:hover': { '& .MuiSvgIcon-root': { color: 'text.primary' } } }} onClick={() => visibility.toggle()} >
                            {
                                visibility.visiblity ? <MinusIcon sx={{ color: 'text.secondary', fontSize: 14, width: 14, height: 14 }} /> : <PlusIcon sx={{ color: 'text.secondary', fontSize: 14, width: 14, height: 14 }} />
                            }
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            overflow: 'hidden',
                            height: visibility.visiblity ? 150 : 0,
                            transition: '0.3s all',
                            mb: 1.5,
                        }}>
                        {
                            spaces.map((el: NavbarSpaceItemProps, index: number) => <NavbarSpaceItem key={index} name={el.name} to={el.to} color={el.color} />)
                        }
                    </Box>
                    <Box sx={{ mb: 1, mt: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', }}>
                        <NavbarMenuItem
                            icon={<SettingsIcons />}
                            name='Settings'
                            to='settings'
                        />
                        <Divider sx={{ borderColor: '#F1F5F9', my: 1 }} />
                        <Stack
                            direction={'row'}
                            sx={{
                                px: 2,
                                py: 2,
                                gap: 2,
                                borderRadius: 3,
                                transition: '0.3s all',
                                textDecoration: 'none',
                                '& .MuiTypography-root': {
                                    transition: '0.3s all',
                                    color: 'text.secondary',
                                    fontWeight: 500,
                                },
                                '& .MuiSvgIcon-root': {
                                    transition: '0.3s all',
                                    color: 'text.secondary',
                                },
                            }}
                        >
                            <DarkModeIcon />
                            <Typography variant='body3'>
                                DarkMode
                            </Typography>
                            <CustomSwitch onClick={() =>dispatch(toogleTheme())} status={thema.data == 'dark' ? true : false} />
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: 'calc(100% - 250px)', ml: '250px', height: 'auto' }}>
                {children}
            </Box>
        </Box>
    )
}

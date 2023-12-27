import { Box, CircularProgress } from '@mui/material'
import { MouseEventHandler } from 'react';
import CustomProgress from './CustomProgress';

export default function CustomSwitch({ status=false, loading=false, onClick }: { status?: boolean, loading?: boolean, onClick?: MouseEventHandler<any> | any }) {
    
    return (
        <Box 
        onClick={() => onClick}
        sx={{
            width: 40,
            maxWidth: 40,
            height: 24,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: status ? 'flex-end' : 'flex-start',
            background: theme => theme.palette.mode == 'light' ? status ? "#2563EB" : '#CBD5E1' : '#000',
            borderRadius: 100,
        }}>
            <Box sx={{
                width: 16,
                height: 16,
                mx: 0.5,
                borderRadius: 1000,
                border: '4px solid secondary.main',
                background: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {loading && <CustomProgress />}
            </Box>
        </Box>
    )
}

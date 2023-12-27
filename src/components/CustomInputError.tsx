import { Box, Typography } from '@mui/material'
import { FieldErrors } from 'react-hook-form';
export default function CustomInputError({ error, mt = -4 }: { error: any, mt?: number }) {
  console.log(error);

  return (
    <Box>
      {
        error?.type == "required" && <Typography variant='h6' color='error' sx={{ position: 'absolute', mt: mt }}>{error?.message}</Typography>
      }
      {
        error?.type == "minLength" && <Typography variant='h6' color='error' sx={{ position: 'absolute', mt: mt }}>{error?.message}</Typography>
      }
      {
        error?.type == "maxLength" && <Typography variant='h6' color='error' sx={{ position: 'absolute', mt: mt }}>{error?.message}</Typography>
      }
    </Box>
  )
}

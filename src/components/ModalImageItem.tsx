import { Box } from '@mui/material'
import React from 'react'

export default function ModalImageItem() {
    return (
        <Box sx={{ width: 130, height: 130, minWidth: 130, minHeight: 130, borderRadius: 3, background: '#F8FAFC', p: 1.25 }}>
            <Box 
            component={'img'} 
            src='https://s3-alpha-sig.figma.com/img/94e5/9588/baa303b80eb541b57d7b040708038ff1?Expires=1704672000&Signature=KGfacIEIZGVUT3z8fdDN8QusMNDrEGlQ5EUVOZ5BpCSFJZy9-0x9-9oTaqDHhM5aAW~MwQC4lzpEDvGZzQB7XBmQCn9Uhk4odvbm9NjDfJx4bci9AkxzrXyk4gGSbobjkZVFHPuDzMNmvvZwHyPSCrGkLxq3lhb~UvLD~lpyVZDvy7dwydDgKFF1MLUtbo6hzRKfO5jcQhWyTDzWK11GZ3qh66HQusIcH~Uh2Z3qDeO6expc8lYjIqDq-ppdveD7fOdFpKEYSWo-lPAkxKCPvcdalFpvsMDaRdfL7BVmG-E3ZXBJkpRce1WW7R0v3bPnc1MjK4vVY7IGLcY6z~fTqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' 
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
            }}
            />
        </Box>
    )
}

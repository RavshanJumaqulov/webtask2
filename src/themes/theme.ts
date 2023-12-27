import { PaletteMode, createTheme } from "@mui/material";

export const theme = (mode: PaletteMode) => createTheme({
    palette: {
        mode,
        primary: {
            main: '#2563EB'
        },
        secondary: {
            main: '#F8FAFC'
        },
        background: {
            paper: '#fff',
            default: '#F8FAFC'
        },
        text: {
            primary: '#0F172A',
            secondary: '#64748B',
        }
    },
    typography: {
        subtitle1: {
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '125%',
            letterSpacing: '0.2px',
        },
        body1: {
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '150%',
            letterSpacing: '0.2px',
        },
        body2: {
            color: '#94A3B8',
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '150%',
            letterSpacing: '0.2px',
        },

        body3: {
            color: '#94A3B8',
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '160%',
            letterSpacing: '0.2px',
        },
        h6: {
            color: '#64748B',
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '160%',
        }
    },
})

declare module '@mui/material/styles/createTypography' {
    interface Typography {
        body3: TypographyStyle;
    }
    interface TypographyOptions {
        body3?: TypographyStyleOptions;
    }
}

declare module '@mui/material/Typography/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true
    }
}

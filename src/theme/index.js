import {createTheme} from '@material-ui/core'
// import shadows from './shadows'
import typography from './typography'
import MuiButton from './overrides/MuiButton'

const theme = createTheme({
    palette: {
        primary: {
            light: '#B54C4C',
            main: '#8d2e2e',
            dark: '#812525',
            contrastText: '#c8bdb9'
        },
        // secondary: {},
        background: {
            paper: '#fff',
            default: '#D2DCCE'
            // image: colors.cyan[100]
        },
        text: {
            primary: '#222120'
        },
        action: {
            disabledBackground: '#8d2e2e66',
            disabled: '#c8bdb966'
        }
    },
    // shape: {},
    // shadows: ['none'],
    typography,
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    boxSizing: 'border-box'
                    // margin: 0,
                    // padding: 0
                },
                html: {
                    '-webkit-font-smoothing': 'antialiased',
                    '-moz-osx-font-smoothing': 'grayscale'
                    // height: '100%',
                    // width: '100%'
                },
                body: {
                    fontSize: '20px',
                    '@media (min-width: 768px)': {
                        fontSize: '20px'
                    },
                    lineHeight: 1.5
                    // height: '100%',
                    // width: '100%',
                },
                a: {
                    textDecoration: 'none'
                },
                p: {
                    fontSize: '20px',
                    '@media (min-width: 768px)': {
                        fontSize: '20px'
                    },
                    lineHeight: 1.5
                },
                '#root': {
                    height: '100%',
                    width: '100%'
                }
            }
        },
        MuiButton
    }
})

theme.props = {
    MuiButton: {
        disableElevation: true
    }
}

export default theme

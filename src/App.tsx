import {useMemo} from 'react'
import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme/index'
import Home from './Home'

import {SnackbarProvider} from 'context'
import Snackbar from 'components/shared/Snackbar'

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10)

const txTimeout = 30000 // milliseconds (confirm this works for your project)

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
                            <Home
                            />
                <Snackbar />
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App

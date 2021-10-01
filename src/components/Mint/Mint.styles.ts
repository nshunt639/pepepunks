import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '30px',
        '@media only screen and (min-width: 768px)': {
            marginTop: '30px'
        },
        '@media only screen and (min-width: 1024px)': {
            marginTop: '30pt'
        },
        '@media only screen and (min-width: 1200px)': {
            marginTop: '50pt'
        },
        '@media only screen and (min-width: 1500px)': {
            marginTop: '100px'
        }
    },
    mintButtonWrapper: {
        position: 'relative'
    },
    mintButton: {
        fontFamily: 'Death Markers Drip',
        fontSize: '20pt',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        borderRadius: '100px',
        '@media only screen and (min-width: 768px)': {
            fontSize: '20pt',
            paddingLeft: '3rem',
            paddingRight: '3rem'
        },
        '@media only screen and (min-width: 1024px)': {
            fontSize: '30pt',
            paddingLeft: '5rem',
            paddingRight: '5rem'
        },
        '@media only screen and (min-width: 1200px)': {
            fontSize: '40pt',
            paddingLeft: '7rem',
            paddingRight: '7rem'
        },
        '@media only screen and (min-width: 1500px)': {
            fontSize: '5rem',
            paddingLeft: '7rem',
            paddingRight: '7rem'
        }
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-10pt',
        marginLeft: '-10pt',
        width: '20pt !important',
        height: '20pt !important',
        '@media only screen and (min-width: 768px)': {
            marginTop: '-10pt',
            marginLeft: '-10pt',
            width: '20pt !important',
            height: '20pt !important'
        },
        '@media only screen and (min-width: 1024px)': {
            marginTop: '-15pt',
            marginLeft: '-15pt',
            width: '30pt !important',
            height: '30pt !important'
        },
        '@media only screen and (min-width: 1200px)': {
            marginTop: '-20pt',
            marginLeft: '-20pt',
            width: '40pt !important',
            height: '40pt !important'
        },
        '@media only screen and (min-width: 1500px)': {
            marginTop: '-2.5rem',
            marginLeft: '-2.5rem',
            width: '5rem !important',
            height: '5rem !important'
        }
    },
    countContainer: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media only screen and (min-width: 768px)': {
            marginTop: '30px'
        },
        '@media only screen and (min-width: 1024px)': {
            marginTop: '50px'
        },
        '@media only screen and (min-width: 1200px)': {
            marginTop: '100px'
        },
        '@media only screen and (min-width: 1500px)': {
            marginTop: '100px'
        }
    },
    countButton: {
        fontFamily: 'Death Markers Drip',
        fontSize: '40pt',
        padding: '0 30pt',
        borderRadius: '150px',
        '@media only screen and (min-width: 768px)': {
            fontSize: '40pt',
            paddingLeft: '20pt',
            paddingRight: '20pt'
        },
        '@media only screen and (min-width: 1024px)': {
            fontSize: '60pt',
            paddingLeft: '60pt',
            paddingRight: '60pt'
        },
        '@media only screen and (min-width: 1200px)': {
            fontSize: '60pt',
            paddingLeft: '40pt',
            paddingRight: '40pt'
        },
        '@media only screen and (min-width: 1500px)': {
            fontSize: '8rem',
            paddingLeft: '6rem',
            paddingRight: '6rem'
        }
    },
    count: {
        fontSize: '70pt',
        width: '10rem',
        '@media only screen and (min-width: 768px)': {
            fontSize: '70pt'
        },
        '@media only screen and (min-width: 1024px)': {
            fontSize: '80pt',
            margin: '0 2rem'
        },
        '@media only screen and (min-width: 1200px)': {
            fontSize: '100pt'
        },
        '@media only screen and (min-width: 1500px)': {
            fontSize: '16rem'
        }
    }
}))

export default useStyles

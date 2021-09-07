import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from './images/logo.png'
import Grid from '@material-ui/core/Grid'
import Menu from '../../components/Menu/Menu'

const useStyles = makeStyles({
    appBarColor: {
        backgroundColor: '#1e1d26',
    },
    logo: {
        marginTop: 15,
        marginBottom: 15,
    },
})
const Header = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="sticky" className={classes.appBarColor}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid item xs={10} sm={8} md={6}>
                            <img
                                src={Logo}
                                alt="Logo"
                                className={classes.logo}
                            />
                        </Grid>
                        <Grid item xs={2} sm={4} md={6}>
                            <Menu />
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header

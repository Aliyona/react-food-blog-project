import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})

const Menu = () => {
    const classes = useStyles()
    return (
        <>
            <Button color="inherit">
                <Link to="/" className={classes.link}>
                    Home
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/" className={classes.link}>
                    Recipes
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/categories" className={classes.link}>
                    Categories
                </Link>
            </Button>
            <Button color="inherit">About us</Button>
        </>
    )
}

export default Menu

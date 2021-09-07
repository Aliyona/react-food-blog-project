import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

// const useStyles = makeStyles({
//     appBarColor: {
//         backgroundColor: '#1e1d26',
//     },
//     logo: {
//         marginTop: 15,
//         marginBottom: 15,
//     },
// })

const Menu = () => {
    // const classes = useStyles()
    return (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Recipes</Button>
            <Button color="inherit">Categories</Button>
            <Button color="inherit">About us</Button>
        </>
    )
}

export default Menu

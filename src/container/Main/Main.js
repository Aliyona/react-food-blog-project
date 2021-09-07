import React from 'react'
import Container from '@material-ui/core/Container'
import RecipesList from '../../components/Recipes/RecipesList'

const Main = () => {
    return (
        <>
            <Container maxWidth="lg">
                <RecipesList />
            </Container>
        </>
    )
}
export default Main

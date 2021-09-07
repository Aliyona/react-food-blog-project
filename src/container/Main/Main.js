import React from 'react'
import Container from '@material-ui/core/Container'
import RecipesList from '../../components/Recipes/RecipesList'
import { Route } from 'react-router-dom'
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'
const Main = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Route path="/" exact component={RecipesList} />
                <Route path="/categories" component={CategoriesPage} />
            </Container>
        </>
    )
}
export default Main

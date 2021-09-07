import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import RecipesListItem from './RecipeListItem'
import recipesArray from './recipesArray'
const RecipesList = () => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                Recipes List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {recipesArray.map(
                    ({ id, category, name, description, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <RecipesListItem
                                id={id}
                                category={category}
                                name={name}
                                description={description}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default RecipesList

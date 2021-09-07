import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './RecipeListItem.css'
const RecipeListItem = ({ category, name, description, image }) => {
    return (
        <>
            <Card>
                <CardContent className="recipe">
                    <div className="recipe-img">
                        <img src={image} />
                    </div>
                    <h4>{category}</h4>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </CardContent>
            </Card>
        </>
    )
}
export default RecipeListItem

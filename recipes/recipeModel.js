const db = require("../data/config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients")
    .join("ingredients", "ingredients.id", "recipes_ingredients.ingredientId" )
    .where("recipes_ingredients.recipeId", recipe_id)
    .select("recipes_ingredients.Quantity", "ingredients.Name")
}

function getInstructions(recipe_id) {
    return db("instructions").where("recipeId", recipe_id)
}
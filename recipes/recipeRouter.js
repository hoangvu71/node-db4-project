const express = require("express")

const router = express.Router()
const recipeModel = require("./recipeModel")

router.get("/", (req, res) => {
    recipeModel.getRecipes()
        .then((recipe) => {
            res.json(recipe)
        })
        .catch((error) => {
            console.log(error),
            res.status(500).json({
                errorMessage: "Failed to get recipe"
            })
        })
})

router.get("/:id", (req, res) => {
    recipeModel.getShoppingList(req.params.id)
        .then((list) => {
            res.json(list)
        })
        .catch((error) => {
            console.log(error),
            res.status(500).json({
                errorMessage: "Failed to get recipe"
            })
        })
})

router.get("/:id/instructions", (req, res) => {
    recipeModel.getInstructions(req.params.id)
        .then((list) => {
            res.json(list)
        })
        .catch((error) => {
            console.log(error),
            res.status(500).json({
                errorMessage: "Failed to get recipe"
            })
        })
})
module.exports = router
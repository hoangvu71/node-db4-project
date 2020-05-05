const express = require("express")
const server = express()
const port = 4000
const recipeRouter = require("./recipes/recipeRouter")
server.use(express.json())

server.use("/recipes", recipeRouter)

server.listen(port, () => {
    console.log(`Listening to http://localhost${port}`)
})
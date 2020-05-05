
exports.seed = async function(knex) {
  await knex("recipes_ingredients").insert([
    {recipeId: 1, ingredientId:1, Quantity: 3.1},
    {recipeId: 1, ingredientId:2, Quantity: 1.2},
    {recipeId: 2, ingredientId:1, Quantity: 31.0},
  ])
};

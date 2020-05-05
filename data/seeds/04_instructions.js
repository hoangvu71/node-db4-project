
exports.seed = async function(knex) {
  await knex("instructions").insert([
    {instruction: "Stir around", recipeId : 1},
    {instruction: "Shake upside down", recipeId : 1},
    {instruction: "Drain the water", recipeId : 1},
    {instruction: "Add", recipeId : 2},
    {instruction: "Take it out", recipeId : 2},

  ])
};


exports.seed = async function(knex) {
  await knex("recipes").insert([
    {Name: "Hawaii Super Spam"},
    {Name: "Colorado Bear Grillio"}
  ])
};

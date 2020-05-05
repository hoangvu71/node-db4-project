
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {Name: "Sugar"},
    {Name: "Salt"}
  ])
};

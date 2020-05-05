
exports.up = async function(knex) {
  await knex.schema
    .createTable("ingredients", (table) => {
        table.increments("id");
        table.text("Name").unique().notNullable();
    })
  await knex.schema
    .createTable("recipes", (table) => {
        table.increments("id");
        table.text("Name").unique().notNullable();
    })
   await knex.schema
        .createTable("recipes_ingredients", (table) => {
        table.integer("recipeId")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.integer("ingredientId")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");;
        table.float("Quantity").notNullable();
        table.integer("instructionId")
            .references("id")
            .inTable("instructions")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.primary(["recipeId", "ingredientId"])
    })
    await knex.schema
        .createTable("instructions", (table) => {
            table.increments("id")
            table.text("instruction")
            table.integer("recipeId")
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
    await knex.schema.dropTableIfExists("instructions")
};

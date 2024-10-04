exports.up = async function (knex) {
    await knex.schema.createTable("biologists", table => {
      table.increments("id").primary();
      table.text("name");
      table.text("email");
      table.text("password");
    });
  
    await knex.schema.createTable("patients", table => {
      table.increments("id").primary();
      table.text("name");
      table.text("avatar");
      table.integer("age");
      table.integer("weight");
      table.text("status");
      table.text("habitat");
      table.text("behavior");
      table.text("diet");
      table.text("observation");
    });
  
    
    await knex.schema.alterTable("patients", table => {
      table.integer("biologist_id").unsigned().references("id").inTable("biologists");
    });
  };
  
  exports.down = async function (knex) {
    await knex.schema.dropTable("patients");
    await knex.schema.dropTable("biologists");
  };
  
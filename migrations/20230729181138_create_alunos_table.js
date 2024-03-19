/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("aluno", (table) => {
    table.bigIncrements("id").primary();
    table.string("nome");
    table.string("email");
    table.string("nacionalidade");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("aluno");
};

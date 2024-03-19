import knex, { Knex } from "knex";
import knexConfig from "../config/knex";

let conn: Knex;

async function knexService() {
  if (conn) {
    return conn;
  }

  conn = await knex(knexConfig);
  return conn;
}

export default knexService;

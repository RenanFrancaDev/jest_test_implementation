import knex, { Knex } from "knex"; // try server
import { IAluno } from "./aluno";
import knexConfig from "../../config/knex";

// let connetion: Knex;

// if (connetion) {
//   connetion;
// } else {
//   connetion = knex(knexConfig);
// }

let connetion = knex(knexConfig);

export const getAll = async (): Promise<IAluno[] | []> => {
  return connetion<IAluno>("aluno").select();
};

export const store = async (params: IAluno) => {
  return connetion<IAluno>("aluno").insert(params);
};

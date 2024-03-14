import knex from "../../service/knex";
import { IAluno, IAlunoParams } from "./aluno";

export const getAll = async (): Promise<IAluno[] | []> => {
  return knex("aluno").select();
};

export const store = async (params: IAlunoParams) => {
  return knex("aluno").insert(params);
};

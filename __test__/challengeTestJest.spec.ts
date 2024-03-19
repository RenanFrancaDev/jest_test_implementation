import request from "supertest";
import { server, closeServer } from "../server";

describe("Testes das rotas dos alunos", () => {
  afterAll(() => {
    closeServer();
  });

  it("Deve retornar todos os alunos", async () => {
    const response = await request(server).get("/aluno");
    expect(response.status).toBe(200);
  });

  it("Deve criar um novo aluno", async () => {
    const novoAluno = {
      nome: "Renan França",
      email: "renan@test.com",
      nacionalidade: "brasileira",
    };
    const response = await request(server).post("/aluno").send(novoAluno);

    expect(response.status).toBe(201);
  });
});

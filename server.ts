import express from "express";
import alunoRoute from "./src/module/aluno/aluno.route";
const app = express();
app.use(express.json());

app.use("/aluno", alunoRoute);

const server = app.listen(4000, () => {
  console.log("server running!");
});

const closeServer = () => {
  server.close();
};

export { server, closeServer };

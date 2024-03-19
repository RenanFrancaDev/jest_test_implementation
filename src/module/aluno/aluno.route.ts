import type { Request, Response } from "express";
import { Router } from "express";
import { getAll, store } from "./aluno.model";

const router = Router();

router.get("/", async (_: Request, res: Response) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const data = await store(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;

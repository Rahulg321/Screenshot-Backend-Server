import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  console.log("inside get screenshot");

  res.json({ message: "inside get screenshot" });
});

export default router;

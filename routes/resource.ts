import { Router, type Request, type Response } from "express";
import authenticateToken from "../middleware/authenticate-token";

const router = Router();

router.get("/", authenticateToken, async (req: Request, res: Response) => {
  console.log("inside get resource");

  res.json({ message: "inside get resource" });
});

router.get("/", authenticateToken, async (req: Request, res: Response) => {
  console.log("posting a resource");

  res.json({ message: "inside get resource" });
});

export default router;

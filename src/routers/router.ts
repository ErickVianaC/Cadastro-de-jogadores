import { Router } from "express";
import playerRouter from "./playerRouter";
import matchesRouter from "./matchRouter";

const router = Router();

router.use("/players", playerRouter);
router.use("/matches", matchesRouter);




export default router;
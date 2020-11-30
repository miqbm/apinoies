import { Router } from "express";
import * as noiaCtrl from "./noies.controller";

const router = Router();

router.get("/noies", noiaCtrl.getNoies);
router.get("/noies/:id", noiaCtrl.getNoia);
router.post("/noies", noiaCtrl.postNoia);
router.delete("/noies/:id", noiaCtrl.deleteNoia);
router.put("/noies/:id", noiaCtrl.updateNoia);

export default router;

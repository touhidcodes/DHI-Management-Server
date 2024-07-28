import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { parentControllers } from "./parent.controller";
import { parentValidationSchema } from "./parent.validation";

const router = express.Router();

router.get("/", parentControllers.getAllParents);

router.post(
  "/",
  validateRequest(parentValidationSchema.createParentSchema),
  parentControllers.createParent
);

router.put(
  "/:parentId",
  validateRequest(parentValidationSchema.updateParentSchema),
  parentControllers.updateParent
);

router.delete("/:parentId", parentControllers.deleteParent);

export const parentRoutes = router;

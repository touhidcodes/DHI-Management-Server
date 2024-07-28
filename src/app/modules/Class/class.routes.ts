import express from "express";
import { classControllers } from "./class.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { classValidationSchema } from "./class.validation";

const router = express.Router();

router.get("/", classControllers.getAllClasses);

router.post(
  "/",
  validateRequest(classValidationSchema.createClassSchema),
  classControllers.createClass
);

router.put(
  "/:classId",
  validateRequest(classValidationSchema.updateClassSchema),
  classControllers.updateClass
);

router.delete("/:classId", classControllers.deleteClass);

export const classRoutes = router;

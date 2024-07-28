import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { studentControllers } from "./student.controller";
import { studentValidationSchema } from "./student.validation";

const router = express.Router();

router.get("/", studentControllers.getAllStudents);

router.get("/:studentId", studentControllers.getStudentById);

router.post(
  "/",
  validateRequest(studentValidationSchema.createStudentSchema),
  studentControllers.createStudent
);

router.put(
  "/:studentId",
  validateRequest(studentValidationSchema.updateStudentSchema),
  studentControllers.updateStudent
);

router.delete("/:studentId", studentControllers.deleteStudent);

export const parentRoutes = router;

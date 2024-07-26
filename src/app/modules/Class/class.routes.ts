import express from "express";
import { classControllers } from "./class.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth(), classControllers.getAllClasses);

export const classRoutes = router;

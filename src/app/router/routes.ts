import express from "express";
import { authRoutes } from "../modules/Auth/auth.routes";
import { userRoutes } from "../modules/User/user.routes";
import { classRoutes } from "../modules/Class/class.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: authRoutes,
  },
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/class",
    route: classRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

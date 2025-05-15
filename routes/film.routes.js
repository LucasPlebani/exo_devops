import express from "express";
import filmController from "../controllers/film.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();



router.post("/", verifyToken, filmController.createFilm);
router.get("/", filmController.getAllFilms);
router.get("/:id", filmController.getFilmById);
router.put("/:id", verifyToken, filmController.updateFilm);
router.delete("/:id", verifyToken, filmController.deleteFilm);

export default router;
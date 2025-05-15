const express = require("express");
const filmController = require("../controllers/film.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();



router.post("/", verifyToken, filmController.createFilm);
router.get("/", filmController.getAllFilms);
router.get("/:id", filmController.getFilmById);
router.put("/:id", verifyToken, filmController.updateFilm);
router.delete("/:id", verifyToken, filmController.deleteFilm);

module.exports = router;
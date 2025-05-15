const express = require("express");
const filmController = require("../controllers/film.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const db = require("../models/db"); 
const router = express.Router();

router.post("/", verifyToken, filmController.createFilm);
router.get("/view", async (req, res) => {
  const [films] = await db.query("SELECT * FROM films");
  res.render("films", { films });
});
//router.get("/", filmController.getAllFilms);
router.get("/:id", filmController.getFilmById);
router.put("/:id", verifyToken, filmController.updateFilm);
router.delete("/:id", verifyToken, filmController.deleteFilm);

module.exports = router;
const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
const db = require("../models/db"); 
const { verifyToken } = require("../middleware/auth.middleware");

router.post("/", verifyToken, recipeController.createRecipe);
router.get("/view", async (req, res) => {
  const [recipes] = await db.query("SELECT * FROM recipes");
  res.render("recipes", { recipes });
});
//router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipeById);
router.put("/:id", verifyToken, recipeController.updateRecipe);
router.delete("/:id", verifyToken, recipeController.deleteRecipe);

module.exports = router;

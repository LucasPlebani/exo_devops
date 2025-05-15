const express = require("express");
const app = express();
const PORT = 3000;

const recipeRoutes = require("./routes/recipes.routes");
const filmRoutes = require("./routes/film.routes");

app.get("/test", (req, res) => res.send("Test OK"));
app.get("/", (req, res) =>
  res.send("Hello, projet Docker nodejs avec Railway !")
);

app.use("/recipes", recipeRoutes); // Routes pour les recettes
app.use("/films", filmRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

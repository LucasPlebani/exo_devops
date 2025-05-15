const express = require("express");
const app = express();
const PORT = 3000;

const recipeRoutes = require("./routes/recipes.routes");
const filmRoutes = require("./routes/film.routes");


app.get("/", (req, res) =>
  res.send("Hello, projet Docker nodejs avec Railway !")
);

app.use("/recipes", recipeRoutes); // Routes pour les recettes
app.use("/film", filmRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send("Hello, projet Docker nodejs avec Railway !")
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

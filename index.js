const { connetcDB } = require("./src/database/connection");
const express = require("express");
const cors = require("cors");

const rutas_pet = require("./src/route/pet");
const rutas_user = require("./src/route/user");

connetcDB();

const port = 3900;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Salud del servidor
app.get("/api", (req, res) => {
  res.status(200).send("Hello World!");
});

// Rutas entidad pet
app.use("/api/pet", rutas_pet);
app.use("/api/user", rutas_user);

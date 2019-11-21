const express = require("express");
const routes = express.Router();

const AtividadeController = require("./controller/AtividadeController");

routes.get("/home", AtividadeController.index);
routes.post("/home", AtividadeController.store);
routes.get("/home/:id", AtividadeController.show);
routes.post("/home/:id", AtividadeController.update);

module.exports = routes;

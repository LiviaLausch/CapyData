const { Router } = require("express");

const BiologistsController = require("../controllers/BiologistsController");

const biologistsController = new BiologistsController();
const biologistsRoutes = new Router();

biologistsRoutes.get("/:id", biologistsController.show);
biologistsRoutes.put("/:id", biologistsController.update);
biologistsRoutes.post("/", biologistsController.create);
biologistsRoutes.delete("/:id", biologistsController.delete);

module.exports = biologistsRoutes;
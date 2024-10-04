const { Router } = require("express");
const multer = require("multer");  
const uploadConfig = require("../configs/upload");

const PatientsController = require("../controllers/PatientsController");
const PatientsAvatarController = require("../controllers/PatientsAvatarController");

const patientsController = new PatientsController();
const patientsAvatarController = new PatientsAvatarController();

const patientsRoutes = new Router();
const upload = multer(uploadConfig.MULTER)

patientsRoutes.get("/", patientsController.listAllByBiologistId);

patientsRoutes.get("/:id", patientsController.listPatientByBiologist);

patientsRoutes.post("/", patientsController.create);
patientsRoutes.put("/:id", patientsController.update);
patientsRoutes.delete("/:id", patientsController.delete);
patientsRoutes.put("/:id/avatar", upload.single("avatar"), patientsAvatarController.update);

module.exports = patientsRoutes;
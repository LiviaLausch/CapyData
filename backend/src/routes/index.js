const { Router } = require("express");

const patientsRouter = require("./patients.routes");
const biologistsRouter = require("./biologists.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router(); 
routes.use("/patients", patientsRouter);
routes.use("/biologists", biologistsRouter);
routes.use("/session", sessionsRoutes);

module.exports = routes;
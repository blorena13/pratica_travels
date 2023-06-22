import express from "express";
import * as passengerControllers from "../controllers/passengers.controller.js";

const passengersRouter = express.Router();

passengersRouter.get("/passengers/travels", passengerControllers.passengersTravels);

export default passengersRouter;
import { Router } from "express";
import {
  filterPeople,
  getPeopleData,
} from "../controllers/people_controller.js";
import { healthCheck } from "../controllers/status_controller.js";

const router = Router();

router.get("/health", healthCheck);

// Retrieve all persons and data
router.get("/people", getPeopleData);

// Retrieve all filtered persons and data by date
router.post("/people", filterPeople);

export default router;

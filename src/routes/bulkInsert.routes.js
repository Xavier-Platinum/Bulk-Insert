import express from "express";
const router = express.Router();
import { insertData } from "../controllers/bulkInsert.controller.js";

router.post("/create", insertData);

export default router;
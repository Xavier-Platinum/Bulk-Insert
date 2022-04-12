import express from "express";
const router = express.Router();
import { insertData } from "../controllers/bulkInsert.controller";

router.post("/create", insertData);

export default router;
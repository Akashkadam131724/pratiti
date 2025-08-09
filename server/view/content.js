import express from "express";
import {
  createContent,
  getContent,
} from "../controller/contentModelController";

const router = express.Router();

router.post("/create", createContent);
router.get("/get-all-content", getContent);

export default router;

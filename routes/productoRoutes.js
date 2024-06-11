import express from "express";
import {
  createProductFunction,
  deleteProductFunction,
} from "../controllers/productCotroller.js";

const router = express.Router();

router.post("/producto", createProductFunction);
router.delete("/producto", deleteProductFunction);
router.get("/");

export default router;

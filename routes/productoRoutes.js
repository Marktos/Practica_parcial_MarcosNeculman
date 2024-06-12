import express from "express";
import {
  createProductFunction,
  deleteProductFunction,
  searchProductFunction,
  countCategoryFunction,
  changeNameFunction,
  calculateAverage,
  showOrderFunction,
} from "../controllers/productCotroller.js";

const router = express.Router();

router.post("/producto", createProductFunction);
router.delete("/producto", deleteProductFunction);
router.get("/producto", searchProductFunction);
router.get("/productos/categorias", countCategoryFunction);
router.post("/productos/codificar", changeNameFunction);
router.get("/productos/promedio", calculateAverage);
router.get("/productos/top", showOrderFunction);
router.get("/");

export default router;

import express from "express";
import { crearProducto, borrarProducto } from "../models/productmodel.js";

const createProductFunction = async (req, res) => {
  await crearProducto(req.body);
  res.status(201).json({
    msj: "esta todo bien",
  });
};

const deleteProductFunction = async (req, res) => {
  const { id } = req.query;
  await borrarProducto(id);
  res.status(200).json({ msg: "Borrado lol" });
};

export { createProductFunction, deleteProductFunction };

import express from "express";
import {
  crearProducto,
  borrarProducto,
  buscarProducto,
  contarCategoria,
  cambiarNombre,
  calcularPromedio,
  ordenarProductos,
} from "../models/productmodel.js";

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

const searchProductFunction = async (req, res) => {
  const { name, min, max, category } = req.query;
  const productos = await buscarProducto(name, min, max, category);
  if (!productos.length == 0) {
    res.status(200).json({ msg: "Producto encontrado" });
  } else {
    res.status(404).json({ msg: "Producto no encontrado" });
  }
};

const countCategoryFunction = async (req, res) => {
  const categorias = await contarCategoria();
  res.status(200).json({ categorias });
};

const changeNameFunction = async (req, res) => {
  const { id, newName } = req.query;
  const producto = await cambiarNombre(id, newName);
  res.status(200).json({ producto });
};

const calculateAverage = async (req, res) => {
  const { category } = req.query;
  const promedio = await calcularPromedio(category);
  res.status(200).json({ promedio });
};

const showOrderFunction = async (req, res) => {
  const { criterio, cantidad } = req.query;

  const ordenado = await ordenarProductos(criterio, cantidad);
  res.status(200).json({ ordenado });
};

export {
  createProductFunction,
  deleteProductFunction,
  searchProductFunction,
  countCategoryFunction,
  changeNameFunction,
  calculateAverage,
  showOrderFunction,
};

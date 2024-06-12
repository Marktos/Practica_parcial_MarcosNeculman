import Producto from "../db/productos.js";
import { Op } from "sequelize";

const crearProducto = async (producto) => {
  await Producto.create(producto);
  return producto;
};

const borrarProducto = async (id) => {
  await Producto.destroy({ where: { id } });
};

const buscarProducto = async (name, min, max, category) => {
  const whereClause = {};

  if (name) {
    whereClause.name = {
      [Op.like]: "%${name}%",
    };
  }

  if (category) {
    whereClause.category = category;
  }

  if (min && max) {
    whereClause.price = {
      [Op.between]: [parseFloat(min), parseFloat(max)],
    };
  } else if (min) {
    whereClause.price = {
      [Op.gte]: parseFloat(min),
    };
  } else if (max) {
    whereClause.price = {
      [Op.lte]: parseFloat(max),
    };
  }
  await Producto.findAll({
    where: whereClause,
  });
};

const contarCategoria = async () => {
  const productos = await Producto.findAll();

  const categorias = {};

  productos.map((producto) => {
    if (!categorias[producto.category]) {
      categorias[producto.category] = 1;
    } else {
      categorias[producto.category]++;
    }
  });

  return categorias;
};

const cambiarNombre = async (id, newName) => {
  const producto = await Producto.findOne({ where: { id } });
  producto.name = producto.name + newName;
  await producto.save();
  return producto;
};

const calcularPromedio = async (category) => {
  let total = 0;
  let promedio = 0;
  let productos = [];

  if (!category) {
    productos = await Producto.findAll();
  } else {
    productos = await Producto.findAll({ where: { category } });
  }

  console.log(productos);
  productos.map((producto) => {
    total = total + producto.price;
  });

  promedio = total + productos.length;
  return `El promedio de todos los productos es de ${promedio}`;
};

const ordenarProductos = async (criterio, cantidad) => {
  cantidad = parseInt(cantidad);
  const productos = await Producto.findAll({
    order: [["price", criterio]],
    limit: cantidad,
  });

  return productos;
};

export {
  crearProducto,
  borrarProducto,
  buscarProducto,
  contarCategoria,
  cambiarNombre,
  calcularPromedio,
  ordenarProductos,
};

import Producto from "../db/productos.js";

const crearProducto = async (producto) => {
  await Producto.create(producto);
  return producto;
};

const borrarProducto = async (id) => {
  await Producto.destroy({ where: { id } });
};

export { crearProducto, borrarProducto };

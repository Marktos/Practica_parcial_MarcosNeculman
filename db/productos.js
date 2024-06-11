import { DataTypes } from "sequelize";
import sequelize from "./conection.js";

const Producto = sequelize.define("Productos", {
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  price: {
    type: DataTypes.BOOLEAN,
    allownull: false,
  },
  category: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

export default Producto;

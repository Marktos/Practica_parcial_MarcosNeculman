import { Sequelize, DataTypes, Op } from "sequelize";

const sequelize = new Sequelize("practica_parcial", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;

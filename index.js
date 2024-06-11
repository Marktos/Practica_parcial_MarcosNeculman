import express from "express";
import routerProducts from "./routes/productoRoutes.js";
import sequelize from "./db/conection.js";

const app = express();
const port = 3000;

sequelize.authenticate();
console.log("Conexion exitosa con base de datos");

sequelize.sync();
console.log("La sincronizacion fue exitosa");

app.use(express.json());
app.use(routerProducts);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto:${port}`);
});

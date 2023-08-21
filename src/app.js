import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import log  from './config/logger.js'
import setupSwagger from './config/swagger.js';


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  log.info('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
routes(app);

setupSwagger(app);

export default app
import express from "express";
import database from "./database.js";
import controller from "./controller/controller.js";

const app = express();
const port = 3000;

app.use(express.json());

controller(app, database);

app.listen(port, () => {

    console.log(`http://localhost:${port}`)

});


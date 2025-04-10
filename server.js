import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./src/config/viewEngine";
import webRoutes from "./src/routers/web";
require("dotenv").config();

let app = express();

viewEngine(app);
webRoutes(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT;

app.listen(port, () => {
  console.log("app is running at the port" + port);
});

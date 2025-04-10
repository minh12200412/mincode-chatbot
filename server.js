import express from "express";
import bodyParser from "body-parser";
import { configViewEngine } from "./src/config/viewEngine.js"; // Import named export
import { initWebRouters } from "./src/routers/web.js"; // Import named export
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware phải được khai báo TRƯỚC khi định tuyến
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình view engine và routes
configViewEngine(app);
initWebRouters(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

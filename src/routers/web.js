import express from "express";
import homeController from "../controllers/homeController.js";

const router = express.Router();

const initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/webhook", homeController.postWebHook);
  router.get("/webhook", homeController.getWebHook);
  return app.use("/", router);
};

export default initWebRouters;

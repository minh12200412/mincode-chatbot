import express from "express";
import {
  getHomePage,
  postWebHook,
  getWebHook,
} from "../controllers/homeController.js";

const router = express.Router();

export const initWebRouters = (app) => {
  router.get("/", getHomePage);
  router.post("/webhook", postWebHook);
  router.get("/webhook", getWebHook);
  app.use("/", router);
};

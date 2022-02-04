import dotenv from "dotenv";
import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";
import restRoutes from "./routes/index.routes.js";
import HTTPError from "./utils/http-error.js";
import {onConnection} from "./utils/websocket.js"
import {getMessageType} from "./controllers/chat.controller.js"
import http from "http";
import{ WebSocketServer } from "ws";
dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads/media', express.static(path.join('uploads', 'media')));

//Routes
app.use("/api", restRoutes);

// handle non registered routes
app.use((req, res, next) => {
  const error = new HTTPError("Invalid route", 404);
  next(error);
});

// error handling
app.use((error, req, res, next) => {
  return res.status(error.code).json({
    message: error.message,
    details: error.details.length ? error.details : undefined,
  });
});

//Listen
const port = process.env.PORT || 5000;
const httpServer = http.createServer(app).listen(port , () => console.log(`app listen on ${port}`));

const initiateWebSockets = async () => {
 
  const wss = new WebSocketServer({
    server: httpServer
  });
  
  wss.on("connection", function (ws, req) {
    const searchParams = new URLSearchParams(req.url.split("/")[1]);
    var authToken = searchParams.get("auth");
    if (authToken) {
      onConnection(authToken, ws);
      ws.on("message", function (message) {
        try {
          let wsMessage = JSON.parse(message);
          getMessageType(wsMessage);
        } catch (e) {
          console.log(e);
        }
      });
    }
  });
};
initiateWebSockets();
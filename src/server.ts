import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { Exception } from "./exception/Exception";
import { router } from "./routes";



const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: any, request: Request, response: Response, next: NextFunction) => {
    if (err.name == "Exception") {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }
    return response.status(500).json({
      error: "Error",
      message:"Internal Server Exception"
    })
    
  });

app.listen(3000, () => console.log("Server is running"));

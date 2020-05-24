import * as express from 'express';
import { NextFunction, Request, Response } from "express";
import { Routes } from "./routes/UsuarioRoute";
import bodyParser = require("body-parser");
import * as cors from 'cors';

// initializing express in this application
const app = express();
// add cors
app.use(cors())
// support application/json type post data
app.use(bodyParser.json());
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
// for routing the http request to controller


// register routes
app.get("/", async function (req: Request, res: Response, next: NextFunction) {
  res.json({
      status: "OK, server running"
  });
});

//const userRoute = require('./routes/UsuarioRoute');
//app.use('/usuarios', userRoute);

const routePrv = new Routes();
routePrv.routes(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info('Express server listening on http://localhost:3000');
});
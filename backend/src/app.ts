import * as express from 'express';
import { Routes } from "./routes/UsuarioRoute";
import bodyParser = require("body-parser");
import * as cors from 'cors';

class App {
    public app: express.Application;
    public routePrv: Routes;
    constructor() {
        // initializing express in this application
        this.app = express();
        // add cors
        this.app.use(cors())
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // for routing the http request to controller
        this.routePrv = new Routes();
        this.routePrv.routes(this.app);
    }
}
export default new App().app;
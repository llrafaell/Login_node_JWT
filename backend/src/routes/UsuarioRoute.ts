import {Request, Response} from "express";
import {Controller} from "../controller/Controller";
class Routes {
    private controller: Controller;
    constructor() {
        this.controller = new Controller();
    }
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
// following code is to handle http://localhost:3000/superHero request.
        app.route('/usuarios')
            .get(this.controller.getAllUsuario)
            .post(this.controller.addUsuario);
        // following code is to handle http://localhost:3000/superHero/{superHeroId} request.
        app.route('/usuarios/:usuarioId')
            .get(this.controller.getSuperHeroById)
            .put(this.controller.updateUsuario)
            .delete(this.controller.deleteUsuario);
    }
}
export {Routes};
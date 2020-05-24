
import { UsuarioController } from "../controller/UsuarioController";
class Routes {
    private controller: UsuarioController;
    constructor() {
        this.controller = new UsuarioController();
    }
    public routes(app): void {
        app.route('/usuarios')
            .get(this.controller.getAllUsuario)
            .post(this.controller.addUsuario);
        app.route('/usuarios/:usuarioId')
            .get(this.controller.getSuperHeroById)
            .put(this.controller.updateUsuario)
            .delete(this.controller.deleteUsuario);
    }
}
export { Routes };
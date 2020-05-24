import { Request, Response } from 'express';
import { connection } from "../connection/Connection";
import Usuario from "../entity/Usuario";
class Controller {
    constructor() { }
    public getAllUsuario(req: Request, res: Response) {
        connection
            .then(async connection => {
                const usuarios: Usuario[] = await connection.manager.find(Usuario);
                res.json(usuarios);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public addUsuario(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestUsuario = req.body;
                let usuario = new Usuario();
                usuario.nome = requestUsuario.nome;
                usuario.email = requestUsuario.email;
                await connection.manager.save(usuario);
                res.json({ message: "Successfully Saved." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public updateUsuario(req: Request, res: Response) {
        connection
            .then(async connection => {
                let usuario = await connection.manager.findOne(Usuario, req.params.usuarioId);
                let requestUsuario = req.body;
                usuario.nome = requestUsuario.name;
                usuario.email = requestUsuario.email;

                await connection.manager.save(usuario);
                res.json({ message: "Successfully Updated." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public getSuperHeroById(req: Request, res: Response) {
        connection
            .then(async connection => {
                let usuario = await connection.manager.findOne(Usuario, req.params.usuarioId);
                res.json(usuario)
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public deleteUsuario(req: Request, res: Response) {
        connection
            .then(async connection => {
                let usuario = await connection.manager.findOne(Usuario, req.params.usuarioId);
                // delete our super-hero
                //await connection.manager.remove(Usuario, { id: req.params.usuarioId });
                res.json({ message: "Successfully Removed." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
}
export { Controller }
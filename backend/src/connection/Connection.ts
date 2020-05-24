import { createConnection } from "typeorm";
import Usuario from "../entity/Usuario";
export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5433, // default port of postgres
    username: "postgres", // our created username, you can have your own user name
    password: "sup0rte", // our created username, you can have your own password
    database: "login_node", // our created database name, you can have your own
    entities: [
        // typeORM will not be able to create database table if we forget to put entity class name here..
        Usuario, // our SuperHero entity class
    ],
    synchronize: true,
    logging: false
});
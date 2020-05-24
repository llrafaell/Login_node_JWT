import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public nome: string;

    @Column({ nullable: true })
    public email: string;

    @Column({ nullable: true })
    public senha: string;

}
export default Usuario;
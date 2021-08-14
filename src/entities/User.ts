import { Column, CreateDateColumn, Entity, PrimaryColumn,UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("users")
export class User {

    @PrimaryColumn()
    readonly id: string;

    @Column({
        name: "name",
        length:255
    })
    name: string;

    @Column({
        name: "email",
        length:255
    })
    email: string;

    @Column({
        name: "admin",
        default:false
    })
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn() 
    updated_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

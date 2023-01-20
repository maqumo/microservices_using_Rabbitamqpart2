import { Entity } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { ObjectIdColumn } from "typeorm/decorator/columns/ObjectIdColumn";

@Entity()
export class Product{
    @ObjectIdColumn()
    id: string;

    @Column({unique: true})
    admin_id : number;

    @Column()
    title: string;

    @Column()
    image: string;

    @Column({default: 0})
    likes: number;
}
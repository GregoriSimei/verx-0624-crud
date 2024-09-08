import { envPostgres } from "@config/variables/postgres";
import { IUser } from "@domain/models/User";
import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users', { schema: envPostgres.schema })
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'external_id' })
    @Generated('uuid')
    externalId: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    pass: string;

    @Column()
    birthday: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
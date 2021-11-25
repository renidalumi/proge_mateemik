import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class eUser {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    eesNimi!: string;

    @Column()
    pereNimi!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    role!: string;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updatedDate!: Date;

    @DeleteDateColumn()
    deletedDate!: Date;
}

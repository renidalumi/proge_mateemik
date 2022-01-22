import pool from '../../database';
//import { getConnection } from 'typeorm';
import db from "../../db";
import hashService from "../general/services/hashService";
import {INewUsers, IUsers, IUpdateUsers} from "./interfaces";
//import eUser from './entity';

//const connection = getConnection();

const usersService = {
    getAllUsers: (): IUsers[] => {
        const {users} = db;
        return users;
    },
    getUserById: (id: number): IUsers | undefined => {
        const user = db.users.find((element) => element.id === id);
        return user;
    },
    getUserByEmail: (email: string): IUsers | undefined => {
        const user = db.users.find((element) => element.email === email);
        return user;
    },
    createUser: async (newUsers: INewUsers) => {
        const id = db.users.length +1;
        const hashedPassword = await hashService.hash(newUsers.password);
        db.users.push({
            id,
            ...newUsers,
            password: hashedPassword,
        });
        return id;
    },
    updateUser: (users: IUpdateUsers): boolean => {
        const {id, eesNimi, pereNimi} = users;
        const index = db.users.findIndex((element) => element.id === id);
        if (eesNimi){
            db.users[index].eesNimi = eesNimi;
        }
        if (pereNimi){
            db.users[index].pereNimi = pereNimi;
        }
        return true;
    },
    removeUser:  (id: number): boolean => {
        const index = db.users.findIndex((element) => element.id === id);
        db.users.splice(index, 1);
        return true;
    },
    
};
export default usersService;
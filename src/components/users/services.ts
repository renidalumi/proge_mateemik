import { getConnection } from 'typeorm';
import db from "../../db";
import hashService from "../general/services/hashService";
import {NewUsers, Users, UpdateUsers} from "./interfaces";
import eUser from './entity';

const connection = getConnection();

const usersService = {
    getAllUsers: async () => {
    const users = await connection.getRepository(eUser).find();
    return users;
    },
    getUserById: (id: number): Users | undefined => {
        const user = db.users.find((element) => element.id === id);
        return user;
    },
    getUserByEmail: async (email: string) => {
        const user = await connection.getRepository(eUser).findOne( {email});
        return user;
    },
    createUser: async (newUsers: NewUsers) => {
        const hashedPassword = await hashService.hash(newUsers.password);
        const user = {
            ...newUsers,
            password: hashedPassword,

        }
        const result = await connection.getRepository(eUser).save(user);
        const id = db.users.length +1;
        
        return id;
    },
    updateUser: (users: UpdateUsers): boolean => {
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
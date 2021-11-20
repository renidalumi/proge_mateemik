import db from "../../db";
import hashService from "../general/services/hashService";
import {NewUsers, Users, UpdateUsers } from "./interfaces";
const usersService = {
    getAllUsers: (): Users[] => {
        const {users} = db;
        return users;
    },
    getUserById: (id: number): Users | undefined => {
        const user = db.users.find((element) => element.id === id);
        return user;
    },
    getUserByEmail: (email: string): Users | undefined => {
        const user = db.users.find((element) => element.email === email);
        return user;
    },
    createUser: async (newUsers: NewUsers) => {
        const id = db.users.length +1;
        const hashedPassword = await hashService.hash(newUsers.password);
        db.users.push({
            id,
            ...newUsers,
            password: hashedPassword,
        });
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
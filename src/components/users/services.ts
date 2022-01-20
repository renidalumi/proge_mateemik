//import db from "../../db";
import { FieldPacket, ResultSetHeader } from "mysql2";
import pool from "../../database";
import hashService from "../general/services/hashService";
import {INewUsers, IUsers, IUpdateUsers } from "./interfaces";

const usersService = {
    getAllUsers: async (): Promise<IUsers[] | false> => {
        try { 
            const [users] : [IUsers[], FieldPacket[]] =await pool.query(
                "SELECT * FROM users"
            );
            return users;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getUserById: async (id: number): Promise<IUsers | false> => {
        try {
            const [users] : [IUsers[], FieldPacket[]] =await pool.query(
                'SELECT id, eesNimi, pereNimi, email FROM users WHERE id =? IS NULL LIMIT 1', [id]
            );
            return users[0];
        } catch (error) {
            console.log(error);
            return false;
            
        }
        // const user = db.users.find((element) => element.id === id);
        // return user;
    },
    getUserByEmail: async (email: string): Promise< IUsers | false> => {
        try {
            const [users]: [IUsers[], FieldPacket[]] = await pool.query(
              "SELECT * FROM users WHERE email = ?",
            [email]
        );
        return users[0];
        } catch (error) {
        console.log(error);
        return false;
        }
        },
    
    createUser: async (newUsers: INewUsers): Promise<number | false> => {
        try {
            const hashedPassword = await hashService.hash(newUsers.password);
            const user = {
            ...newUsers,
            password: hashedPassword,
        };
        const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query('INSERT INTO users SET ?', [user]);
        return result.insertId;
        } catch (error) {
        console.log(error);
        return false;
        }
    },

    updateUser: async (user: IUpdateUsers): Promise<boolean> => {
        try {
            const userToUpdate = { ...user };
            if (user.password) userToUpdate.password = await hashService.hash(user.password);
            const result = await pool.query('UPDATE users SET ? WHERE id = ?', [userToUpdate, user.id]);
            console.log(result);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
        },
    removeUser: async (id: number): Promise<boolean> => {
        try {
            await pool.query('UPDATE users SET dateDeleted = ? WHERE id = ?', [new Date(), id]);
            return true;
        } catch (error) {
            console.log(error);
            return false;   
        }
    },
}; 

export default usersService;

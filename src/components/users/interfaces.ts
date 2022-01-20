import {RowDataPacket} from "mysql2";

interface INewUsers{
    eesNimi: string;
    pereNimi: string;
    email: string;
    password: string;
    role: 'Admin' | 'User';
}
interface IUsers extends INewUsers, RowDataPacket{
    id: number;    
}

interface IUpdateUsers{
    id: number;
    eesNimi?: string;
    pereNimi?: string;
    email?: string;
    password?: string;
    role?: 'Admin' | 'User';
}

export {INewUsers, IUsers, IUpdateUsers};

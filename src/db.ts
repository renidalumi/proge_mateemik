import { resolve } from 'path/posix';
import {Varvid, newVarvid} from './components/varvid/interfaces';
import { Users } from './components/users/interfaces';

interface Db {
    Varvid: Varvid[];
    users: Users[];
}

const db: Db = {
    users: [
    {
        id: 1,
        eesNimi: 'Mari',
        pereNimi: 'Kari',
        email: 'mari@kari.ee',
        password: 'mari',
        role: 'Admin',
        },
        {
        id: 2,
        eesNimi: 'Kati',
        pereNimi: 'Karu',
        email: 'kati@karu.ee',
        password: 'kati',
        role: 'User',
        },
    ],
    Varvid:[
        {
            id: 1,
            varv: 'lilla',
            vaartus: 1,
            kaeVarv: 'sinine',
            kaeVaartus: 3,
        },
        {
            id: 2,
            varv: 'punane',
            vaartus: 2,
            kaeVarv: 'kollane',
            kaeVaartus: 4,
        },
        {
            id: 3,
            varv: 'roosa',
            vaartus: 3,
            kaeVarv: 'roheline',
            kaeVaartus: 7,
        },
    ]
};

export default db;
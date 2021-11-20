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
            riik: 'Eesti',
            pealinn: 'Tallinn',
            kuuluvusEu: 9999,
            keel: 'eesti',
            elanikeArv: 11111111,
            pindala: 111111,
            rahaühik: 'EURO €',
            kaardiVärv: 'roosa',
        },
        {
            id: 2,
            riik: 'Hispaania',
            pealinn: 'Madrid',
            kuuluvusEu: 9999,
            keel: 'hispaania',
            elanikeArv: 11111111,
            pindala: 111111,
            rahaühik: 'EURO €',
            kaardiVärv: 'lilla',
        },
        {
            id: 3,
            riik: 'Rootsi',
            pealinn: 'Stockholm',
            kuuluvusEu: 9999,
            keel: 'rootsi',
            elanikeArv: 11111111,
            pindala: 111111,
            rahaühik: 'Rootsi kroon',
            kaardiVärv: 'roheline',
        },
    ]
};

export default db;
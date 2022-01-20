import { resolve } from 'path/posix';
import {Varvid} from './components/varvid/interfaces';
import { Users } from './components/users/interfaces';

interface Db {
    Varvid: Varvid[];
    users: Users[];
}

const db: Db = {
    users: [
        {
        id: 1, 
        eesNimi: 'Admin',
        pereNimi: 'Admin',
        email: 'admin@admin.ee',
        password: '$2b$10$eqqC/z5dIGdcKMuvtkCHvuBZ2SwVR3r891pzBydvQzmZYguP14knS',
        role: 'Admin',
        },
        {
        id: 2,
        eesNimi: 'Mari',
        pereNimi: 'Kari',
        email: 'mari@kari.ee',
        password: '$2b$10$lpBNgij.Kje.X/7Ril.q8O6KvUISKMGA1hVmP8mtiKRUpjNS1/GIW',
        role: 'Admin',
        },
        {
        id: 3,
        eesNimi: 'Kati',
        pereNimi: 'Karu',
        email: 'kati@karu.ee',
        password: '$2b$10$8AWjm.24zSZ9N1TfDuyNJuX00JEz4AhJ1SVm61Gtz.TlEyDAb6SNi',
        role: 'User',
        },
    ],
    Varvid:[
        {
            id: 1,
            varv: 'roosa',
            vaartus: 1,
            kaeVarv: 'lilla',
            kaeVaartus: 9,
        },
        {
            id: 2,
            varv: 'punane',
            vaartus: 2,
            kaeVarv: 'oraanž',
            kaeVaartus: 8,
        },
        {
            id: 3,
            varv: 'hall',
            vaartus: 3,
            kaeVarv: 'pruun',
            kaeVaartus: 7,
        },
        {
            id: 4,
            varv: 'sinine',
            vaartus: 4,
            kaeVarv: 'roheline',
            kaeVaartus: 6,
        },
        {
            id: 5,
            varv: 'kollane',
            vaartus: 5,
            kaeVarv: 'kollane',
            kaeVaartus: 5,
        },
        {
            id: 6,
            varv: 'roheine',
            vaartus: 6,
            kaeVarv: 'sinine',
            kaeVaartus: 4,
        },
        {
            id: 7,
            varv: 'pruun',
            vaartus: 7,
            kaeVarv: 'hall',
            kaeVaartus: 3,
        },
        {
            id: 8,
            varv: 'oraanž',
            vaartus: 8,
            kaeVarv: 'punane',
            kaeVaartus: 2,
        },
        {
            id: 9,
            varv: 'lilla',
            vaartus: 9,
            kaeVarv: 'roosa',
            kaeVaartus: 1,
        },
    ]
};

export default db;
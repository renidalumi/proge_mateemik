import {Mateemik, newMateemiks} from './components/mateemik/interfaces';

interface Db {
    Mateemiks: Mateemik[];
}

const db: Db = {
    Mateemiks:[
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
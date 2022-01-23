import { resolve } from 'path/posix';
import { Varvid } from './components/varvid/interfaces';
import { IUsers } from './components/users/interfaces';

interface Db {
    Varvid: Varvid[];
    users: IUsers[];
}

const db: Db = {
  users: [
    {
      id: 1,
      eesNimi: 'Mari',
      pereNimi: 'Kari',
      email: 'mari@kari.ee',
      password: '$2b$10$PXaNnUDAxKX44h16s6IFc.DodT5c9SF3Rw4T2LTDbp6xmlCFX6LZe',
      role: 'Admin',
    },
    {
      id: 2,
      eesNimi: 'Kati',
      pereNimi: 'Karu',
      email: 'kati@karu.ee',
      password: '$2b$10$PXaNnUDAxKX44h16s6IFc.DodT5c9SF3Rw4T2LTDbp6xmlCFX6LZe',
      role: 'User',
    },
  ],
  Varvid: [
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
  ],
};

export default db;

import db from '../../db';
import { Mateemik, newMateemiks } from './interfaces';
import { Request, Response} from'express';

const mateemikService ={
     getAllMateemik: () =>{
        const {Mateemiks} =db;
        return Mateemiks;
    },
    getMateemikById: (id: number): Mateemik | undefined =>{
        const Mateemiks: Mateemik | undefined =db.Mateemiks.find((element: Mateemik) => element.id === id);
        return Mateemiks ;
    },
    createMateemik: (newMateemik: newMateemiks): number =>{
        const {riik, pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = newMateemik;
        const id = db.Mateemiks.length+1; 
        db.Mateemiks.push({
            id,
            riik,
            pealinn,
            kuuluvusEu,
            keel,
            elanikeArv,
            pindala,
            rahaühik,
            kaardiVärv,
        });
        return id;
    },
    deleteMateemikById:  (id: number) => {
      if (id) {
        const index = db.Mateemiks.findIndex((element) => element.id === id);
        db.Mateemiks.splice(index, 1);
      }
      return true;
    }
    };


/* 
const updateMateemik ;
const deleteMateemikById 
*/

export default mateemikService;
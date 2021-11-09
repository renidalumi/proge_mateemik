import db from '../../db';
import { Geomik, newGeomik } from './interfaces';
import { Request, Response} from'express';

const geomikService ={
     getAllGeomik: () =>{
        const {geomiks} =db;
        return geomiks;
    },
    getGeomikById: (id: number): Geomik | undefined =>{
        const geomiks: Geomik | undefined =db.geomiks.find((element: Geomik) => element.id === id);
        return geomiks ;
    },
    createGeomik: (newGeomik: newGeomik): number =>{
        const {riik, pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = newGeomik;
        const id = db.geomiks.length+1; 
        db.geomiks.push({
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
    deleteGeomikById:  (id: number) => {
      if (id) {
        const index = db.geomiks.findIndex((element) => element.id === id);
        db.geomiks.splice(index, 1);
      }
      return true;
    }
    };


/* 
const updateGeomik ;
const deleteGeomikById 
*/

export default geomikService;
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
    }
    /* updateGeomik: ( riik: string,pealinn: string, kuuluvusEu: number, keel: string, elanikeArv: number, pindala: number, rahaühik: string, kaardiVärv: string) => {
        const id: number = parseInt(req.params.id, 10);
        const index = db.geomiks.findIndex((element) => element.id === id);
    if (index < 0) {
      return res.status(400).json({
        error: `No user found with id: ${id}`,
      });
    }
    if (riik) {
      db.geomiks[index].riik = riik;
    }
    if (pealinn) {
      db.geomiks[index].pealinn = pealinn;
    }
    if (kuuluvusEu) {
        db.geomiks[index].kuuluvusEu = kuuluvusEu;
      }
      if (keel) {
        db.geomiks[index].keel = keel;
      }
      if (elanikeArv) {
        db.geomiks[index].elanikeArv = elanikeArv;
      }
      if (pindala) {
        db.geomiks[index].pindala = pindala;
      }
      if (rahaühik) {
        db.geomiks[index].rahaühik = rahaühik;
      }
      if (kaardiVärv) {
          db.geomiks[index].kaardiVärv = kaardiVärv;
      }
    }
}; */



/* 
const updateGeomik ;
const deleteGeomikById 
*/
}
export default geomikService;
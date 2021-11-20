import db from '../../db';
import { Varvid, newVarvid } from './interfaces';

const VarvidService ={
    getAllVarvid: () =>{
        const {Varvid} =db;
        return Varvid;
    },
    getVarvidById: (id: number): Varvid | undefined =>{
        const Varvids: Varvid | undefined =db.Varvid.find((element: Varvid) => element.id === id);
        return Varvids ;
    },
    createVarvid: (newVarvid: newVarvid): number =>{
        const {riik, pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = newVarvid;
        const id = db.Varvid.length+1; 
        db.Varvid.push({
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
    deleteVarvidById:  (id: number) => {
      if (id) {
        const index = db.Varvid.findIndex((element) => element.id === id);
        db.Varvid.splice(index, 1);
      }
      return true;
    },
    };


/* 
const updateVarvid ;
const deleteVarvidById 
*/

export default VarvidService;
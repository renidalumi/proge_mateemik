import { Request, Response} from'express';
import db from '../../db';
import {Mateemik, newMateemiks} from './interfaces';
import MateemikService from './service';
import responseCodes from '../general/respondcodes';

// Get all Mateemik controller
const getAllMateemik = (req: Request, res: Response) => {
    const Mateemiks: Mateemik[] = MateemikService.getAllMateemik();
    res.status(responseCodes.ok).json({
        Mateemiks,
    });
};

//Get Mateemik by id controller
const getMateemikById =(req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const Mateemiks = MateemikService.getMateemikById(id);
  if (!Mateemiks) {
    return res.status(400).json({
      message: `No Mateemik exists with id: ${id}`,
     });
  }
  return res.status(200).json({
      Mateemiks,
  });
};
//
const createMateemik =(req: Request, res: Response) => {
    console.log(req.body);
    const {riik, pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = req.body;
    const newMateemik = {
        riik,
        pealinn,
        kuuluvusEu,
        keel,
        elanikeArv,
        pindala,
        rahaühik,
        kaardiVärv,
    };
    const id: Number = MateemikService.createMateemik(newMateemik);
    res.status(responseCodes.ok).json({
        id,
    });
};
//update
const updateMateemik =(req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { riik,pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = req.body;
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
    const index = db.Mateemiks.findIndex((element) => element.id === id);
    if (index < 0) {
      return res.status(400).json({
        error: `No Mateemik found with id: ${id}`,
      });
    }
    if (riik) {
      db.Mateemiks[index].riik = riik;
    }
    if (pealinn) {
      db.Mateemiks[index].pealinn = pealinn;
    }
    if (kuuluvusEu) {
        db.Mateemiks[index].kuuluvusEu = kuuluvusEu;
      }
      if (keel) {
        db.Mateemiks[index].keel = keel;
      }
      if (elanikeArv) {
        db.Mateemiks[index].elanikeArv = elanikeArv;
      }
      if (pindala) {
        db.Mateemiks[index].pindala = pindala;
      }
      if (rahaühik) {
        db.Mateemiks[index].rahaühik = rahaühik;
      }
      if (kaardiVärv) {
          db.Mateemiks[index].kaardiVärv = kaardiVärv;
      }
    return res.status(responseCodes.noContent).send();
  };
  //delete
  const deleteMateemikById =(req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
    const index = MateemikService.deleteMateemikById(id);
    //const index = db.Mateemiks.findIndex((element) => element.id === id);
    if (id < 0) {
      return res.status(responseCodes.badRequest).json({
        message: `Mateemik not found with id: ${id}`,
      });
    }
    db.Mateemiks.splice(id, 1);
    return res.status(responseCodes.noContent).json();
  };

  export { getAllMateemik, getMateemikById, updateMateemik, createMateemik, deleteMateemikById};
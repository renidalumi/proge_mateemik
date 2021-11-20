import { Request, Response} from'express';
import db from '../../db';
import {Varvid, newVarvid} from './interfaces';
import VarvidService from './service';
import responseCodes from '../general/respondcodes';

// Get all Varvid controller
const getAllVarvid = (req: Request, res: Response) => {
    const Varvids: Varvid[] = VarvidService.getAllVarvid();
    res.status(responseCodes.ok).json({
        Varvids,
    });
};

//Get Varvid by id controller
const getVarvidById =(req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const Varvids = VarvidService.getVarvidById(id);
  if (!Varvids) {
    return res.status(400).json({
      message: `No Varvid exists with id: ${id}`,
     });
  }
  return res.status(200).json({
      Varvids,
  });
};
//
const createVarvid =(req: Request, res: Response) => {
    console.log(req.body);
    const {riik, pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = req.body;
    const newVarvid = {
        riik,
        pealinn,
        kuuluvusEu,
        keel,
        elanikeArv,
        pindala,
        rahaühik,
        kaardiVärv,
    };
    const id: Number = VarvidService.createVarvid(newVarvid);
    res.status(responseCodes.ok).json({
        id,
    });
};
//update
const updateVarvid =(req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { riik,pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = req.body;
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
    const index = db.Varvid.findIndex((element) => element.id === id);
    if (index < 0) {
      return res.status(400).json({
        error: `No Varvid found with id: ${id}`,
      });
    }
    if (riik) {
      db.Varvid[index].riik = riik;
    }
    if (pealinn) {
      db.Varvid[index].pealinn = pealinn;
    }
    if (kuuluvusEu) {
        db.Varvid[index].kuuluvusEu = kuuluvusEu;
      }
      if (keel) {
        db.Varvid[index].keel = keel;
      }
      if (elanikeArv) {
        db.Varvid[index].elanikeArv = elanikeArv;
      }
      if (pindala) {
        db.Varvid[index].pindala = pindala;
      }
      if (rahaühik) {
        db.Varvid[index].rahaühik = rahaühik;
      }
      if (kaardiVärv) {
          db.Varvid[index].kaardiVärv = kaardiVärv;
      }
    return res.status(responseCodes.noContent).send();
  };
  //delete
  const deleteVarvidById =(req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
    const index = VarvidService.deleteVarvidById(id);
    //const index = db.Varvids.findIndex((element) => element.id === id);
    if (id < 0) {
      return res.status(responseCodes.badRequest).json({
        message: `Varvid not found with id: ${id}`,
      });
    }
    db.Varvid.splice(id, 1);
    return res.status(responseCodes.noContent).json();
  };

  export { getAllVarvid, getVarvidById, updateVarvid, createVarvid, deleteVarvidById};
import { Request, Response} from'express';
import db from '../../db';
import {Geomik, newGeomik} from './interfaces';
import geomikService from './service';

const responseCodes = {
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    notFound: 404,
  };

// Get all Geomik controller
const getAllGeomik = (req: Request, res: Response) => {
    const geomiks: Geomik[] = geomikService.getAllGeomik();
    res.status(responseCodes.ok).json({
        geomiks,
    });
};

//Get Geomik by id controller
const getGeomikById =(req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const geomiks = geomikService.getGeomikById(id);
  if (!geomiks) {
    return res.status(400).json({
      message: `No geomik exists with id: ${id}`,
     });
  }
  return res.status(200).json({
      geomiks,
  });
};
//
const createGeomik =(req: Request, res: Response) => {
    console.log(req.body);
    const {riik, pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = req.body;
    const newGeomik = {
        riik,
        pealinn,
        kuuluvusEu,
        keel,
        elanikeArv,
        pindala,
        rahaühik,
        kaardiVärv,
    };
    const id: Number = geomikService.createGeomik(newGeomik);
    res.status(responseCodes.ok).json({
        id,
    });
};
//update
const updateGeomik =(req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const { riik,pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaardiVärv} = req.body;
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
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
    return res.status(responseCodes.noContent).send();
  };
  //delete
  const deleteGeomikById =(req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({
        error: 'No valid id provided',
      });
    }
    const index = db.geomiks.findIndex((element) => element.id === id);
    if (index < 0) {
      return res.status(responseCodes.badRequest).json({
        message: `User not found with id: ${id}`,
      });
    }
    db.geomiks.splice(index, 1);
    return res.status(responseCodes.noContent).send();
  };

  export { getAllGeomik, getGeomikById, updateGeomik, createGeomik, deleteGeomikById};
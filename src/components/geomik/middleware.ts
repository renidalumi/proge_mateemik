import { Request, Response, NextFunction} from'express';
import { chownSync } from 'fs';
const responseCodes = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  notFound: 404,
};

const createGeomikValidator= (req: Request, res: Response, next: NextFunction) => { 
  const {riik, pealinn, kuuluvusEu} = req.body;
  if (!riik){
    return res.status(responseCodes.badRequest).json({
      message: `No riik provided`,
    });
  }
  if (!pealinn){
    return res.status(responseCodes.badRequest).json({
      message: `No pealinn provided`,
    });
  }
  if (!kuuluvusEu){
    return res.status(responseCodes.badRequest).json({
      message: `No kuuluvus EU-sse provided`,
    });
  }
  return next();
};

const riikToUppercase = (req: Request, res: Response, next: NextFunction) => { 
    const {riik} = req.body;
    const uppercaseRiik = riik.toUpperCase();
    req.body.riik = uppercaseRiik;
    return next();
  };

  export {riikToUppercase, createGeomikValidator};
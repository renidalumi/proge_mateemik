import { Request, Response, NextFunction} from'express';
import { chownSync } from 'fs';
import responseCodes from '../general/respondcodes';

const createVarvidValidator= (req: Request, res: Response, next: NextFunction) => { 
  const {varv, vaartus, kaeVarv, kaeVaartus} = req.body;
  if (!varv){
    return res.status(responseCodes.badRequest).json({
      message: `No riik provided`,
    });
  }
  if (!vaartus){
    return res.status(responseCodes.badRequest).json({
      message: `No pealinn provided`,
    });
  }
  if (!kaeVaartus){
    return res.status(responseCodes.badRequest).json({
      message: `No kuuluvus EU-sse provided`,
    });
  }
  return next();
};

const varvToUppercase = (req: Request, res: Response, next: NextFunction) => { 
    const {varv} = req.body;
    const uppercaseVarv = varv.toUpperCase();
    req.body.varv = uppercaseVarv;
    return next();
  };

  export {varvToUppercase, createVarvidValidator};
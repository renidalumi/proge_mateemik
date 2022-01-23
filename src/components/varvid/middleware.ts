import { Request, Response, NextFunction } from 'express';
// import { chownSync } from 'fs';
import responseCodes from '../general/respondcodes';

const createVarvidValidator = (req: Request, res: Response, next: NextFunction) => {
  const {
    varv, vaartus, kaeVarv, kaeVaartus,
  } = req.body;
  if (!varv) {
    return res.status(responseCodes.badRequest).json({
      error: 'No colour provided',
    });
  }
  if (!vaartus) {
    return res.status(responseCodes.badRequest).json({
      error: 'No value provided',
    });
  }
  if (!kaeVarv) {
    return res.status(responseCodes.badRequest).json({
      error: 'No hand colour provided',
    });
  }
  if (!kaeVaartus) {
    return res.status(responseCodes.badRequest).json({
      error: 'No hand value provided',
    });
  }
  return next();
};

const varvToUppercase = (req: Request, res: Response, next: NextFunction) => {
  const { varv } = req.body;
  const uppercaseVarv = varv.toUpperCase();
  req.body.varv = uppercaseVarv;
  return next();
};

export { varvToUppercase, createVarvidValidator };

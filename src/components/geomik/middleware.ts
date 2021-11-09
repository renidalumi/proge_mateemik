import { Request, Response, NextFunction} from'express';
import { chownSync } from 'fs';

const riikToUppercase =(req: Request, res: Response, next: NextFunction) => { 
    const {riik} = req.body;
    const uppercaseRiik = riik.toUpperCase();
    req.body.riik = uppercaseRiik;
    return next();
  };

  export default riikToUppercase;
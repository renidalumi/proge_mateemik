import { Request, Response, NextFunction} from'express';

const loggerMiddlewre =(req: Request, res: Response, next: NextFunction) => { 
    console.log(`Url: ${req.url}, Method: ${req.method}, Time: ${new Date().toISOString()}`);
    return next();
  };

  export default loggerMiddlewre;
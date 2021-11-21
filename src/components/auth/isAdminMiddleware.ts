import { Request, Response, NextFunction, urlencoded } from 'express';
import responseCodes from '../general/respondcodes';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const {user} = res.locals;
    if(user.role !== 'Admin') {
    return res.status(responseCodes.notAuthorized).json({
    error: 'You have to be admin',
    });
}
    return next();
};

export default isAdmin;
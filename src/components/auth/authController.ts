import { Request, Response } from 'express';
import responseCodes from '../general/respondcodes';
import loginService from './service';

const authController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await loginService.login(email, password);
    console.log(token);
    if (!token) {
      return res.status(responseCodes.notAuthorized).json({
        error: 'Check credentials',

      });
    }
    return res.status(responseCodes.ok).json({
      token,
    });
  },

};

export default authController;

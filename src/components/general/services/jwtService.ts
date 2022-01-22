import jwt from 'jsonwebtoken';
import { IUsers } from '../../users/interfaces';
import config from '../../../config';

// const jwtPassword = 'klnasflkjnasföjuhwerfiuhWERFOHU';

const jwtService = {
  sign: async (user: IUsers): Promise<string> => {
    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = await jwt.sign(payload, config.jwtSecret, { expiresIn: '3h' });
    return token;
  },
  verify: async (token: string) => {
    try {
      const playload = await jwt.verify(token, config.jwtSecret);
      return playload;
    } catch (error) {
      return false;
    }
  },
};

export default jwtService;

import jwt from 'jsonwebtoken';
import { Users } from '../../users/interfaces';

const jwtPassword = 'klönasfölkjnasföjuhwerfiuhWERFOHU';

const jwtService = {
sign: async (user: Users) => {
    const payload = {
    id: user.id,
    role: user.role,
    };
    const token = await jwt.sign(payload, jwtPassword, { expiresIn: '1h' });
    return token;
},
verify: async (token: string) => {
    try {
    const verify = await jwt.verify(token, jwtPassword);
    return verify;
    } catch (error) {
    return false;
    }
},
};

export default jwtService;
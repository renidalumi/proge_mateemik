import { Request, Response } from "express";
import responseCodes from "../general/respondcodes";
import usersService from "./services";
import { UpdateUsers, NewUsers } from "./interfaces";

const userController = {
    getAllUsers: ( req: Request, res: Response) => {
        const users = usersService.getAllUsers();
        return res.status(responseCodes.ok).json({
            users,
        });
    },
    getUserById: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
        return res.status(responseCodes.badRequest).json({
            error: 'No valid id provided',
        });
        }
        if ((id === res.locals.user.id) || (res.locals.user.role === 'Admin')) {
        const user = usersService.getUserById(id);
        if (!user) {
            return res.status(responseCodes.badRequest).json({
            error: `No user found with id: ${id}`,
            });
        }
        return res.status(responseCodes.ok).json({
            user,
        });
        }
        return res.status(responseCodes.notAuthorized).json({
        error: 'You have no permission for this info',
        });
    },
    removeUser: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
        return res.status(responseCodes.badRequest).json({
            error: 'No valid id provided',
        });
        }
        const user = usersService.getUserById(id);
        if (!user) {
        return res.status(responseCodes.badRequest).json({
            message: `User not found with id: ${id}`,
        });
        }
        usersService.removeUser(id);
        return res.status(responseCodes.noContent).json({});
    },
    createUser: async (req: Request, res: Response) => {
        const {
            eesNimi, pereNimi, email, password,
        } = req.body;
        if(!eesNimi) {
            return res.status(responseCodes.badRequest).json({
                error: 'Eesnimi is required',                
            });
        }
        if(!pereNimi) {
            return res.status(responseCodes.badRequest).json({
                error: 'Perenimi is required',                
            });
        }
        if(!email) {
            return res.status(responseCodes.badRequest).json({
                error: 'Email is required',                
            });
        }
        if(!password) {
            return res.status(responseCodes.badRequest).json({
                error: 'Password is required',                
            });
        }
        const newUsers: NewUsers = {
            eesNimi,
            pereNimi,
            email,
            password,
            role: 'User',
        };
        const id = await usersService.createUser(newUsers);
        return res.status(responseCodes.created).json({
            id,
        });
    },
    updateUser: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        const { eesNimi, pereNimi } = req.body;
        if (!id) {
            return res.status(responseCodes.badRequest).json({
            error: 'No valid id provided',
        });
        }
        if (!eesNimi && !pereNimi) {
            return res.status(responseCodes.badRequest).json({
            error: 'Nothing to update',
        });
        }
        const user = usersService.getUserById(id);
        if (!user) {
            return res.status(responseCodes.badRequest).json({
            error: `No user found with id: ${id}`,
        });
        }
        const updateUser: UpdateUsers = {
            id,
            eesNimi,
            pereNimi,
        };
        usersService.updateUser(updateUser);
        return res.status(responseCodes.noContent).json({});
    },
    }; 
    
    export default userController;

import express, { Application} from'express';
//import { nanoid } from 'nanoid';
import varvidController from './components/varvid/controller';
import pingController from './components/ping/controller';
import loggerMiddleware from './components/general/middleware';
import {varvToUppercase, createVarvidValidator} from './components/varvid/middleware';
import port from './components/general/settings';
import userController from './components/users/controller';
import authController from './components/auth/authController';

const app: Application = express();


app.use(express.json());
app.use(loggerMiddleware);
app.get('/ping',pingController );

app.post('/login', authController.login);

app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.delete('/users/:id', userController.removeUser);
app.patch('/users/:id', userController.updateUser);

app.get('/Varvid', varvidController.getAllVarvid);
app.get('/Varvid/:id', varvidController.getVarvidById );
app.post('/Varvid', createVarvidValidator, varvToUppercase, varvidController.createVarvid);
app.patch('/Varvid/:id', varvidController.updateVarvid);
app.delete('/Varvid/:id', varvidController.deleteVarvidById);

app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
});
import express, { Application} from'express';
//import { nanoid } from 'nanoid';
import {getAllVarvid, getVarvidById, updateVarvid, createVarvid, deleteVarvidById } from './components/varvid/controller';
import pingController from './components/ping/controller';
import loggerMiddleware from './components/general/middleware';
import {varvToUppercase, createVarvidValidator} from './components/varvid/middleware';
import port from './components/general/settings';

const app: Application = express();


app.use(express.json());
app.use(loggerMiddleware);

app.get('/ping',pingController );
//Route to get all Varvid
app.get('/Varvid', getAllVarvid);
//Route to get Varvid by id
app.get('/Varvid/:id', getVarvidById );
//Route to add Varvid
app.post('/Varvid', createVarvidValidator, varvToUppercase, createVarvid);
//Route to update
app.patch('/Varvid/:id', updateVarvid);
//Route to delete
app.delete('/Varvid/:id', deleteVarvidById);

app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
});
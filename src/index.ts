import express, { Application} from'express';
//import { nanoid } from 'nanoid';
import {getAllMateemik, getMateemikById, updateMateemik, createMateemik, deleteMateemikById } from './components/mateemik/controller';
import pingController from './components/ping/controller';
import loggerMiddlewre from './components/general/middleware';
import {riikToUppercase, createMateemikValidator} from './components/mateemik/middleware';
import port from './components/general/settings';

const app: Application = express();


app.use(express.json());
app.use(loggerMiddlewre);

app.get('/ping',pingController );
//Route to get all Mateemik
app.get('/Mateemik', getAllMateemik);
//Route to get Mateemik by id
app.get('/Mateemik/:id', getMateemikById );
//Route to add Mateemik
app.post('/Mateemik', createMateemikValidator, riikToUppercase, createMateemik);
//Route to update
app.patch('/Mateemik/:id', updateMateemik);
//Route to delete
app.delete('/Mateemik/:id', deleteMateemikById);

app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
});
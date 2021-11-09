import express, { Application} from'express';
//import { nanoid } from 'nanoid';
import {getAllGeomik, getGeomikById, updateGeomik, createGeomik, deleteGeomikById } from './components/geomik/controller';
import pingController from './components/ping/controller';
import loggerMiddlewre from './components/general/middleware';
import riikToUppercase from './components/geomik/middleware';

const app: Application = express();
const port: number = 3000;



const responseCodes = {
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    notFound: 404,
  };

app.use(express.json());
app.use(loggerMiddlewre);

app.get('/ping',pingController );
//Route to get all Geomik
app.get('/geomik', getAllGeomik);
//Route to get Geomik by id
app.get('/geomik/:id', getGeomikById );
//Route to add geomik
app.post('/geomik', riikToUppercase, createGeomik);
//Route to update
app.patch('/geomik/:id', updateGeomik);
//Route to delete
app.delete('/geomik/:id', deleteGeomikById);

app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
});
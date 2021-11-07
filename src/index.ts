import express, { Request, Response, Application} from'express';
import { nanoid } from 'nanoid';


const app: Application = express();
const port: number = 3000;

interface Geomik{
    id: number;
    riik: string;
    pealinn: string;
    kuuluvusEu: number;
    keel: string;
    elanikeArv: number;
    pindala: number;
    rahaühik: string;
    kaadiVärv: string;
}

interface Db {
    geomiks: Geomik[];
}
const db: Db = {
    geomiks:[
        {
            id: 1,
            riik: 'Eesti',
            pealinn: 'Tallinn',
            kuuluvusEu: 9999,
            keel: 'eesti',
            elanikeArv: 11111111,
            pindala: 111111,
            rahaühik: 'EURO €',
            kaadiVärv: 'roosa',
        },
        {
            id: 2,
            riik: 'Hispaania',
            pealinn: 'Madrid',
            kuuluvusEu: 9999,
            keel: 'hispaania',
            elanikeArv: 11111111,
            pindala: 111111,
            rahaühik: 'EURO €',
            kaadiVärv: 'lilla',
        },
        {
            id: 3,
            riik: 'Rootsi',
            pealinn: 'Stockholm',
            kuuluvusEu: 9999,
            keel: 'rootsi',
            elanikeArv: 11111111,
            pindala: 111111,
            rahaühik: 'Rootsi kroon',
            kaadiVärv: 'roheline',
        },
    ]
}
app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'Alive',
    });
});
app.get('/geomik', (req: Request, res: Response) => {
    const {geomiks} = db;
    return res.status(200).json({
        geomiks,
    });
});
app.get('/geomik/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const geomiks =db.geomiks.find((element) => element.id === id);
    if (!geomiks) {
      return res.status(400).json({
        message: `No geomik exists with id: ${id}`,
       });
    }
    return res.status(200).json({
        geomiks,
    });
    
});


app.post('/geomik', (req: Request, res: Response) => {
    console.log(req.body);
    const {riik, pealinn, kuuluvusEu, keel, elanikeArv, pindala, rahaühik, kaadiVärv} = req.body;
    
    const id = db.geomiks.length+1; 
    db.geomiks.push({
        id,
        riik,
        pealinn,
        kuuluvusEu,
        keel,
        elanikeArv,
        pindala,
        rahaühik,
        kaadiVärv,
    });
    return res.status(200).json({
        id,
    });
});


app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
});
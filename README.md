
Run project

npm install
npm start
Go to http://localhost:3000

API documentation:
Start project - npm start
For other script look at the package.json

Add databse db.ts with users to the root of project
Add components/users/interfaces.ts for users and import it to database.
Add components/users/controller.ts For that we need express, responseCodes, user interfaces and services ts files. In services.ts we defining all request from database.
Create general/responseCodes.ts
Create users/services.ts
now create index.ts

## Respond codes
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    notAuthorized: 401,
    notFound: 404,

## Interfaces

 interface NewUsers{
    eesNimi: string;
    pereNimi: string;
    email: string;
    password: string;
    role: 'Admin' | 'User';
}
interface Users extends NewUsers{
    id: number;    
}

interface UpdateUsers{
    id: number;
    eesNimi?: string;
    pereNimi?: string;
    email?: string;
    password?: string;
    role?: 'Admin' | 'User';



## get
app.get('/mateemik', getAllMateemik);
app.get('/mateemik/:id', getMateemikById );
## post
app.post('/mateemik', createMateemikValidator, riikToUppercase, createMateemik);
## delete
app.delete('/mateemik/:id', deleteMateemikById);
## patch
app.patch('/mateemik/:id', updateMateemik);



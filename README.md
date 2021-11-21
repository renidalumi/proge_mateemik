# proge_mateemik
just practice

## Respond codes
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
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

## Routes
## get
app.get('/mateemik', getAllMateemik);
app.get('/mateemik/:id', getMateemikById );
## post
app.post('/mateemik', createMateemikValidator, riikToUppercase, createMateemik);
## delete
app.delete('/mateemik/:id', deleteMateemikById);
## patch
app.patch('/mateemik/:id', updateMateemik);



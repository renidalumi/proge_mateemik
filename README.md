# proge_mateemik
just practice

## Respond codes
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    notFound: 404,

## Interface

 newMateemik{
    riik: string;
    pealinn: string;
    kuuluvusEu: number;
    keel: string;
    elanikeArv: number;
    pindala: number;
    rahaühik: string;
    kaardiVärv: string;
}
 Geomik extends newMateemik{
    id: number;
}

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



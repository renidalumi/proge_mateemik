# proge_geomik
just practice

## Respond codes
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    notFound: 404,

## Interface

 newGeomik{
    riik: string;
    pealinn: string;
    kuuluvusEu: number;
    keel: string;
    elanikeArv: number;
    pindala: number;
    rahaühik: string;
    kaardiVärv: string;
}
 Geomik extends newGeomik{
    id: number;
}

## Routes
## get
app.get('/geomik', getAllGeomik);
app.get('/geomik/:id', getGeomikById );
## post
app.post('/geomik', createGeomikValidator, riikToUppercase, createGeomik);
## delete
app.delete('/geomik/:id', deleteGeomikById);
## patch
app.patch('/geomik/:id', updateGeomik);



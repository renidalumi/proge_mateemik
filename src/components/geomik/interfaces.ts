interface newGeomik{
    riik: string;
    pealinn: string;
    kuuluvusEu: number;
    keel: string;
    elanikeArv: number;
    pindala: number;
    rahaühik: string;
    kaardiVärv: string;
}
//Extend interface what used before
interface Geomik extends newGeomik{
    id: number;
}

export  {Geomik, newGeomik};
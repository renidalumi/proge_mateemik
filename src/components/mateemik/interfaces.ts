interface newMateemiks{
    riik: string;
    pealinn: string;
    kuuluvusEu: number;
    keel: string;
    elanikeArv: number;
    pindala: number;
    rahaühik: string;
    kaardiVärv: string;
}
interface users{
    osariik: string;
    suurmilinn: string;
    keel: string;
    elanikeArv: number;
    pindala: number;
    rahaühik: string;
}
interface users{
    
}
//Extend interface what used before
interface Mateemik extends newMateemiks{
    id: number;
}

export  {Mateemik, newMateemiks, users};
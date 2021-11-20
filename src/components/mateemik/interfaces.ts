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

//Extend interface what used before
interface Mateemik extends newMateemiks{
    id: number;
}

export  {Mateemik, newMateemiks};
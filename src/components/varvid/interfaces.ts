interface newVarvid{
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
interface Varvid extends newVarvid{
    id: number;
}

export  {Varvid, newVarvid};
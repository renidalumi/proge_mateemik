interface newVarvid{
    varv: string;
    vaartus: number;
    kaeVarv: string;
    kaeVaartus: number;
}

//Extend interface what used before
interface Varvid extends newVarvid{
    id: number;
}

export  {Varvid, newVarvid};
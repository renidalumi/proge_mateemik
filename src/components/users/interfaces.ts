interface NewUsers{
    eesNimi: string;
    pereNimi: string;
    email: string;
    password: string;
    role: 'Admi' | 'User';
}
interface Users{
    id: number;    
}

interface UpdateUsers{
    id: number;
    eesNimi?: string;
    pereNimi?: string;
    email?: string;
    password?: string;
    role?: 'Admi' | 'User';
}

export {NewUsers, Users, UpdateUsers};
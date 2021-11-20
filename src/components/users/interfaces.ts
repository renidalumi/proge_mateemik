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
}

export {NewUsers, Users, UpdateUsers};
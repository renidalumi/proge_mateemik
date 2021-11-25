import 'reflect-metadata';
import { createConnection } from 'typeorm';
import eUser from './components/users/entity';

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "Mateemik",
    entities: [eUser],
    synchronize: true,
    logging: true
}).then(connection => {
    // here you can start to work with your entities
    console.log(`Database connected to ${connection.name}`);
}).catch((error) => console.log(error));

export default createConnection;
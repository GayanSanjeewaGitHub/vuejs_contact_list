import { Sequelize } from 'sequelize';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize({
  host: DB_HOST || 'localhost', // Set the host if it's different
  dialect: 'postgres',
  username: 'root', // Use the root user here
  password: 'Admin@123', // Empty password if it's not required
  database: 'bernie', // Make sure this matches the database name
});


export default sequelize;

import dotenv from 'dotenv';
import express from 'express';
import { Sequelize } from 'sequelize';
import clubRouter from './routes/clubs/club.routes';
import authRouter from './routes/auth/auth.routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/clubs', clubRouter);
app.use('/auth', authRouter); 


//TODO Hacerlo en database.ts y llamarlo desde aca
//#region Sequelize
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
//#endregion

const initApp = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync({ force: false });
    console.log('Database synchronized.');

    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
      console.log(`Documentación de la API en http://localhost:${port}/api-docs`);
    });
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

initApp();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/database.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

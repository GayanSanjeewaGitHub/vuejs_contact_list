import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/database.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable unrestricted CORS
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

 
app.use('/api', contactRoutes); 

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

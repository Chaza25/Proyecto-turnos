import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Ruta de prueba
app.get('/', (req, res) => {
    res.send('Corriendo backend');
})

export default app;
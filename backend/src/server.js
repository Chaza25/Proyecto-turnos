import app from './app.js';
import pool from './database.js';

(async () => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        console.log('Conexión a la base de datos exitosa:', rows);
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
    }
})();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
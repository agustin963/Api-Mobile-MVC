import express from 'express';
import morgan from 'morgan';
import ejs from 'ejs';
import booksRoutes from './routes/books.routes.js';

const app = express();

//Settings
app.set('port',process.env.PORT||3000);
app.set('view engine',ejs);//motor de vistas con ejs

//Midelwares
app.use(express.json());//lee los datos json
app.use(express.urlencoded({extended:true}));//entiende formularios
app.use(morgan('dev'));//vizualizar las peticiones en consola (saber si llegó o no la petición)**se activa aquí**

app.use('/api/books', booksRoutes);

export default app;
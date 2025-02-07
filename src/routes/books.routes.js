import { Router } from 'express';
import booksController from '../controllers/books.controller.js';

const booksRoutes = Router();

// Ruta para obtener todos los libros
booksRoutes.get('/getAll', booksController.getAll);

// Ruta para obtener un libro por su ID
booksRoutes.get('/getOne/:book_id', booksController.getOne);

// Ruta para insertar un nuevo libro
booksRoutes.post('/insert', booksController.insert);

// Ruta para actualizar un libro por su ID
booksRoutes.post('/updateOne/:book_id', booksController.updateOne);

// Ruta para eliminar un libro por su ID
booksRoutes.get('/deleteOne/:book_id', booksController.deleteOne);

export default booksRoutes;

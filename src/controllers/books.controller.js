import bookDAO from "../dao/books.dao.js";

const booksController = {};

// Obtener todos los libros
booksController.getAll = (req, res) => {
  bookDAO.getAll()
    .then((books) => {
      console.log(books);
      res.render('../src/views/index.ejs', { books }); // Renderiza la vista con la lista de libros
    })
    .catch((error) => {
      res.json({
        data: { message: error },
      });
    });
};

// Obtener un libro por ID
booksController.getOne = (req, res) => {
  bookDAO.getOne(req.params.book_id)
    .then((book) => {
      res.render('../src/views/edit.ejs', { book }); // Renderiza la vista de edición con los datos del libro
    })
    .catch(() => {
      res.json({ message: "Book not found" });
    });
};

// Insertar un nuevo libro
booksController.insert = (req, res) => {
  bookDAO.insert(req.body)
    .then(() => {
      res.redirect('/api/books/getAll'); // Redirige a la lista de libros tras insertar uno nuevo
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

// Actualizar un libro por ID
booksController.updateOne = (req, res) => {
  bookDAO.updateOne(req.params.book_id, req.body)
    .then(() => {
      res.redirect('/api/books/getAll'); // Redirige a la lista de libros tras la actualización
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

// Eliminar un libro por ID
booksController.deleteOne = (req, res) => {
  bookDAO.deleteOne(req.params.book_id)
    .then(() => {
      res.redirect('/api/books/getAll'); // Redirige a la lista de libros tras la eliminación
    })
    .catch(() => {
      res.json({ data: { message: "Book not found" } });
    });
};

export default booksController;

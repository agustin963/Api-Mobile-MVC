const bookDAO = {};
import Book from '../models/Book.js';

bookDAO.getAll = async () => {
    return await Book.find();
};

bookDAO.getOne = async (book_id) => {
    return await Book.findOne({ book_id: book_id });
};

bookDAO.insert = async (book) => {
    return await Book.create(book);
};

bookDAO.updateOne = async (book_id, book) => {
    return await Book.findOneAndUpdate({ book_id: book_id }, book);
};

bookDAO.deleteOne = async (book_id) => {
    return await Book.findOneAndDelete({ book_id: book_id });
};

export default bookDAO;

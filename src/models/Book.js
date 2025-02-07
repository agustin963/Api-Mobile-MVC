import { model, Schema } from 'mongoose';

// Definimos el esquema para la colección de libros
const bookSchema = new Schema({
    book_id: { 
        unique: true,
        required: true,
        type: Number
    },
    title: { 
        type: String,
        required: true
    },
    author: { 
        type: String,
        required: true
    },
    genre: String, 
    year: Number, 
    available: { 
        type: Boolean,
        default: true
    }
}, {
    versionKey: false, 
    timestamps: true 
});

// Exportamos el modelo para poder usarlo en otros archivos
export default model('book', bookSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title : {type : String, required : true, default: "undefined"},
    author: {type : String, required : true, default: "undefined"},
    description: {type : String, required : true, default: "undefined"},
    date: { type: Date, default: Date.now },
    id: {type : String, required : true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

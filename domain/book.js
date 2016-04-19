"use strict";
var thumbnail_1 = require('./thumbnail');
exports.Thumbnail = thumbnail_1.Thumbnail;
var Book = (function () {
    function Book(isbn, title, authors) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map
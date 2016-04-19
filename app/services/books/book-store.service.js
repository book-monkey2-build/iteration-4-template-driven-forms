"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var book_1 = require('../../../domain/book');
var BookStoreService = (function () {
    function BookStoreService() {
        var book1 = new book_1.Book('9783864903571', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']);
        book1.rating = 5;
        book1.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
        book1.thumbnails = [new book_1.Thumbnail('http://goo.gl/nDi0Fc', 'Buchcover')];
        var book2 = new book_1.Book('9783864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm']);
        book2.rating = 5;
        book2.subtitle = 'Eine praktische Einführung';
        book2.thumbnails = [new book_1.Thumbnail('https://goo.gl/Y5lFVE', 'Buchcover')];
        this.books = [
            book1, book2
        ];
    }
    BookStoreService.prototype.getAll = function () {
        return this.books;
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.books.find(function (book) { return book.isbn === isbn; });
    };
    BookStoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BookStoreService);
    return BookStoreService;
}());
exports.BookStoreService = BookStoreService;
//# sourceMappingURL=book-store.service.js.map
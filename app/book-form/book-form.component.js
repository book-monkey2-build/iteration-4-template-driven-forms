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
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var book_store_service_1 = require('../services/books/book-store.service');
var BookFormComponent = (function () {
    function BookFormComponent(fb, routeData, routeParams, bs) {
        var _this = this;
        this.fb = fb;
        this.routeData = routeData;
        this.routeParams = routeParams;
        this.bs = bs;
        var book = {
            title: '',
            subtitle: '',
            isbn: '',
            description: '',
            authors: [''],
            thumbnails: [{ url: '', title: '' }],
            published: new Date()
        };
        if (routeData.get('mode') === 'update')
            book = bs.getSingle(routeParams.get('isbn'));
        this.myForm = this.fb.group({
            title: [book.title],
            subtitle: [book.subtitle],
            isbn: [book.isbn],
            description: [book.description],
            authors: this.fb.array(book.authors),
            thumbnails: this.fb.array(book.thumbnails.map(function (t) { return _this.fb.group({
                url: _this.fb.control(t.url),
                title: _this.fb.control(t.title)
            }); })),
            published: [book.published]
        });
        // this allows us to manipulate the form at runtime
        this.authorsControlArray = this.myForm.controls['authors'];
        this.thumbnailsControlArray = this.myForm.controls['thumbnails'];
    }
    BookFormComponent.prototype.addAuthorControl = function () {
        this.authorsControlArray.push(this.fb.control(''));
    };
    BookFormComponent.prototype.addThumbnailControl = function () {
        this.thumbnailsControlArray.push(this.fb.group({ url: [''], title: [''] }));
    };
    BookFormComponent.prototype.submitForm = function (formData) {
        this.routeData.get('mode') === 'update' ? this.bs.update(formData) : this.bs.create(formData);
    };
    BookFormComponent = __decorate([
        core_1.Component({
            selector: 'book-form',
            moduleId: module.id,
            templateUrl: 'book-form.component.html',
            providers: [book_store_service_1.BookStoreService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.RouteData, router_1.RouteParams, book_store_service_1.BookStoreService])
    ], BookFormComponent);
    return BookFormComponent;
}());
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book-form.component.js.map
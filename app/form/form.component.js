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
var FormComponent = (function () {
    function FormComponent(fb, routeData, routeParams, bs) {
        this.fb = fb;
        this.routeData = routeData;
        this.routeParams = routeParams;
        this.bs = bs;
        var formData;
        if (routeData.get('mode') === 'update') {
            var isbn = routeParams.get('isbn');
            var book = bs.getSingle(isbn);
            formData = this.initFormDataUpdate(book);
        }
        else {
            formData = this.initFormDataAdd();
        }
        this.myForm = this.fb.group(formData);
        // this allows us to manipulate the form at runtime
        this.authorsControlArray = this.myForm.controls['authors'];
        this.thumbnailsControlArray = this.myForm.controls['thumbnails'];
    }
    FormComponent.prototype.initFormDataAdd = function () {
        return {
            title: [''],
            subtitle: [''],
            isbn: [''],
            description: [''],
            authors: this.fb.array(['']),
            thumbnails: this.fb.array([
                this.fb.group({ url: [''], title: [''] })
            ]),
            rating: [''],
            published: ['']
        };
    };
    FormComponent.prototype.initFormDataUpdate = function (book) {
        var _this = this;
        return {
            title: [book.title],
            subtitle: [book.subtitle],
            isbn: [book.isbn],
            description: [book.description],
            authors: this.fb.array(book.authors),
            thumbnails: this.fb.array(book.thumbnails.map(function (t) { return _this.fb.group({ url: [t.url], title: [t.title] }); })),
            rating: [book.rating],
            published: [book.published]
        };
    };
    FormComponent.prototype.addAuthorControl = function () {
        this.authorsControlArray.push(this.fb.control(''));
    };
    FormComponent.prototype.addThumbnailControl = function () {
        this.thumbnailsControlArray.push(this.fb.group({ url: [''], title: [''] }));
    };
    FormComponent.prototype.submitForm = function (formData) {
        console.log('submitting values:', formData.value);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'book-form',
            moduleId: module.id,
            templateUrl: 'form.component.html',
            providers: [book_store_service_1.BookStoreService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.RouteData, router_1.RouteParams, book_store_service_1.BookStoreService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map
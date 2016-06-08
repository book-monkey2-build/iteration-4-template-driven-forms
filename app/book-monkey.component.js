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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./books/index');
var index_3 = require('./admin/index');
var BookMonkeyAppComponent = (function () {
    function BookMonkeyAppComponent() {
    }
    BookMonkeyAppComponent = __decorate([
        router_1.Routes([
            { path: '/home', component: index_1.HomeComponent },
            { path: '/books', component: index_2.BooksComponent },
            { path: '/admin', component: index_3.AdminComponent }
        ]),
        core_1.Component({
            selector: 'book-monkey-app',
            moduleId: module.id,
            templateUrl: 'book-monkey.component.html',
            styles: [
                ".router-link-active {\n      color: #ffffff !important;\n      background: #DB282C !important;\n    }"
            ],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], BookMonkeyAppComponent);
    return BookMonkeyAppComponent;
}());
exports.BookMonkeyAppComponent = BookMonkeyAppComponent;
//# sourceMappingURL=book-monkey.component.js.map
System.register(['angular2/core', 'angular2/router', '../services/books/book-store.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, book_store_service_1;
    var BookDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_store_service_1_1) {
                book_store_service_1 = book_store_service_1_1;
            }],
        execute: function() {
            BookDetailsComponent = (function () {
                function BookDetailsComponent(params, bs, router) {
                    this.params = params;
                    this.bs = bs;
                    this.router = router;
                    this.book = bs.getSingle(params.get('isbn'));
                }
                BookDetailsComponent.prototype.getRating = function (num) {
                    return new Array(num);
                };
                BookDetailsComponent.prototype.deleteBook = function () {
                    if (confirm("Buch wirklich löschen?")) {
                        this.bs.delete(this.params.get('isbn'));
                        this.router.navigate(['../List']);
                    }
                };
                BookDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'book-details',
                        moduleId: __moduleName,
                        templateUrl: 'book-details.component.html',
                        providers: [book_store_service_1.BookStoreService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, book_store_service_1.BookStoreService, router_1.Router])
                ], BookDetailsComponent);
                return BookDetailsComponent;
            }());
            exports_1("BookDetailsComponent", BookDetailsComponent);
        }
    }
});
//# sourceMappingURL=book-details.component.js.map
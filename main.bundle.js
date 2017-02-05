webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_factory__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookStoreService = (function () {
    function BookStoreService(http) {
        this.http = http;
        this.api = 'https://book-monkey2-api.angular-buch.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    BookStoreService.prototype.getAll = function () {
        return this.http
            .get(this.api + "/books")
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBooks) { return rawBooks
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); }); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.create = function (book) {
        return this.http
            .post(this.api + "/book", JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.update = function (book) {
        return this.http
            .put(this.api + "/book/" + book.isbn, JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.remove = function (isbn) {
        return this.http
            .delete(this.api + "/book/" + isbn)
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    BookStoreService.prototype.getAllSearch = function (searchTerm) {
        return this.http
            .get(this.api + "/books/search/" + searchTerm)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBooks) { return rawBooks
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); }); })
            .catch(this.errorHandler);
    };
    BookStoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BookStoreService);
    return BookStoreService;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-store.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFactory; });

var BookFactory = (function () {
    function BookFactory() {
    }
    BookFactory.empty = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__book__["a" /* Book */]('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
    };
    BookFactory.fromObject = function (rawBook) {
        return new __WEBPACK_IMPORTED_MODULE_0__book__["a" /* Book */](rawBook.isbn, rawBook.title, rawBook.authors, typeof (rawBook.published) === 'string' ?
            new Date(rawBook.published) : rawBook.published, rawBook.subtitle, rawBook.rating, rawBook.thumbnails, rawBook.description);
    };
    return BookFactory;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-factory.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailsComponent = (function () {
    function BookDetailsComponent(bs, router, route) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.book = __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__["a" /* BookFactory */].empty();
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        this.bs.getSingle(params['isbn'])
            .subscribe(function (b) { return _this.book = b; });
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.removeBook = function () {
        var _this = this;
        if (confirm('Buch wirklich löschen?')) {
            this.bs.remove(this.book.isbn)
                .subscribe(function (res) { return _this.router.navigate(['../'], { relativeTo: _this.route }); });
        }
    };
    BookDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-details',
            template: __webpack_require__(681)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookDetailsComponent);
    return BookDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-details.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_form_error_messages__ = __webpack_require__(520);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookFormComponent = (function () {
    function BookFormComponent(bs) {
        this.bs = bs;
        this.book = __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__["a" /* BookFactory */].empty();
        this.errors = {};
    }
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm.statusChanges.subscribe(function () { return _this.updateErrorMessages(); });
    };
    BookFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.book.authors = this.myForm.value.authors.split(',');
        this.book.thumbnails = [this.myForm.value.thumbnail];
        var book = __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__["a" /* BookFactory */].fromObject(this.book);
        this.bs.create(book).subscribe(function (res) {
            _this.book = __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__["a" /* BookFactory */].empty();
            _this.myForm.reset(__WEBPACK_IMPORTED_MODULE_2__shared_book_factory__["a" /* BookFactory */].empty());
        });
    };
    BookFormComponent.prototype.updateErrorMessages = function () {
        this.errors = {};
        for (var _i = 0, BookFormErrorMessages_1 = __WEBPACK_IMPORTED_MODULE_4__book_form_error_messages__["a" /* BookFormErrorMessages */]; _i < BookFormErrorMessages_1.length; _i++) {
            var message = BookFormErrorMessages_1[_i];
            var control = this.myForm.form.get(message.forControl);
            if (control &&
                control.dirty &&
                control.invalid &&
                control.errors[message.forValidator] &&
                !this.errors[message.forControl]) {
                this.errors[message.forControl] = message.text;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myForm'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === 'function' && _a) || Object)
    ], BookFormComponent.prototype, "myForm", void 0);
    BookFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-form',
            template: __webpack_require__(682)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _b) || Object])
    ], BookFormComponent);
    return BookFormComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-form.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent(bs) {
        this.bs = bs;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.getAll().subscribe(function (res) { return _this.books = res; });
    };
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-list',
            template: __webpack_require__(684)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object])
    ], BookListComponent);
    return BookListComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-list.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.bookSelected = function (book) {
        this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'bm-home',
            template: "\n  <div class=\"ui container two column grid\">\n\n    <div class=\"ui container column\">\n      <h1>Home</h1>\n      <p>Das ist der BookMonkey.</p>\n      <a routerLink=\"../books\" class=\"ui red button\">\n        Buchliste ansehen\n        <i class=\"right arrow icon\"></i>\n      </a>\n    </div>\n\n    <bm-search (bookSelected)=\"bookSelected($event)\" class=\"column\"></bm-search>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/home.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(isbn, title, authors, published, subtitle, rating, thumbnails, description) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.subtitle = subtitle;
        this.rating = rating;
        this.thumbnails = thumbnails;
        this.description = description;
    }
    return Book;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 398;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(519);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/main.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_details_book_details_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_form_book_form_component__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: 'books/:isbn',
        component: __WEBPACK_IMPORTED_MODULE_4__book_details_book_details_component__["a" /* BookDetailsComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_5__book_form_book_form_component__["a" /* BookFormComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app-routing.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-root',
            template: __webpack_require__(680)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_list_book_list_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_list_item_book_list_item_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_details_book_details_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_form_book_form_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_book_store_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__book_list_item_book_list_item_component__["a" /* BookListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_details_book_details_component__["a" /* BookDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__book_form_book_form_component__["a" /* BookFormComponent */] // NEW
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor__["DateValueAccessorModule"] // NEW
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__shared_book_store_service__["a" /* BookStoreService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormErrorMessages; });
var ErrorMessage = (function () {
    function ErrorMessage(forControl, forValidator, text) {
        this.forControl = forControl;
        this.forValidator = forValidator;
        this.text = text;
    }
    return ErrorMessage;
}());
var BookFormErrorMessages = [
    new ErrorMessage('title', 'required', 'Ein Buchtitel muss angegeben werden'),
    new ErrorMessage('isbn', 'required', 'Es muss eine ISBN angegeben werden'),
    new ErrorMessage('isbn', 'minlength', 'Die ISBN muss mindestens 10 Zeichen enthalten'),
    new ErrorMessage('isbn', 'maxlength', 'Eine ISBN darf höchstens 13 Zeichen haben'),
    new ErrorMessage('published', 'required', 'Es muss ein Erscheinungsdatum angegeben werden'),
    new ErrorMessage('authors', 'required', 'Es muss ein Autor angegeben werden')
];
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-form-error-messages.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListItemComponent = (function () {
    function BookListItemComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === 'function' && _a) || Object)
    ], BookListItemComponent.prototype, "book", void 0);
    BookListItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'a.bm-book-list-item',
            template: __webpack_require__(683)
        }), 
        __metadata('design:paramtypes', [])
    ], BookListItemComponent);
    return BookListItemComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-list-item.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(bs) {
        this.bs = bs;
        this.isLoading = false;
        this.foundBooks = [];
        this.bookSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyup
            .debounceTime(500)
            .distinctUntilChanged()
            .do(function () { return _this.isLoading = true; })
            .switchMap(function (searchTerm) { return _this.bs.getAllSearch(searchTerm); })
            .do(function () { return _this.isLoading = false; })
            .subscribe(function (books) { return _this.foundBooks = books; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "bookSelected", void 0);
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-search',
            template: __webpack_require__(685)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/search.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/environment.js.map

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui three item tabs menu\">\n  <a routerLink=\"home\"  routerLinkActive=\"active\" class=\"item\">Home</a>\n  <a routerLink=\"books\" routerLinkActive=\"active\" class=\"item\">Bücher</a>\n  <a routerLink=\"admin\" routerLinkActive=\"active\" class=\"item\">Administration</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"book\">\n  <div class=\"four wide column\">\n    <img class=\"ui large image\" [src]=\"book?.thumbnails && book?.thumbnails[0].url\">\n  </div>\n  <div class=\"twelve wide column\">\n    <h1 class=\"ui header\">{{ book?.title }}</h1>\n    <h3 class=\"ui header\">{{ book?.subtitle }}</h3>\n    <div class=\"ui divider\"></div>\n    <div class=\"ui grid\">\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Autoren</h4>\n        <span *ngFor=\"let author of book?.authors; let l=last\">\n          {{ author }}<span *ngIf=\"!l\">, </span>\n        </span>\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">ISBN</h4>\n        {{ book?.isbn }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Erschienen</h4>\n        {{ book?.published }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Rating</h4>\n        <i *ngFor=\"let r of getRating(book?.rating)\" class=\"yellow star icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"sixteen wide column\">\n    <h3 class=\"ui header\">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class=\"sixteen wide column\">\n    <div class=\"ui small images\">\n      <img *ngFor=\"let thumbnail of book?.thumbnails\" [src]=\"thumbnail.url\">\n    </div>\n  </div>\n</div>\n\n<button class=\"ui tiny red labeled icon button\"\n        (click)=\"removeBook()\">\n  <i class=\"remove icon\"></i> Buch löschen\n</button>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<h1>Buchformular</h1>\n<form  class=\"ui large form\"\n       #myForm=\"ngForm\"\n       (ngSubmit)=\"submitForm()\">\n\n  <div class=\"field\">\n    <label>Buchtitel</label>\n    <input\n      name=\"title\"\n      [(ngModel)]=\"book.title\"\n      required>\n    <div *ngIf=\"errors.title\" class=\"ui negative message\">\n      {{ errors.title }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Untertitel</label>\n    <input\n      name=\"subtitle\"\n      [(ngModel)]=\"book.subtitle\">\n  </div>\n  <div class=\"field\">\n    <label>ISBN-Nummer</label>\n    <input\n      name=\"isbn\"\n      [(ngModel)]=\"book.isbn\"\n      required\n      minlength=\"10\"\n      maxlength=\"13\">\n    <div *ngIf=\"errors.isbn\" class=\"ui negative message\">\n      {{ errors.isbn }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Erscheinungsdatum</label>\n    <input\n      type=\"date\"\n      name=\"published\"\n      [(ngModel)]=\"book.published\"\n      useValueAsDate\n      required>\n    <div *ngIf=\"errors.published\" class=\"ui negative message\">\n      {{ errors.published }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Autor</label>\n    <input\n      name=\"authors\"\n      [(ngModel)]=\"book.authors[0]\"\n      required>\n    <div *ngIf=\"errors.authors\" class=\"ui negative message\">\n      {{ errors.authors }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Beschreibung</label>\n    <textarea\n      name=\"description\"\n      [(ngModel)]=\"book.description\"\n      rows=\"3\"></textarea>\n  </div>\n  <div class=\"field\">\n    <label>Bild</label>\n    <div class=\"two fields\" ngModelGroup=\"thumbnail\">\n      <div class=\"field\">\n        <input\n          name=\"url\"\n          [(ngModel)]=\"book.thumbnails[0].url\"\n          placeholder=\"http://beispiel/img.jpg\">\n      </div>\n      <div class=\"field\">\n        <input\n          name=\"title\"\n          [(ngModel)]=\"book.thumbnails[0].title\"\n          placeholder=\"Titel\">\n      </div>\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"ui button\" [disabled]=\"myForm.invalid\">Speichern</button>\n</form>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails\"\n     [src]=\"book.thumbnails[0].url\">\n<div class=\"content\">\n  <div class=\"header\">{{ book.title }}</div>\n  <div class=\"description\">{{ book.subtitle }}</div>\n  <div class=\"metadata\">\n    <span *ngFor=\"let author of book.authors; let l=last\">\n      {{ author }}<span *ngIf=\"!l\">, </span>\n    </span>\n  </div>\n  <div class=\"extra\">ISBN {{ book.isbn }}</div>\n</div>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <a class=\"bm-book-list-item item\"\n      *ngFor=\"let b of books\"\n      [book]=\"b\"\n      [routerLink]=\"b.isbn\"></a>\n  <div *ngIf=\"!books\" class=\"ui active dimmer\">\n    <div class=\"ui large text loader\">Daten werden geladen...</div>\n  </div>\n  <p *ngIf=\"books && !books.length\">Es wurden noch keine Bücher eingetragen.</p>\n</div>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui search\"  [ngClass]=\"{ loading: isLoading }\">\r\n  <div class=\"ui icon input\">\r\n    <input (keyup)=\"keyup.emit(searchTerm.value)\" #searchTerm class=\"prompt\" type=\"text\" placeholder=\"Search...\">\r\n    <i class=\"search icon\"></i>\r\n  </div>\r\n  <div class=\"results transition\" [ngClass]=\"{ visible: foundBooks.length }\">\r\n\r\n    <a href (click)=\"bookSelected.emit(book); false\" class=\"result\" *ngFor=\"let book of foundBooks\">\r\n      <div class=\"content\">\r\n        <div class=\"title\" >{{ book.title }}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ })

},[726]);
//# sourceMappingURL=main.bundle.map
System.register(['angular2/core', 'angular2/router', './home/index', './books/index', './admin/index'], function(exports_1, context_1) {
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
    var core_1, router_1, index_1, index_2, index_3;
    var BookMonkeyApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }],
        execute: function() {
            BookMonkeyApp = (function () {
                function BookMonkeyApp() {
                }
                BookMonkeyApp = __decorate([
                    router_1.RouteConfig([
                        { path: 'home/', name: 'Home', component: index_1.HomeComponent, useAsDefault: true },
                        { path: 'books/...', name: 'Books', component: index_2.BooksComponent },
                        { path: 'admin/...', name: 'Admin', component: index_3.AdminComponent }
                    ]),
                    core_1.Component({
                        selector: 'book-monkey-app',
                        moduleId: __moduleName,
                        templateUrl: 'book-monkey.html',
                        styles: [
                            ".router-link-active {\n      color: #ffffff !important;\n      background: #DB282C !important;\n    }"
                        ],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookMonkeyApp);
                return BookMonkeyApp;
            }());
            exports_1("BookMonkeyApp", BookMonkeyApp);
        }
    }
});
//# sourceMappingURL=book-monkey.js.map
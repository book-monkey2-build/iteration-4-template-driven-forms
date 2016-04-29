System.register(['angular2/core', 'angular2/router', '../book-form/book-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, book_form_component_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_form_component_1_1) {
                book_form_component_1 = book_form_component_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent() {
                }
                AdminComponent = __decorate([
                    router_1.RouteConfig([
                        { path: 'books/', name: 'Add', component: book_form_component_1.BookFormComponent, data: { mode: 'add' }, useAsDefault: true },
                        { path: 'books/:isbn', name: 'Update', component: book_form_component_1.BookFormComponent, data: { mode: 'update' } }
                    ]),
                    core_1.Component({
                        directives: [router_1.RouterOutlet],
                        template: '<router-outlet></router-outlet>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map
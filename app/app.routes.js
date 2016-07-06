"use strict";
var index_1 = require('./home/index');
var index_2 = require('./book-list/index');
var index_3 = require('./book-details/index');
var index_4 = require('./book-form/index');
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: index_1.HomeComponent
    },
    {
        path: 'books',
        component: index_2.BookListComponent
    },
    {
        path: 'books/:isbn',
        component: index_3.BookDetailsComponent
    },
    {
        path: 'admin',
        component: index_4.BookFormComponent,
    },
    {
        path: 'admin/:isbn',
        component: index_4.BookFormComponent
    }
];
//# sourceMappingURL=app.routes.js.map
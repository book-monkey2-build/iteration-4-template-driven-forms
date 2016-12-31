webpackJsonp([0,3],{159:function(t,e,n){"use strict";var o=n(0),i=n(308),r=n(8),a=(n.n(r),n(672)),s=(n.n(a),n(673)),c=(n.n(s),n(671)),u=(n.n(c),n(670)),l=(n.n(u),n(246));n.d(e,"a",function(){return h});var f=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(t){this.http=t,this.api="https://book-monkey2-api.angular-buch.com",this.headers=new i.b,this.headers.append("Content-Type","application/json")}return t.prototype.getAll=function(){return this.http.get(this.api+"/books").retry(3).map(function(t){return t.json()}).map(function(t){return t.map(function(t){return l.a.fromObject(t)})}).catch(this.errorHandler)},t.prototype.getSingle=function(t){return this.http.get(this.api+"/book/"+t).retry(3).map(function(t){return t.json()}).map(function(t){return l.a.fromObject(t)}).catch(this.errorHandler)},t.prototype.create=function(t){return this.http.post(this.api+"/book",JSON.stringify(t),{headers:this.headers}).catch(this.errorHandler)},t.prototype.update=function(t){return this.http.put(this.api+"/book/"+t.isbn,JSON.stringify(t),{headers:this.headers}).catch(this.errorHandler)},t.prototype.remove=function(t){return this.http.delete(this.api+"/book/"+t).catch(this.errorHandler)},t.prototype.errorHandler=function(t){return r.Observable.throw(t)},t=f([n.i(o.Injectable)(),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.c&&i.c)&&e||Object])],t);var e}()},246:function(t,e,n){"use strict";var o=n(392);n.d(e,"a",function(){return i});var i=function(){function t(){}return t.empty=function(){return new o.a("","",[""],new Date,"",0,[{url:"",title:""}],"")},t.fromObject=function(t){return new o.a(t.isbn,t.title,t.authors,"string"==typeof t.published?new Date(t.published):t.published,t.subtitle,t.rating,t.thumbnails,t.description)},t}()},387:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=387},388:function(t,e,n){"use strict";var o=n(0),i=n(327),r=n(246),a=n(159);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n){this.bs=t,this.router=e,this.route=n,this.book=r.a.empty()}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.params;this.bs.getSingle(e.isbn).subscribe(function(e){return t.book=e})},t.prototype.getRating=function(t){return new Array(t)},t.prototype.removeBook=function(){var t=this;confirm("Buch wirklich löschen?")&&this.bs.remove(this.book.isbn).subscribe(function(e){return t.router.navigate(["../"],{relativeTo:t.route})})},t=s([n.i(o.Component)({selector:"bm-book-details",template:n(663)}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object,"function"==typeof(u="undefined"!=typeof i.b&&i.b)&&u||Object,"function"==typeof(l="undefined"!=typeof i.c&&i.c)&&l||Object])],t);var e,u,l}()},389:function(t,e,n){"use strict";var o=n(0),i=n(194),r=n(246),a=n(159),s=n(698);n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.bs=t,this.book=r.a.empty(),this.errors={}}return t.prototype.ngOnInit=function(){var t=this;this.myForm.valueChanges.subscribe(function(){return t.updateErrorMessages()})},t.prototype.submitForm=function(){var t=this;this.book.authors=this.myForm.value.authors.split(","),this.book.thumbnails=[this.myForm.value.thumbnail];var e=r.a.fromObject(this.book);this.bs.create(e).subscribe(function(e){t.myForm.reset()})},t.prototype.updateErrorMessages=function(){this.errors={};for(var t=0,e=s.a;t<e.length;t++){var n=e[t],o=this.myForm.form.get(n.forControl);o&&o.dirty&&o.invalid&&o.errors[n.forValidator]&&!this.errors[n.forControl]&&(this.errors[n.forControl]=n.text)}},c([n.i(o.ViewChild)("myForm"),u("design:type","function"==typeof(e="undefined"!=typeof i.NgForm&&i.NgForm)&&e||Object)],t.prototype,"myForm",void 0),t=c([n.i(o.Component)({selector:"bm-book-form",template:n(664)}),u("design:paramtypes",["function"==typeof(l="undefined"!=typeof a.a&&a.a)&&l||Object])],t);var e,l}()},390:function(t,e,n){"use strict";var o=n(0),i=n(159);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.bs=t}return t.prototype.ngOnInit=function(){var t=this;this.bs.getAll().subscribe(function(e){return t.books=e})},t=r([n.i(o.Component)({selector:"bm-book-list",template:n(666)}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],t);var e}()},391:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=i([n.i(o.Component)({selector:"bm-home",template:'\n  <div class="ui container">\n    <h1>Home</h1>\n    <p>Das ist der BookMonkey.</p>\n    <a routerLink="../books" class="ui red button">\n      Buchliste ansehen\n      <i class="right arrow icon"></i>\n    </a>\n  </div>\n  '}),r("design:paramtypes",[])],t)}()},392:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e,n,o,i,r,a,s){this.isbn=t,this.title=e,this.authors=n,this.published=o,this.subtitle=i,this.rating=r,this.thumbnails=a,this.description=s}return t}()},395:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(n(701),n(480)),i=n(0),r=n(700),a=n(697);r.a.production&&n.i(i.enableProdMode)(),n.i(o.a)().bootstrapModule(a.a)},57:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},662:function(t,e){t.exports='<div class="ui three item tabs menu">\n  <a routerLink="home"  routerLinkActive="active" class="item">Home</a>\n  <a routerLink="books" routerLinkActive="active" class="item">Bücher</a>\n  <a routerLink="admin" routerLinkActive="active" class="item">Administration</a>\n</div>\n<router-outlet></router-outlet>\n'},663:function(t,e){t.exports='<div class="ui grid" *ngIf="book">\n  <div class="four wide column">\n    <img class="ui large image" [src]="book?.thumbnails && book?.thumbnails[0].url">\n  </div>\n  <div class="twelve wide column">\n    <h1 class="ui header">{{ book?.title }}</h1>\n    <h3 class="ui header">{{ book?.subtitle }}</h3>\n    <div class="ui divider"></div>\n    <div class="ui grid">\n      <div class="four wide column">\n        <h4 class="ui header">Autoren</h4>\n        <span *ngFor="let author of book?.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">ISBN</h4>\n        {{ book?.isbn }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Erschienen</h4>\n        {{ book?.published }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Rating</h4>\n        <i *ngFor="let r of getRating(book?.rating)" class="yellow star icon"></i>\n      </div>\n    </div>\n  </div>\n  <div class="sixteen wide column">\n    <h3 class="ui header">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class="sixteen wide column">\n    <div class="ui small images">\n      <img *ngFor="let thumbnail of book?.thumbnails" [src]="thumbnail.url">\n    </div>\n  </div>\n</div>\n\n<button class="ui tiny red labeled icon button"\n        (click)="removeBook()">\n  <i class="remove icon"></i> Buch löschen\n</button>\n'},664:function(t,e){t.exports='<h1>Buchformular</h1>\n<form novalidate\n       class="ui large form"\n       #myForm="ngForm"\n       (ngSubmit)="submitForm()">\n\n  <div class="field">\n    <label>Buchtitel</label>\n    <input\n      name="title"\n      [(ngModel)]="book.title"\n      required>\n    <div *ngIf="errors.title" class="ui negative message">\n      {{ errors.title }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Untertitel</label>\n    <input\n      name="subtitle"\n      [(ngModel)]="book.subtitle">\n  </div>\n  <div class="field">\n    <label>ISBN-Nummer</label>\n    <input\n      name="isbn"\n      [(ngModel)]="book.isbn"\n      required\n      minlength="10"\n      maxlength="13">\n    <div *ngIf="errors.isbn" class="ui negative message">\n      {{ errors.isbn }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Erscheinungsdatum</label>\n    <input\n      type="date"\n      name="published"\n      [(ngModel)]="book.published"\n      useValueAsDate\n      required>\n    <div *ngIf="errors.published" class="ui negative message">\n      {{ errors.published }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Autor</label>\n    <input\n      name="authors"\n      [(ngModel)]="book.authors[0]"\n      required>\n    <div *ngIf="errors.authors" class="ui negative message">\n      {{ errors.authors }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Beschreibung</label>\n    <textarea\n      name="description"\n      [(ngModel)]="book.description"\n      rows="3"></textarea>\n  </div>\n  <div class="field">\n    <label>Bild</label>\n    <div class="two fields" ngModelGroup="thumbnail">\n      <div class="field">\n        <input\n          name="url"\n          [(ngModel)]="book.thumbnails[0].url"\n          placeholder="http://beispiel/img.jpg">\n      </div>\n      <div class="field">\n        <input\n          name="title"\n          [(ngModel)]="book.thumbnails[0].title"\n          placeholder="Titel">\n      </div>\n    </div>\n  </div>\n\n  <button type="submit" class="ui button" [disabled]="myForm.invalid">Speichern</button>\n</form>\n'},665:function(t,e){t.exports='<img class="ui tiny image"\n     *ngIf="book.thumbnails"\n     [src]="book.thumbnails[0].url">\n<div class="content">\n  <div class="header">{{ book?.title }}</div>\n  <div class="description"> {{ book?.subtitle }} </div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">ISBN {{ book?.isbn }}</div>\n</div>\n'},666:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item"\n      *ngFor="let b of books"\n      [book]="b"\n      [routerLink]="b.isbn"></a>\n  <p *ngIf="!books">Laden Daten...</p>\n  <p *ngIf="books && !books.length">Es wurden noch keine B&uuml;cher eingetragen.</p>\n</div>\n'},689:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&h&&(b=!1,h.length?p=h.concat(p):m=-1,p.length&&s())}function s(){if(!b){var t=i(a);b=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,b=!1,r(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var h,p=[],b=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(t,e)),1!==p.length||b||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},695:function(t,e,n){"use strict";var o=n(0),i=n(327),r=n(391),a=n(390),s=n(388),c=n(389);n.d(e,"a",function(){return d});var u=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:r.a},{path:"books",component:a.a},{path:"books/:isbn",component:s.a},{path:"admin",component:c.a}],d=function(){function t(){}return t=u([n.i(o.NgModule)({imports:[i.a.forRoot(f)],exports:[i.a],providers:[]}),l("design:paramtypes",[])],t)}()},696:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=i([n.i(o.Component)({selector:"bm-root",template:n(662)}),r("design:paramtypes",[])],t)}()},697:function(t,e,n){"use strict";var o=n(147),i=n(194),r=n(308),a=n(0),s=n(696),c=n(391),u=n(390),l=n(699),f=n(388),d=n(389),h=n(159),p=n(695),b=n(509);n.n(b);n.d(e,"a",function(){return g});var m=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(){}return t=m([n.i(a.NgModule)({declarations:[s.a,c.a,u.a,l.a,f.a,d.a],imports:[o.a,i.FormsModule,r.a,p.a,b.DateValueAccessorModule],providers:[h.a],bootstrap:[s.a]}),v("design:paramtypes",[])],t)}()},698:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=function(){function t(t,e,n){this.forControl=t,this.forValidator=e,this.text=n}return t}(),i=[new o("title","required","Ein Buchtitel muss angegeben werden"),new o("isbn","required","Es muss eine ISBN angegeben werden"),new o("isbn","minlength","Die ISBN muss mindestens 10 Zeichen enthalten"),new o("isbn","maxlength","Eine ISBN darf höchstens 13 Zeichen haben"),new o("published","required","Es muss ein Erscheinungsdatum angegeben werden"),new o("authors","required","Es muss ein Autor angegeben werden")]},699:function(t,e,n){"use strict";var o=n(0),i=n(392);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return r([n.i(o.Input)(),a("design:type","function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object)],t.prototype,"book",void 0),t=r([n.i(o.Component)({selector:"a.bm-book-list-item",template:n(665)}),a("design:paramtypes",[])],t);var e}()},700:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},701:function(t,e,n){"use strict";var o=n(524),i=(n.n(o),n(517)),r=(n.n(i),n(513)),a=(n.n(r),n(519)),s=(n.n(a),n(518)),c=(n.n(s),n(516)),u=(n.n(c),n(515)),l=(n.n(u),n(523)),f=(n.n(l),n(512)),d=(n.n(f),n(511)),h=(n.n(d),n(521)),p=(n.n(h),n(514)),b=(n.n(p),n(522)),m=(n.n(b),n(520)),v=(n.n(m),n(525)),g=(n.n(v),n(694));n.n(g)},702:function(t,e,n){t.exports=n(395)}},[702]);
//# sourceMappingURL=main.dfd15eb928a08c57d39c.bundle.map
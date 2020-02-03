webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Home</h3>\n  <p>\n    This is the home page\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dettagliostruttura_dettagliostruttura__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__["a" /* AboutUs */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dettagliostruttura_dettagliostruttura__["a" /* Dettagliostruttura */],
                __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__["a" /* Convenzioni */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__["a" /* AboutUs */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dettagliostruttura_dettagliostruttura__["a" /* Dettagliostruttura */],
                __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__["a" /* Convenzioni */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_convenzioni_convenzioni__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Chi siamo', component: __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__["a" /* AboutUs */] },
            { title: 'Convenzioni', component: __WEBPACK_IMPORTED_MODULE_7__pages_convenzioni_convenzioni__["a" /* Convenzioni */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Convenzioni; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_hotel__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_restaurant__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dettagliostruttura_dettagliostruttura__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Convenzioni = /** @class */ (function () {
    function Convenzioni(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedConv = navParams.get('selectedConv') || 'hotels';
        this.selectedStrutturaBefoure = navParams.get('itemName');
        this.hotelsList = [];
        for (var i = 0; i < 10; i++) {
            this.hotelsList.push(new __WEBPACK_IMPORTED_MODULE_2__model_hotel__["a" /* Hotel */]("Hotel" + i, "Via indirizzo, " + (i + 20), "333 " + i + i % 2 + " " + i + "4 560", "descrizione", '/assets/imgs/hotel1.jpg', i * 30));
        }
        this.restaurantsList = [];
        for (var i = 0; i < 10; i++) {
            this.restaurantsList.push(new __WEBPACK_IMPORTED_MODULE_3__model_restaurant__["a" /* Restaurant */]("Ristorante" + i, "Via indirizzo, " + (i + 20), "333 " + i + i % 2 + " " + i + "4 560", "descrizione", '/assets/imgs/hotel1.jpg', 'mediterranea'));
        }
    }
    Convenzioni.prototype.itemTapped = function (event, item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dettagliostruttura_dettagliostruttura__["a" /* Dettagliostruttura */], {
            item: item
        });
    };
    Convenzioni.prototype.ionViewWillEnter = function () {
        if (this.selectedStrutturaBefoure)
            document.getElementById(this.selectedStrutturaBefoure).scrollIntoView();
    };
    Convenzioni = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-convenzioni',template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/pages/convenzioni/convenzioni.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Convenzioni</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        <ion-segment [(ngModel)]="selectedConv">\n          <ion-segment-button value="hotels">\n            Hotel\n          </ion-segment-button>\n          <ion-segment-button value="restaurants">\n            Ristoranti\n          </ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="selectedConv">\n        <div *ngSwitchCase="\'hotels\'">\n            <ion-item\n                no-lines\n                *ngFor="let item of hotelsList"\n                (click)="itemTapped($event, item)">\n                <ion-card class="card" [id]=\'item.name\' no-padding >\n                    <img [src]=item.getImgPath() class="card-img"/>\n                    <ion-card-content class="card-content-right">\n                        <ion-card-title>\n                            {{item.getName()}}\n                        </ion-card-title>\n                        <div>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="logo-euro"></ion-icon>\n                                {{item.getFormattedPrice()}}\n                            </p>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="navigate"></ion-icon>\n                                {{item.getAddress()}}\n                            </p>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="call"></ion-icon>\n                                {{item.getTelNumber()}}\n                            </p>\n                        </div>\n                    </ion-card-content>\n                </ion-card>\n            </ion-item>\n        </div>\n        <div *ngSwitchCase="\'restaurants\'">\n            <ion-item\n                no-lines\n                *ngFor="let item of restaurantsList"\n                (click)="itemTapped($event, item)">\n                <ion-card class="card" [id]=\'item.name\' no-padding >\n                    <img [src]=item.getImgPath() class="card-img"/>\n                    <ion-card-content class="card-content-right">\n                        <ion-card-title>\n                            {{item.getName()}}\n                        </ion-card-title>\n                        <div>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="navigate"></ion-icon>\n                                {{item.getAddress()}}\n                            </p>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="call"></ion-icon>\n                                {{item.getTelNumber()}}\n                            </p>\n                        </div>\n                    </ion-card-content>\n                </ion-card>\n            </ion-item>\n        </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/pages/convenzioni/convenzioni.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Convenzioni);
    return Convenzioni;
}());

//# sourceMappingURL=convenzioni.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dettagliostruttura; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convenzioni_convenzioni__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dettagliostruttura = /** @class */ (function () {
    function Dettagliostruttura(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hotel = null;
        this.restaurant = null;
        var inputItem = navParams.get('item');
        'price' in inputItem ? this.hotel = inputItem : this.restaurant = inputItem;
        this.struttura = this.hotel ? this.hotel : this.restaurant;
    }
    Dettagliostruttura.prototype.backToConvenzioni = function (event, selectedConv, itemName) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__convenzioni_convenzioni__["a" /* Convenzioni */], {
            selectedConv: this.hotel ? 'hotels' : 'restaurants',
            itemName: this.hotel ? this.hotel.getName() : this.restaurant.getName(),
        });
    };
    Dettagliostruttura = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettagliostruttura',template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/pages/dettagliostruttura/dettagliostruttura.html"*/'<ion-header>\n</ion-header>\n\n<ion-content>\n    <img\n        [src]=struttura.getImgPath()\n        class="hotel-top-img"\n        alt="Hotel image" />\n    <button\n        ion-button\n        icon-only\n        clear\n        large\n        color="light"\n        class="hotel-close-icon"\n        (click)="backToConvenzioni()"\n    >\n        <ion-icon name="close-circle" ></ion-icon>\n    </button>\n    <div padding>\n        <h3>{{struttura.getName()}}</h3>\n        <ion-item no-padding>\n            <ion-label class="text-grey">Indirizzo</ion-label>\n            <ion-label class="align-right">{{struttura.getAddress()}}</ion-label>\n        </ion-item>\n        <ion-item no-padding>\n            <ion-label class="text-grey">Numero</ion-label>\n            <ion-label class="align-right">{{struttura.getTelNumber()}}</ion-label>\n        </ion-item>\n\n        <div *ngIf="restaurant; then restaurantBlock"></div>\n        <ng-template #restaurantBlock>\n          <ion-item no-padding>\n            <ion-label class="text-grey">Cucina</ion-label>\n            <ion-label class="align-right">{{struttura.getCucina()}}</ion-label>\n          </ion-item>\n        </ng-template>\n\n        <ion-item no-padding>\n            <ion-label class="text-grey" position="stacked">Descrizione</ion-label>\n        </ion-item>\n        <p class="description">\n            {{struttura.getDescription()}}\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Etiam vel nisi sodales, venenatis tortor et, molestie nibh.\n            Nullam mi leo, pulvinar sit amet tincidunt placerat, viverra eu tortor.\n        </p>\n        <!--\n            image or map with the location\n        -->\n        <button\n            ion-button\n            block\n            class="btn-call"\n        >\n            Chiama\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/pages/dettagliostruttura/dettagliostruttura.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Dettagliostruttura);
    return Dettagliostruttura;
}());

//# sourceMappingURL=dettagliostruttura.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUs = /** @class */ (function () {
    function AboutUs(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutUs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/pages/aboutus/aboutus.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Chi siamo</h3>\n    <p>\n        about us page\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/pages/aboutus/aboutus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutUs);
    return AboutUs;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Struttura; });
var Struttura = /** @class */ (function () {
    function Struttura(name, address, telNumber, description, imgPath) {
        this.name = name;
        this.address = address;
        this.telNumber = telNumber;
        this.description = description;
        this.imgPath = imgPath;
    }
    Struttura.prototype.getName = function () {
        return this.name;
    };
    Struttura.prototype.getAddress = function () {
        return this.address;
    };
    Struttura.prototype.getTelNumber = function () {
        return this.telNumber;
    };
    Struttura.prototype.getDescription = function () {
        return this.description;
    };
    Struttura.prototype.getImgPath = function () {
        return this.imgPath;
    };
    return Struttura;
}());

//# sourceMappingURL=struttura.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__struttura__ = __webpack_require__(272);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Hotel = /** @class */ (function (_super) {
    __extends(Hotel, _super);
    function Hotel(name, address, telNumber, description, imgPath, price) {
        var _this = _super.call(this, name, address, telNumber, description, imgPath) || this;
        _this.price = price;
        return _this;
    }
    Hotel.prototype.getFormattedPrice = function () {
        return this.price + " $ a notte";
    };
    return Hotel;
}(__WEBPACK_IMPORTED_MODULE_0__struttura__["a" /* Struttura */]));

//# sourceMappingURL=hotel.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__struttura__ = __webpack_require__(272);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, address, telNumber, description, imgPath, cucina) {
        var _this = _super.call(this, name, address, telNumber, description, imgPath) || this;
        _this.cucina = cucina;
        return _this;
    }
    Restaurant.prototype.getCucina = function () {
        return this.cucina;
    };
    return Restaurant;
}(__WEBPACK_IMPORTED_MODULE_0__struttura__["a" /* Struttura */]));

//# sourceMappingURL=restaurant.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map
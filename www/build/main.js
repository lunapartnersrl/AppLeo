webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Convenzioni; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_hotel__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_restaurant__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dettagliostruttura_dettagliostruttura__ = __webpack_require__(203);
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
            selector: 'page-convenzioni',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/convenzioni/convenzioni.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Convenzioni</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        <ion-segment [(ngModel)]="selectedConv">\n          <ion-segment-button value="hotels">\n            Hotel\n          </ion-segment-button>\n          <ion-segment-button value="restaurants">\n            Ristoranti\n          </ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="selectedConv">\n        <div *ngSwitchCase="\'hotels\'">\n            <ion-item\n                no-lines\n                *ngFor="let item of hotelsList"\n                (click)="itemTapped($event, item)">\n                <ion-card class="card" [id]=\'item.name\' no-padding >\n                    <img [src]=item.getImgPath() class="card-img"/>\n                    <ion-card-content class="card-content-right">\n                        <ion-card-title>\n                            {{item.getName()}}\n                        </ion-card-title>\n                        <div>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="logo-euro"></ion-icon>\n                                {{item.getFormattedPrice()}}\n                            </p>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="navigate"></ion-icon>\n                                {{item.getAddress()}}\n                            </p>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="call"></ion-icon>\n                                {{item.getTelNumber()}}\n                            </p>\n                        </div>\n                    </ion-card-content>\n                </ion-card>\n            </ion-item>\n        </div>\n        <div *ngSwitchCase="\'restaurants\'">\n            <ion-item\n                no-lines\n                *ngFor="let item of restaurantsList"\n                (click)="itemTapped($event, item)">\n                <ion-card class="card" [id]=\'item.name\' no-padding >\n                    <img [src]=item.getImgPath() class="card-img"/>\n                    <ion-card-content class="card-content-right">\n                        <ion-card-title>\n                            {{item.getName()}}\n                        </ion-card-title>\n                        <div>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="navigate"></ion-icon>\n                                {{item.getAddress()}}\n                            </p>\n\n                            <p>\n                                <ion-icon slot="start" class="icon-spacing" name="call"></ion-icon>\n                                {{item.getTelNumber()}}\n                            </p>\n                        </div>\n                    </ion-card-content>\n                </ion-card>\n            </ion-item>\n        </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/convenzioni/convenzioni.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Convenzioni);
    return Convenzioni;
}());

//# sourceMappingURL=convenzioni.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaCorsi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_corso__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliocorso_dettagliocorso__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_color__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaCorsi = /** @class */ (function () {
    function ListaCorsi(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchCourseValue = "";
        (navParams.data.title) ? this.selectedCourse = navParams.data : this.selectedCourse = null;
        this.coursesList = [];
        for (var i = 10; i > 0; i--) {
            var randomColor = __WEBPACK_IMPORTED_MODULE_4__model_color__["a" /* Color */][Math.floor(Math.random() * 5)];
            this.coursesList.push(new __WEBPACK_IMPORTED_MODULE_2__model_corso__["a" /* Corso */]("Titolo " + i + " ", "2020-02-04T10:0" + i + ":35.652Z", "2020-02-05T10:0" + (i + 1) + ":35.652Z", 'descrizione', randomColor, "via Indirizzo, " + i, 'prof. Marco Rossi', 'Aula A2'));
        }
        this.customCoursesList = this.coursesList;
    }
    ListaCorsi.prototype.orderByDate = function () {
        this.customCoursesList = this.coursesList;
        this.customCoursesList.sort(function (a, b) {
            var dateA = new Date(a.getISOStartDate());
            var dateB = new Date(b.getISOStartDate());
            if (dateA < dateB)
                return -1;
            if (dateB > dateB)
                return 1;
            return 0;
        });
        console.log(this.customCoursesList);
    };
    ListaCorsi.prototype.orderByTitle = function () {
        this.customCoursesList = this.coursesList;
        this.customCoursesList.sort(function (a, b) {
            if (a.getTitle() < b.getTitle())
                return -1;
            if (a.getTitle() > b.getTitle())
                return 1;
            return 0;
        });
        console.log(this.customCoursesList);
    };
    ListaCorsi.prototype.onSearchInputChange = function () {
        var tmp = [];
        for (var _i = 0, _a = this.coursesList; _i < _a.length; _i++) {
            var elem = _a[_i];
            var title = elem.getTitle();
            if (title.includes(this.searchCourseValue)) {
                tmp.push(elem);
            }
        }
        console.log(this.customCoursesList);
        this.customCoursesList = tmp;
    };
    ListaCorsi.prototype.itemIsTapped = function (event, item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dettagliocorso_dettagliocorso__["a" /* DettaglioCorso */], item);
    };
    ListaCorsi.prototype.ionViewWillEnter = function () {
        if (this.selectedCourse) {
            console.log('there is a course');
            document.getElementById(this.selectedCourse.getTitle()).scrollIntoView();
        }
    };
    ListaCorsi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listacorsi',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/listacorsi/listacorsi.html"*/'<ion-header>\n    <ion-navbar padding>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-item no-lines class="input-search">\n        <ion-input\n          type="text"\n          placeholder="Cerca il corso"\n          [(ngModel)]="searchCourseValue"\n          (ngModelChange)="onSearchInputChange()"\n        >\n        </ion-input>\n      </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item no-lines no-padding>\n      <p>Ordina per</p>\n      <button ion-button icon-start color="light"\n        (click)="orderByDate()"\n\n      >\n        <ion-icon name="calendar"></ion-icon>\n        Data\n      </button>\n      <button ion-button icon-start color="light"\n        (click)="orderByTitle()"\n      >\n        <ion-icon name="list"></ion-icon>\n        Ordine alfaberico\n      </button>\n\n    </ion-item>\n\n      <ion-card\n        no-lines\n        no-padding\n        *ngFor="let item of customCoursesList"\n        (click)="itemIsTapped($event, item)"\n        [id]="item.getTitle()"\n        class="card-layout {{item.getColor()}}"\n      >\n        <ion-card-header>\n          {{ item.getTitle() }}\n        </ion-card-header>\n        <ion-card-content>\n          <div class="card-content-date">{{ item.getStartingDate() }} > {{ item.getEndingDate() }}</div>\n          <div class="card-content-time">11:20 > 13:00</div>\n        </ion-card-content>\n      </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/listacorsi/listacorsi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListaCorsi);
    return ListaCorsi;
}());

//# sourceMappingURL=listacorsi.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar_calendar__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage.prototype.ngOnInit = function () {
        this.resetEvent();
    };
    CalendarPage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    };
    // Create the right event format and reload source
    CalendarPage.prototype.addEvent = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    // Change current month/week/day
    CalendarPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    CalendarPage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    // Change between month/week/day
    CalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    // Focus today
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    // Selected date reange and hence title changed
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    // Calendar event was clicked
    //     async onEventSelected(event) {
    //         // Use Angular date pipe for conversion
    //         let start = formatDate(event.startTime, 'medium', this.locale);
    //         let end = formatDate(event.endTime, 'medium', this.locale);
    //
    //         const alert = await this.alertCtrl.create({
    //             header: event.title,
    //             subHeader: event.desc,
    //             message: 'From: ' + start + '<br><br>To: ' + end,
    //             buttons: ['OK']
    //         });
    //         alert.present();
    //     }
    // Time slot was clicked
    CalendarPage.prototype.onTimeSelected = function (ev) {
        var selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic2_calendar_calendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar_calendar__["a" /* CalendarComponent */])
    ], CalendarPage.prototype, "myCal", void 0);
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Calendar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <calendar [eventSource]="eventSource"\n            [calendarMode]="calendar.mode"\n            [currentDate]="calendar.currentDate"\n            (onTitleChanged)="onViewTitleChanged($event)"\n            (onTimeSelected)="onTimeSelected($event)"\n            step="30">\n\n  </calendar>\n</ion-content>\n'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Home</h3>\n  <p>\n    This is the home page\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-aboutus',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/aboutus/aboutus.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Chi siamo</h3>\n    <p>\n        Learning Expressions On-the-job è un ambiente formativo attraverso il quale gli insegnanti\n        possono inventare ed innovare didattiche e metodi, pensando e sperimentando, osservando e facendo,\n        vivendo esperienze di apprendimento profondo, in contesti cooperativi guidati dai migliori esperti.\n        I percorsi multipli, scelti da ogni insegnante su misura.\n        L\'offerta sarà principalmente erogata presso i locali di Spazio Leo, alle scuole Mattarella di Modena,\n        dove la scelta delle soluzioni architettoniche e della strumentazione presente vuole sottolineare\n        ed essere parte integrante di un processo di innovazione della didattica.\n        Spazio Leo propone conferenze, giornate formative fatte di introduzioni in plenaria e laboratori di approfondimento,\n         incontri spot. A giugno ci saranno un camp residenziale lungo per docenti e una due giorni espressamente\n         dedicata agli animatori digitali.\n        Alle attività di Spazio Leo ci si iscriverà qui:\n        https://iscrizioni.istruzioneer.it/site/corsi  (a breve disponibili).\n        Info e link anche sui social di Spazio Leo / IC3 Modena\n\n\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/aboutus/aboutus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutUs);
    return AboutUs;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 202:
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dettagliostruttura; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__convenzioni_convenzioni__ = __webpack_require__(102);
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
    Dettagliostruttura.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    Dettagliostruttura.prototype.loadMap = function () {
        /* precondition to access location =>
            A.the object hotel/restaurant will also have a property
            location:{lat: x, lng: y}
            so we can access it with:
            this.hotel.getLng() and this.hotel.getLat()
            B. if we have only the address we have to do the geolocation
            of it, to get the lat, lng from the address
        */
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["a" /* Environment */].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': '',
            'API_KEY_FOR_BROWSER_DEBUG': ''
        });
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["b" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'larix',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 43.0741904,
                lng: -89.3809802
            }
        });
    };
    Dettagliostruttura.prototype.backToConvenzioni = function (event, selectedConv, itemName) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__convenzioni_convenzioni__["a" /* Convenzioni */], {
            selectedConv: this.hotel ? 'hotels' : 'restaurants',
            itemName: this.hotel ? this.hotel.getName() : this.restaurant.getName(),
        });
    };
    Dettagliostruttura = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-dettagliostruttura',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/dettagliostruttura/dettagliostruttura.html"*/'<ion-header>\n</ion-header>\n\n<ion-content>\n    <img\n        [src]=struttura.getImgPath()\n        class="hotel-top-img"\n        alt="Hotel image" />\n    <button\n        ion-button\n        icon-only\n        clear\n        large\n        color="light"\n        class="hotel-close-icon"\n        (click)="backToConvenzioni()"\n    >\n        <ion-icon name="close-circle" ></ion-icon>\n    </button>\n    <div padding>\n        <h3>{{struttura.getName()}}</h3>\n        <ion-item no-padding>\n            <ion-label class="text-grey">Indirizzo</ion-label>\n            <ion-label class="align-right">{{struttura.getAddress()}}</ion-label>\n        </ion-item>\n        <ion-item no-padding>\n            <ion-label class="text-grey">Numero</ion-label>\n            <ion-label class="align-right">{{struttura.getTelNumber()}}</ion-label>\n        </ion-item>\n\n        <div *ngIf="restaurant; then restaurantBlock"></div>\n        <ng-template #restaurantBlock>\n          <ion-item no-padding>\n            <ion-label class="text-grey">Cucina</ion-label>\n            <ion-label class="align-right">{{struttura.getCucina()}}</ion-label>\n          </ion-item>\n        </ng-template>\n\n        <ion-item no-padding>\n            <ion-label class="text-grey" position="stacked">Descrizione</ion-label>\n        </ion-item>\n        <p class="description">\n            {{struttura.getDescription()}}\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Etiam vel nisi sodales, venenatis tortor et, molestie nibh.\n            Nullam mi leo, pulvinar sit amet tincidunt placerat, viverra eu tortor.\n        </p>\n\n        <!-- start -- gmaps preview-->\n        <div id="map_canvas" #map_canvas></div>\n        <!-- end -- gmaps preview -->\n        <button\n            ion-button\n            block\n            class="btn-call"\n        >\n            Chiama\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/dettagliostruttura/dettagliostruttura.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Dettagliostruttura);
    return Dettagliostruttura;
}());

//# sourceMappingURL=dettagliostruttura.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
    Color[Color["yellow"] = 3] = "yellow";
    Color[Color["orange"] = 4] = "orange";
    Color[Color["black"] = 5] = "black";
})(Color || (Color = {}));
//# sourceMappingURL=color.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettaglioCorso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listacorsi_listacorsi__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DettaglioCorso = /** @class */ (function () {
    function DettaglioCorso(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.corso = null;
        this.corso = navParams.data;
    }
    DettaglioCorso.prototype.backToListaCorsi = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__listacorsi_listacorsi__["a" /* ListaCorsi */], this.corso);
    };
    DettaglioCorso = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettagliocorso',template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/dettagliocorso/dettagliocorso.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content>\n    <img\n        src="/assets/imgs/hotel1.jpg"\n        class="corso-top-img"\n        alt="Immagine del corso" />\n    <button\n        ion-button\n        icon-only\n        clear\n        large\n        color="light"\n        class="corso-close-icon"\n        (click)="backToListaCorsi()"\n    >\n        <ion-icon name="close-circle" ></ion-icon>\n    </button>\n\n    <div padding>\n        <h1 ion-text color="dark">{{corso.getTitle()}}</h1>\n        <p ion-text color="dark" class="on-the-same-line">\n            <span>Martedì 24 Marzo</span>\n            <span class="padded">*</span>\n            <span>18:00 - 19:00</span>\n        </p>\n\n        <button ion-button color="light">\n            Iscrizioni\n        </button>\n        <button ion-button color="light">\n            Attestati\n        </button>\n\n        <div>\n            <ion-item no-padding>\n                <ion-label class="text-grey">Dove</ion-label>\n                <ion-label class="align-right">{{corso.getAddress()}}</ion-label>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-label class="text-grey">Aula</ion-label>\n                <ion-label class="align-right">{{corso.getClassroom()}}A</ion-label>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-label class="text-grey">Docente / Relatore</ion-label>\n                <ion-label class="align-right">{{corso.getTeacher()}}</ion-label>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-label class="text-grey">Durata</ion-label>\n                <ion-label class="align-right">{{corso.getTimeDuration()}}</ion-label>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-label class="text-grey" position="stacked">Descrizione</ion-label>\n            </ion-item>\n            <p class="description">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Etiam vel nisi sodales, venenatis tortor et, molestie nibh.\n                Nullam mi leo, pulvinar sit amet tincidunt placerat, viverra eu tortor.\n            </p>\n            <ion-item no-padding>\n                <ion-label class="text-grey" position="stacked">Condividi</ion-label>\n            </ion-item>\n            <p class="on-the-same-line margin-bottom">\n                <button class="social-btn">\n                    <ion-icon name="logo-facebook"></ion-icon>\n                </button>\n                <button class="social-btn">\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n                <button class="social-btn">\n                    <ion-icon name="logo-linkedin"></ion-icon>\n                </button>\n            </p>\n            <ion-item class="contact-form">\n                <p ion-text color="light">Form Contatti</p>\n                <ion-item no-padding no-lines class="form-element">\n                    <ion-input\n                        type="text"\n                        placeholder="Nome e Cognome"\n                    >\n                    </ion-input>\n                </ion-item>\n                <ion-item no-padding no-lines class="form-element">\n                    <ion-input\n                        type="text"\n                        placeholder="Email"\n                    >\n                    </ion-input>\n                </ion-item>\n                <ion-item no-padding no-lines class="form-element">\n                    <ion-input\n                        type="text"\n                        placeholder="Numero di Telefono"\n                    >\n                    </ion-input>\n                </ion-item>\n                <ion-item no-padding no-lines class="form-element">\n                    <ion-input\n                        type="text"\n                        placeholder="Messaggio"\n                    >\n                    </ion-input>\n                </ion-item>\n\n                <button class="send-btn">Invia</button>\n            </ion-item>\n        </div>\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/pages/dettagliocorso/dettagliocorso.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DettaglioCorso);
    return DettaglioCorso;
}());

//# sourceMappingURL=dettagliocorso.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dettagliostruttura_dettagliostruttura__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_calendar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_maps__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_listacorsi_listacorsi__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dettagliocorso_dettagliocorso__ = __webpack_require__(206);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__["a" /* Convenzioni */],
                __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listacorsi_listacorsi__["a" /* ListaCorsi */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dettagliocorso_dettagliocorso__["a" /* DettaglioCorso */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__["a" /* AboutUs */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dettagliostruttura_dettagliostruttura__["a" /* Dettagliostruttura */],
                __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__["a" /* Convenzioni */],
                __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listacorsi_listacorsi__["a" /* ListaCorsi */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dettagliocorso_dettagliocorso__["a" /* DettaglioCorso */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_maps__["b" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_convenzioni_convenzioni__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_listacorsi_listacorsi__ = __webpack_require__(103);
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
            { title: 'Convenzioni', component: __WEBPACK_IMPORTED_MODULE_7__pages_convenzioni_convenzioni__["a" /* Convenzioni */] },
            { title: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__["a" /* CalendarPage */] },
            { title: 'Lista corsi', component: __WEBPACK_IMPORTED_MODULE_9__pages_listacorsi_listacorsi__["a" /* ListaCorsi */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/larix/Documents/work/luna/new-app-leo/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/larix/Documents/work/luna/new-app-leo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__struttura__ = __webpack_require__(202);
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__struttura__ = __webpack_require__(202);
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

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Corso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customevent__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(205);
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


var Corso = /** @class */ (function (_super) {
    __extends(Corso, _super);
    function Corso(title, startDateTime, endDateTime, description, color, address, teacher, classroom) {
        var _this = _super.call(this, title, startDateTime, endDateTime, description) || this;
        _this.color = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].black;
        _this.address = null;
        _this.teacher = null;
        _this.classroom = null;
        _this.color = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */][color];
        _this.address = address;
        _this.classroom = classroom;
        _this.teacher = teacher;
        return _this;
    }
    Corso.prototype.getAddress = function () { return this.address; };
    Corso.prototype.getClassroom = function () { return this.classroom; };
    Corso.prototype.getColor = function () {
        return __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */][this.color];
    };
    Corso.prototype.getTeacher = function () { return this.teacher; };
    return Corso;
}(__WEBPACK_IMPORTED_MODULE_0__customevent__["a" /* CustomEvent */]));

//# sourceMappingURL=corso.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEvent; });
var CustomEvent = /** @class */ (function () {
    /*
    preconditions:
        - startDateTime, endDateTime is an ISO string
        - duration is in seconds
    */
    function CustomEvent(title, startDateTime, endDateTime, description) {
        /*
        -> startDateTime/endDateTime
        ->
        */
        this.title = null;
        this.startDateTime = null;
        this.endDateTime = null;
        this.description = null;
        this.duration = -1;
        this.title = title;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.description = description;
        this.duration = this.formatEventDuration(startDateTime, endDateTime);
    }
    CustomEvent.prototype.getTitle = function () { return this.title; };
    CustomEvent.prototype.getDescription = function () { return this.description; };
    CustomEvent.prototype.getISOStartDate = function () { return this.startDateTime; };
    CustomEvent.prototype.getStartingDate = function () {
        var start = new Date(this.startDateTime);
        var day = start.getDate();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var month = monthNames[start.getMonth()];
        return day + month;
    };
    CustomEvent.prototype.getEndingDate = function () {
        var end = new Date(this.startDateTime);
        var day = end.getDate();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var month = monthNames[end.getMonth()];
        return day + month;
    };
    CustomEvent.prototype.getTimeDuration = function () {
        return this.duration / 60 + " minuti";
    };
    CustomEvent.prototype.getDaysDuration = function () {
        return this.duration / 86400 + " giorni";
    };
    CustomEvent.prototype.formatEventDuration = function (startDT, endDT) {
        var start = new Date(startDT);
        var end = new Date(endDT);
        var difference = end.getTime() - start.getTime();
        return Math.abs(difference / 1000);
    };
    return CustomEvent;
}());

//# sourceMappingURL=customevent.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[207]);
//# sourceMappingURL=main.js.map
webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Convenzioni; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_hotel__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_restaurant__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dettagliostruttura_dettagliostruttura__ = __webpack_require__(329);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Convenzioni);
    return Convenzioni;
}());

//# sourceMappingURL=convenzioni.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar_calendar__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_calendarEvent__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams, locale, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locale = locale;
        this.alertCtrl = alertCtrl;
        this.collapseCard = true;
        this.event = new __WEBPACK_IMPORTED_MODULE_4__model_calendarEvent__["a" /* CalendarEvent */]();
        this.minDate = __WEBPACK_IMPORTED_MODULE_3_moment__().toISOString();
        this.eventSource = Array();
        this.calendar = {
            allDayLabel: 'Tutto il giorno',
            noEventsLabel: 'Nessun evento',
            mode: 'month',
            currentDate: __WEBPACK_IMPORTED_MODULE_3_moment__().toDate(),
            currentSection: __WEBPACK_IMPORTED_MODULE_3_moment__().format('MMMM'),
            locale: this.locale
        };
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage.prototype.ngOnInit = function () {
        this.resetEvent();
    };
    CalendarPage.prototype.resetEvent = function () {
        this.event = new __WEBPACK_IMPORTED_MODULE_4__model_calendarEvent__["a" /* CalendarEvent */]();
    };
    // Create the right event format and reload source
    CalendarPage.prototype.addEvent = function () {
        var eventCopy = this.event.createEventCopy();
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = __WEBPACK_IMPORTED_MODULE_3_moment__().format();
            eventCopy.endTime = (__WEBPACK_IMPORTED_MODULE_3_moment__().hours() + 1);
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
        this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_3_moment__().toDate();
    };
    // Selected date reange and hence title changed
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    // Calendar event was clicked
    CalendarPage.prototype.onEventSelected = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var start, end, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = __WEBPACK_IMPORTED_MODULE_3_moment__(this.event.startTime).format('HH:mm');
                        end = __WEBPACK_IMPORTED_MODULE_3_moment__(this.event.endTime).format('HH:mm');
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: event.title,
                                subTitle: event.desc,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Time slot was clicked
    CalendarPage.prototype.onTimeSelected = function (ev) {
        var selected = __WEBPACK_IMPORTED_MODULE_3_moment__();
        console.log(selected);
        this.event.startTime = selected.format();
        selected.hours(selected.hours() + 1);
        this.event.endTime = (selected.format());
    };
    CalendarPage.prototype.loadEvents = function () {
        this.myCal.loadEvents();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic2_calendar_calendar__["a" /* CalendarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar_calendar__["a" /* CalendarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar_calendar__["a" /* CalendarComponent */]) === "function" && _a || Object)
    ], CalendarPage.prototype, "myCal", void 0);
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{viewTitle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- Card for adding a new event -->\n  <ion-card>\n    <ion-card-header tappable (click)="collapseCard = !collapseCard">\n      <ion-card-title>New Event</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf="!collapseCard">\n\n      <ion-item>\n        <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Description" [(ngModel)]="event.desc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Start</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>End</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>All Day?</ion-label>\n        <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n      </ion-item>\n      <button ion-button fill="outline" expand="block" (click)="addEvent()" [disabled]="event.title == \'\'">Add Event</button>\n\n    </ion-card-content>\n  </ion-card>\n  <!--<ion-row>-->\n    <!--&lt;!&ndash; Change the displayed calendar mode &ndash;&gt;-->\n    <!--<ion-col size="4">-->\n      <!--<button ion-button expand="block" [color]="calendar.mode == \'month\' ? \'primary\' : \'secondary\'" (click)="changeMode(\'month\')">Mesi</button>-->\n    <!--</ion-col>-->\n    <!--<ion-col size="4">-->\n      <!--<button ion-button expand="block" [color]="calendar.mode == \'week\' ? \'primary\' : \'secondary\'" (click)="changeMode(\'week\')">Settimane</button>-->\n    <!--</ion-col>-->\n    <!--<ion-col size="4">-->\n      <!--<button ion-button expand="block" [color]="calendar.mode == \'day\' ? \'primary\' : \'secondary\'" (click)="changeMode(\'day\')">Giorni</button>-->\n    <!--</ion-col>-->\n  <!--</ion-row>-->\n    <ion-row>\n        <!-- Move back one screen of the slides -->\n        <ion-col size="6" text-left>\n            <button ion-button fill="clear" (click)="back()">\n                <ion-icon name="arrow-back" slot="icon-only"></ion-icon>\n            </button>\n        </ion-col>\n        <!-- Move forward one screen of the slides -->\n        <ion-col size="6" text-right>\n            <button ion-button fill="clear" (click)="next()">\n                <ion-icon name="arrow-forward" slot="icon-only"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n  <calendar [eventSource]="eventSource"\n            [allDayLabel]="calendar.allDayLabel"\n            [noEventsLabel]="calendar.noEventsLabel"\n            [calendarMode]="calendar.mode"\n            [currentDate]="calendar.currentDate"\n            (onTitleChanged)="onViewTitleChanged($event)"\n            (onTimeSelected)="onTimeSelected($event)"\n            (onEventSelected)="onEventSelected($event)"\n            [step]="30">\n\n  </calendar>\n</ion-content>\n'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/pages/calendar/calendar.html"*/,
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* LOCALE_ID */])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, String, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], CalendarPage);
    return CalendarPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		422,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutUs);
    return AboutUs;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 328:
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dettagliostruttura; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convenzioni_convenzioni__ = __webpack_require__(102);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Dettagliostruttura);
    return Dettagliostruttura;
}());

//# sourceMappingURL=dettagliostruttura.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dettagliostruttura_dettagliostruttura__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_calendar__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_locales_it__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















Object(__WEBPACK_IMPORTED_MODULE_13__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_14__angular_common_locales_it__["a" /* default */]);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_aboutus_aboutus__["a" /* AboutUs */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dettagliostruttura_dettagliostruttura__["a" /* Dettagliostruttura */],
                __WEBPACK_IMPORTED_MODULE_8__pages_convenzioni_convenzioni__["a" /* Convenzioni */],
                __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'it-IT' }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 155,
	"./af.js": 155,
	"./ar": 156,
	"./ar-dz": 157,
	"./ar-dz.js": 157,
	"./ar-kw": 158,
	"./ar-kw.js": 158,
	"./ar-ly": 159,
	"./ar-ly.js": 159,
	"./ar-ma": 160,
	"./ar-ma.js": 160,
	"./ar-sa": 161,
	"./ar-sa.js": 161,
	"./ar-tn": 162,
	"./ar-tn.js": 162,
	"./ar.js": 156,
	"./az": 163,
	"./az.js": 163,
	"./be": 164,
	"./be.js": 164,
	"./bg": 165,
	"./bg.js": 165,
	"./bm": 166,
	"./bm.js": 166,
	"./bn": 167,
	"./bn.js": 167,
	"./bo": 168,
	"./bo.js": 168,
	"./br": 169,
	"./br.js": 169,
	"./bs": 170,
	"./bs.js": 170,
	"./ca": 171,
	"./ca.js": 171,
	"./cs": 172,
	"./cs.js": 172,
	"./cv": 173,
	"./cv.js": 173,
	"./cy": 174,
	"./cy.js": 174,
	"./da": 175,
	"./da.js": 175,
	"./de": 176,
	"./de-at": 177,
	"./de-at.js": 177,
	"./de-ch": 178,
	"./de-ch.js": 178,
	"./de.js": 176,
	"./dv": 179,
	"./dv.js": 179,
	"./el": 180,
	"./el.js": 180,
	"./en-SG": 181,
	"./en-SG.js": 181,
	"./en-au": 182,
	"./en-au.js": 182,
	"./en-ca": 183,
	"./en-ca.js": 183,
	"./en-gb": 184,
	"./en-gb.js": 184,
	"./en-ie": 185,
	"./en-ie.js": 185,
	"./en-il": 186,
	"./en-il.js": 186,
	"./en-nz": 187,
	"./en-nz.js": 187,
	"./eo": 188,
	"./eo.js": 188,
	"./es": 189,
	"./es-do": 190,
	"./es-do.js": 190,
	"./es-us": 191,
	"./es-us.js": 191,
	"./es.js": 189,
	"./et": 192,
	"./et.js": 192,
	"./eu": 193,
	"./eu.js": 193,
	"./fa": 194,
	"./fa.js": 194,
	"./fi": 195,
	"./fi.js": 195,
	"./fo": 196,
	"./fo.js": 196,
	"./fr": 197,
	"./fr-ca": 198,
	"./fr-ca.js": 198,
	"./fr-ch": 199,
	"./fr-ch.js": 199,
	"./fr.js": 197,
	"./fy": 200,
	"./fy.js": 200,
	"./ga": 201,
	"./ga.js": 201,
	"./gd": 202,
	"./gd.js": 202,
	"./gl": 203,
	"./gl.js": 203,
	"./gom-latn": 204,
	"./gom-latn.js": 204,
	"./gu": 205,
	"./gu.js": 205,
	"./he": 206,
	"./he.js": 206,
	"./hi": 207,
	"./hi.js": 207,
	"./hr": 208,
	"./hr.js": 208,
	"./hu": 209,
	"./hu.js": 209,
	"./hy-am": 210,
	"./hy-am.js": 210,
	"./id": 211,
	"./id.js": 211,
	"./is": 212,
	"./is.js": 212,
	"./it": 213,
	"./it-ch": 214,
	"./it-ch.js": 214,
	"./it.js": 213,
	"./ja": 215,
	"./ja.js": 215,
	"./jv": 216,
	"./jv.js": 216,
	"./ka": 217,
	"./ka.js": 217,
	"./kk": 218,
	"./kk.js": 218,
	"./km": 219,
	"./km.js": 219,
	"./kn": 220,
	"./kn.js": 220,
	"./ko": 221,
	"./ko.js": 221,
	"./ku": 222,
	"./ku.js": 222,
	"./ky": 223,
	"./ky.js": 223,
	"./lb": 224,
	"./lb.js": 224,
	"./lo": 225,
	"./lo.js": 225,
	"./lt": 226,
	"./lt.js": 226,
	"./lv": 227,
	"./lv.js": 227,
	"./me": 228,
	"./me.js": 228,
	"./mi": 229,
	"./mi.js": 229,
	"./mk": 230,
	"./mk.js": 230,
	"./ml": 231,
	"./ml.js": 231,
	"./mn": 232,
	"./mn.js": 232,
	"./mr": 233,
	"./mr.js": 233,
	"./ms": 234,
	"./ms-my": 235,
	"./ms-my.js": 235,
	"./ms.js": 234,
	"./mt": 236,
	"./mt.js": 236,
	"./my": 237,
	"./my.js": 237,
	"./nb": 238,
	"./nb.js": 238,
	"./ne": 239,
	"./ne.js": 239,
	"./nl": 240,
	"./nl-be": 241,
	"./nl-be.js": 241,
	"./nl.js": 240,
	"./nn": 242,
	"./nn.js": 242,
	"./pa-in": 243,
	"./pa-in.js": 243,
	"./pl": 244,
	"./pl.js": 244,
	"./pt": 245,
	"./pt-br": 246,
	"./pt-br.js": 246,
	"./pt.js": 245,
	"./ro": 247,
	"./ro.js": 247,
	"./ru": 248,
	"./ru.js": 248,
	"./sd": 249,
	"./sd.js": 249,
	"./se": 250,
	"./se.js": 250,
	"./si": 251,
	"./si.js": 251,
	"./sk": 252,
	"./sk.js": 252,
	"./sl": 253,
	"./sl.js": 253,
	"./sq": 254,
	"./sq.js": 254,
	"./sr": 255,
	"./sr-cyrl": 256,
	"./sr-cyrl.js": 256,
	"./sr.js": 255,
	"./ss": 257,
	"./ss.js": 257,
	"./sv": 258,
	"./sv.js": 258,
	"./sw": 259,
	"./sw.js": 259,
	"./ta": 260,
	"./ta.js": 260,
	"./te": 261,
	"./te.js": 261,
	"./tet": 262,
	"./tet.js": 262,
	"./tg": 263,
	"./tg.js": 263,
	"./th": 264,
	"./th.js": 264,
	"./tl-ph": 265,
	"./tl-ph.js": 265,
	"./tlh": 266,
	"./tlh.js": 266,
	"./tr": 267,
	"./tr.js": 267,
	"./tzl": 268,
	"./tzl.js": 268,
	"./tzm": 269,
	"./tzm-latn": 270,
	"./tzm-latn.js": 270,
	"./tzm.js": 269,
	"./ug-cn": 271,
	"./ug-cn.js": 271,
	"./uk": 272,
	"./uk.js": 272,
	"./ur": 273,
	"./ur.js": 273,
	"./uz": 274,
	"./uz-latn": 275,
	"./uz-latn.js": 275,
	"./uz.js": 274,
	"./vi": 276,
	"./vi.js": 276,
	"./x-pseudo": 277,
	"./x-pseudo.js": 277,
	"./yo": 278,
	"./yo.js": 278,
	"./zh-cn": 279,
	"./zh-cn.js": 279,
	"./zh-hk": 280,
	"./zh-hk.js": 280,
	"./zh-tw": 281,
	"./zh-tw.js": 281
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 380;

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var CalendarEvent = /** @class */ (function () {
    function CalendarEvent(title, descr, startDate, endDate, allDay, startTime, endTime) {
        if (title === void 0) { title = ''; }
        if (descr === void 0) { descr = ''; }
        if (startDate === void 0) { startDate = __WEBPACK_IMPORTED_MODULE_0_moment__().format(); }
        if (endDate === void 0) { endDate = __WEBPACK_IMPORTED_MODULE_0_moment__().format(); }
        if (allDay === void 0) { allDay = false; }
        if (startTime === void 0) { startTime = __WEBPACK_IMPORTED_MODULE_0_moment__().format(); }
        if (endTime === void 0) { endTime = __WEBPACK_IMPORTED_MODULE_0_moment__().format(); }
        this.createEventCopy = function () {
            return Object.create(this);
        };
        this._title = title;
        this._descr = descr;
        this._startDate = startDate;
        this._endDate = endDate;
        this._allDay = allDay;
        this._startTime = startTime;
        this._endTime = endTime;
    }
    Object.defineProperty(CalendarEvent.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "descr", {
        get: function () {
            return this._descr;
        },
        set: function (value) {
            this._descr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "allDay", {
        get: function () {
            return this._allDay;
        },
        set: function (value) {
            this._allDay = value;
        },
        enumerable: true,
        configurable: true
    });
    return CalendarEvent;
}());

//# sourceMappingURL=calendarEvent.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_convenzioni_convenzioni__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__["a" /* CalendarPage */];
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_9_moment__["locale"]('it');
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Chi siamo', component: __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__["a" /* AboutUs */] },
            { title: 'Convenzioni', component: __WEBPACK_IMPORTED_MODULE_7__pages_convenzioni_convenzioni__["a" /* Convenzioni */] },
            { title: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__["a" /* CalendarPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/stefanofiora/AppLeo/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/stefanofiora/AppLeo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__struttura__ = __webpack_require__(328);
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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__struttura__ = __webpack_require__(328);
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

/***/ 415:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[330]);
//# sourceMappingURL=main.js.map
webpackJsonp([10],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/baidumap/baidumap.module": [
		272,
		9
	],
	"../pages/bookstore/bookstore.module": [
		273,
		8
	],
	"../pages/calls/calls.module": [
		274,
		0
	],
	"../pages/film-detail/film-detail.module": [
		276,
		7
	],
	"../pages/film/film.module": [
		275,
		6
	],
	"../pages/gaodemap/gaodemap.module": [
		277,
		5
	],
	"../pages/googlemap/googlemap.module": [
		278,
		4
	],
	"../pages/maps/maps.module": [
		279,
		3
	],
	"../pages/stars/stars.module": [
		280,
		2
	],
	"../pages/tabs/tabs.module": [
		281,
		1
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http) {
        this.http = http;
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.getFilms = function () {
        return this.http.get('http://swapi.co/api/films').map(function (res) { return res.json(); });
    };
    return ApiProvider;
}());
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var STORAGE_KEY = 'favoriteFilms';
var FavoriteProvider = (function () {
    function FavoriteProvider(storage) {
        this.storage = storage;
    }
    FavoriteProvider.prototype.isFavorite = function (filmId) {
        return this.getAllFavoriteFilms().then(function (result) {
            return result && result.indexOf(filmId) !== -1;
        });
    };
    FavoriteProvider.prototype.favoriteFilm = function (filmId) {
        var _this = this;
        return this.getAllFavoriteFilms().then(function (result) {
            if (result) {
                result.push(filmId);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [filmId]);
            }
        });
    };
    FavoriteProvider.prototype.unfavoriteFilm = function (filmId) {
        var _this = this;
        return this.getAllFavoriteFilms().then(function (result) {
            if (result) {
                var index = result.indexOf(filmId);
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    FavoriteProvider.prototype.getAllFavoriteFilms = function () {
        return this.storage.get(STORAGE_KEY);
    };
    return FavoriteProvider;
}());
FavoriteProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], FavoriteProvider);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_deeplinks__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_header_color__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { DeeplinksProvider } from '../providers/deeplinks/deeplinks';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/baidumap/baidumap.module#BaiduMapPageModule', name: 'BaiduMapPage', segment: 'baidumap', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bookstore/bookstore.module#BookstorePageModule', name: 'BookstorePage', segment: 'bookstore', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calls/calls.module#CallsPageModule', name: 'CallsPage', segment: 'calls', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/film/film.module#FilmPageModule', name: 'FilmPage', segment: 'film', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/film-detail/film-detail.module#FilmDetailPageModule', name: 'FilmDetailPage', segment: 'film-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gaodemap/gaodemap.module#GaodeMapPageModule', name: 'GaodeMapPage', segment: 'gaodemap', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/googlemap/googlemap.module#GoogleMapPageModule', name: 'GoogleMapPage', segment: 'googlemap', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stars/stars.module#StarsPageModule', name: 'StarsPage', segment: 'stars', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_header_color__["a" /* HeaderColor */]
            // DeeplinksProvider
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_deeplinks__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //   platform.ready().then(() => {
    //     // Okay, so the platform is ready and our plugins are available.
    //     // Here you can do any higher level native things you might need.
    //     statusBar.styleDefault();
    //     splashScreen.hide();
    //   });
    // }
    function MyApp(_platform, statusBar, deeplinks, headerColor) {
        this._platform = _platform;
        this.deeplinks = deeplinks;
        this.headerColor = headerColor;
        this.rootPage = 'TabsPage';
        this._platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
        });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._platform.ready().then(function () {
            /*
            IonicDeeplink.route({
              '/about-us': AboutPage,
              '/universal-links-test': AboutPage,
              '/products/:productId': ProductPage
            }, function(match) {
              // Handle the route manually
            }, function(nomatch) {
              // No match
            })
            */
            // Convenience to route with a given nav
            _this.deeplinks.routeWithNavController(_this.navChild, {
                '/hello': 'MapsPage',
                '/call': 'CallsPage',
                '/star': 'StarsPage'
            }).subscribe(function (match) {
                console.log('Successfully routed', match);
            }, function (nomatch) {
                console.warn('Unmatched Route', nomatch);
            });
        });
        this.headerColor.tint('#becb29');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "navChild", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Ionic-GoogleMap\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Ionic-GoogleMap\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_deeplinks__["a" /* Deeplinks */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__["a" /* HeaderColor */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
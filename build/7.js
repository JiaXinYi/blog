webpackJsonp([7],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailPageModule", function() { return FilmDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__film_detail__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilmDetailPageModule = (function () {
    function FilmDetailPageModule() {
    }
    return FilmDetailPageModule;
}());
FilmDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__film_detail__["a" /* FilmDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__film_detail__["a" /* FilmDetailPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__film_detail__["a" /* FilmDetailPage */]]
    })
], FilmDetailPageModule);

//# sourceMappingURL=film-detail.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(198);
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
 * Generated class for the FilmDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FilmDetailPage = (function () {
    function FilmDetailPage(navCtrl, navParams, emailComposer, favoriteProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.favoriteProvider = favoriteProvider;
        this.isFavorite = false;
        this.film = this.navParams.get('film');
        this.favoriteProvider.isFavorite(this.film.episode_id).then(function (isFav) {
            _this.isFavorite = isFav;
        });
    }
    FilmDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilmDetailPage');
    };
    FilmDetailPage.prototype.favoriteFilm = function () {
        var _this = this;
        this.favoriteProvider.favoriteFilm(this.film.episode_id).then(function () {
            _this.isFavorite = true;
        });
    };
    FilmDetailPage.prototype.unfavoriteFilm = function () {
        var _this = this;
        this.favoriteProvider.unfavoriteFilm(this.film.episode_id).then(function () {
            _this.isFavorite = false;
        });
    };
    FilmDetailPage.prototype.shareFilm = function () {
        var email = {
            to: '924463684@qq.com',
            subject: 'I love this one: ' + this.film.title,
            body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    return FilmDetailPage;
}());
FilmDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-film-detail',template:/*ion-inline-start:"D:\Ionic-GoogleMap\src\pages\film-detail\film-detail.html"*/'<!--\n  Generated template for the FilmDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>"{{film.title}}"</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="unfavoriteFilm()" *ngIf="isFavorite"><ion-icon name="star" color="danger"></ion-icon></button>\n        <button ion-button icon-only (click)="favoriteFilm()" *ngIf="!isFavorite"><ion-icon name="star-outline"></ion-icon></button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-card-header>\n      <ion-icon name="share" item-left (click)="shareFilm()"></ion-icon>\n  </ion-card-header>\n  <ion-card-content>\n    {{film.opening_crawl}}\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic-GoogleMap\src\pages\film-detail\film-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */],
        __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__["a" /* FavoriteProvider */]])
], FilmDetailPage);

//# sourceMappingURL=film-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
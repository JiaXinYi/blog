webpackJsonp([8],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartPageModule = (function () {
    function StartPageModule() {
    }
    StartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */]]
        })
    ], StartPageModule);
    return StartPageModule;
}());

//# sourceMappingURL=start.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_setting_setting__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(146);
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
 * Generated class for the StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StartPage = (function () {
    function StartPage(navCtrl, navParams, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.goNetEase = function () {
        this.navCtrl.push('TabsPage');
    };
    StartPage.prototype.goVideo = function () {
        this.navCtrl.push('VideoPage');
    };
    StartPage.prototype.goMap = function () {
        this.navCtrl.push('MapPage');
    };
    StartPage.prototype.goTalk = function () {
        this.navCtrl.push('ContactConsultPage');
    };
    StartPage.prototype.goIconFont = function () {
        this.navCtrl.push('IconfontPage');
    };
    StartPage.prototype.changeTheme = function () {
        if (this.selectedTheme === 'dark-theme') {
            //改变
            this.settings.setActiveTheme('light-theme');
        }
        else {
            this.settings.setActiveTheme('dark-theme');
        }
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"F:\ionic\and\src\pages\start\start.html"*/'<!--\n\n  Generated template for the StartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>目录</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button full (click)="goNetEase()">网易云课堂</button>\n\n  <button ion-button full (click)="goVideo()">视频背景</button>\n\n  <button ion-button full (click)="goMap()">地图</button>\n\n  <button ion-button full (click)="goTalk()">图灵聊天机器人</button>\n\n  <button ion-button full (click)="goIconFont()">Iconfont</button>\n\n  <button ion-button full icon-left (click)="changeTheme()">\n\n    <ion-icon name="heart" color="danger"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic\and\src\pages\start\start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_setting_setting__["a" /* SettingProvider */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
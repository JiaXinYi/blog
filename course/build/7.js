webpackJsonp([7],{

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(686);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
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
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.showLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\ionic\and\src\pages\tabs\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>about</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content>\n\n  <div class="background">\n\n    <!-- <img src="assets/img/bg.jpg" alt="背景图"> -->\n\n    <span>我</span>\n\n    <ion-icon name="ios-settings-outline" color="light" class="iconSetting"></ion-icon>\n\n    <div (click)="showLogin()">\n\n      <img src="assets/img/bg.jpg" alt="头像" class="imgRadius">\n\n      <span>登录，做个学霸~ </span>\n\n    </div>\n\n    <ion-icon name="ios-ribbon" color="light" class="iconPrize"></ion-icon>\n\n  </div>\n\n  <div class="myGrid">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <ion-icon name="md-archive" color="beauty1"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <ion-icon name="heart" color="beauty4"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <ion-icon name="md-pie" color="beauty2"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <ion-icon name="notifications" color="energized"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <span>缓存</span></ion-col>\n\n        <ion-col col-3>\n\n          <span>收藏</span></ion-col>\n\n        <ion-col col-3>\n\n          <span>历史</span></ion-col>\n\n        <ion-col col-3>\n\n          <span>提醒</span></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div class="myList">\n\n    <ion-list>\n\n      <!-- <ion-item >单个列表\n\n      <ion-icon name="ios-arrow-forward"  item-right></ion-icon>\n\n  </ion-item> -->\n\n      <button ion-item>我关注的全部订阅号\n\n        <ion-icon name="ios-arrow-forward" color="beauty5" item-end></ion-icon>\n\n      </button>\n\n      <button ion-item>我的一万分钟\n\n        <ion-icon name="ios-clock-outline" color="chrome5" padding-left></ion-icon>\n\n        <ion-icon name="ios-arrow-forward" color="beauty5" item-end></ion-icon></button>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item>动态<button ion-button item-end color="secondary">发表</button> </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic\and\src\pages\tabs\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
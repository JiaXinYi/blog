webpackJsonp([10],{

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconfontPageModule", function() { return IconfontPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iconfont__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IconfontPageModule = (function () {
    function IconfontPageModule() {
    }
    IconfontPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__iconfont__["a" /* IconfontPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__iconfont__["a" /* IconfontPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__iconfont__["a" /* IconfontPage */]]
        })
    ], IconfontPageModule);
    return IconfontPageModule;
}());

//# sourceMappingURL=iconfont.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconfontPage; });
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
 * Generated class for the IconfontPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IconfontPage = (function () {
    function IconfontPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IconfontPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IconfontPage');
    };
    IconfontPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iconfont',template:/*ion-inline-start:"F:\ionic\and\src\pages\iconfont\iconfont.html"*/'<!--\n\n  Generated template for the IconfontPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Iconfont</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>在线引用三种方式</h2>\n\n  <h3>1.unicode</h3>\n\n  <ion-icon class="iconfont" color="secondary">&#xe60b;</ion-icon>\n\n  <ion-icon class="iconfont" color="secondary">&#xe610;</ion-icon>\n\n  <ion-icon class="iconfont" color="secondary">&#xe60e;</ion-icon>\n\n  <ion-icon class="iconfont" color="secondary">&#xe605;</ion-icon>\n\n  <h3>2.font-class</h3>\n\n  <ion-icon class="iconfont icon-shuyeu" color="secondary"></ion-icon>\n\n  <ion-icon class="iconfont icon-shuyet" color="secondary"></ion-icon>\n\n  <ion-icon class="iconfont icon-shuyei" color="secondary"></ion-icon>\n\n  <ion-icon class="iconfont icon-shuyeb" color="secondary"></ion-icon>\n\n  <h3>3.symbol</h3>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyem"></use>\n\n  </svg>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyeR"></use>\n\n  </svg>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyeu"></use>\n\n  </svg>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyeb"></use>\n\n  </svg>\n\n  <h2>离线的三种方式</h2>\n\n  <h3>1.unicode</h3>\n\n  <ion-icon class="iconfont" color="secondary">&#xe60b;</ion-icon>\n\n  <ion-icon class="iconfont" color="secondary">&#xe610;</ion-icon>\n\n  <ion-icon class="iconfont" color="secondary">&#xe60e;</ion-icon>\n\n  <ion-icon class="iconfont" color="secondary">&#xe605;</ion-icon>\n\n  <h3>2.font-class</h3>\n\n  <ion-icon class="iconfont icon-shuyeu" color="secondary"></ion-icon>\n\n  <ion-icon class="iconfont icon-shuyet" color="secondary"></ion-icon>\n\n  <ion-icon class="iconfont icon-shuyei" color="secondary"></ion-icon>\n\n  <ion-icon class="iconfont icon-shuyeb" color="secondary"></ion-icon>\n\n  <h3>3.symbol</h3>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyem"></use>\n\n  </svg>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyeR"></use>\n\n  </svg>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyeu"></use>\n\n  </svg>\n\n  <svg class="icon" aria-hidden="true">\n\n    <use xlink:href="#icon-shuyeb"></use>\n\n  </svg>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic\and\src\pages\iconfont\iconfont.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IconfontPage);
    return IconfontPage;
}());

//# sourceMappingURL=iconfont.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
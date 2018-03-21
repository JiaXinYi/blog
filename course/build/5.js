webpackJsonp([5],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/bg.jpg',
                songs: 2,
                private: false
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/slide1.jpeg',
                songs: 4,
                private: false
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/bg.jpg',
                songs: 5,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/slide2.jpeg',
                songs: 12,
                private: true
            }
        ];
        // 获取当前主题
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.showSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    HomePage.prototype.openMap = function () {
        this.navCtrl.push('MapPage');
    };
    HomePage.prototype.onSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        // console.log(currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic\and\src\pages\tabs\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>home</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n\n\n  <div class="search-div">\n\n    <ion-item no-lines>\n\n      <ion-searchbar class="search-bar" placeholder="自我恢复能力" no-padding (ionFocus)="showSearch()">\n\n      </ion-searchbar>\n\n      <ion-icon name="ios-alarm-outline" class="icon-right" item-end (click)="show()"></ion-icon>\n\n      <ion-icon name="ios-download-outline" class="icon-right" item-end (click)="show()"></ion-icon>\n\n    </ion-item>\n\n  </div>\n\n  <div class="slide-img">\n\n    <ion-slides #slider pager autoplay="2000" loop="true" (ionSlideDidChange)="onSlideChanged()" dir="ltr">\n\n      <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background\':\'url(\' +slide.imageUrl+\')\'}">\n\n        <h2>{{slide.title}}</h2>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <div class="classify">\n\n    <div class="myGrid">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <ion-icon name="md-archive" color="beauty1"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <ion-icon name="heart" color="beauty4"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <ion-icon name="md-pie" color="beauty2"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <ion-icon name="notifications" color="energized"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <span>最热</span></ion-col>\n\n          <ion-col col-3>\n\n            <span>最新</span></ion-col>\n\n          <ion-col col-3>\n\n            <span>直播</span></ion-col>\n\n          <ion-col col-3>\n\n            <span>分类</span></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n  <hr no-margin>\n\n  <div class="parts-sift">\n\n    <div class="sift-title">\n\n      <h4 text-center no-margin>编辑&nbsp;·&nbsp;精选</h4>\n\n      <hr class="short-hr" no-padding>\n\n    </div>\n\n    <ion-grid no-margin>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div class="parts-sift">\n\n      <div class="sift-title">\n\n          <h4 text-center no-margin>为你&nbsp;·&nbsp;推荐</h4>\n\n          <hr class="short-hr" no-padding>\n\n        </div>\n\n    <ion-grid no-margin>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="sift-col">\n\n            <img src="assets/img/slide1.jpeg" alt="tu">\n\n            <span class="sift-label">视频</span>\n\n            <div class="sift-words">\n\n              <p>[经典名著选读]：俳句的颠覆</p>\n\n              <span>53463人观看</span>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic\and\src\pages\tabs\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
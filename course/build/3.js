webpackJsonp([3],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderPage = (function () {
    function OrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isClose = false;
        this.score = {
            star: 0,
            starMap: [
                '不满意',
                '还行',
                '一般',
                '满意',
                '很满意',
            ]
        };
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
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.chooseStar = function (e) {
        var star = parseInt(e.target.dataset.index);
        this.score.star = star;
        // console.log(e.target.dataset.index);
        // console.log(this.score.star);
        // console.log(star);
    };
    OrderPage.prototype.closeScore = function () {
        this.isClose = true;
    };
    OrderPage.prototype.showSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    OrderPage.prototype.openMap = function () {
        this.navCtrl.push('MapPage');
    };
    OrderPage.prototype.onSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        console.log(currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], OrderPage.prototype, "slider", void 0);
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"F:\ionic\and\src\pages\tabs\order\order.html"*/'<ion-content>\n\n\n\n  <!-- <div class="star-bg" *ngIf="!isClose">\n\n    <button class="star-btn" ion-button clear (click)="closeScore()" color="light"><ion-icon name="close"></ion-icon></button>\n\n    <div class="star-words">\n\n      <span>请为我们评分</span>\n\n    </div>\n\n    <div class="star-div" >\n\n      <div *ngFor="let scoreMap of score.starMap; let indx = index" (click)="chooseStar($event)">\n\n        <ion-icon name="star" color="chrome3" *ngIf="score.star>=indx+1;" style="padding-right: .5em" [attr.data-index]="indx+1"></ion-icon>\n\n        <ion-icon name="star-outline" color="light" *ngIf="score.star<indx+1;" style="padding-right: .5em" [attr.data-index]="indx+1"></ion-icon>\n\n      </div>\n\n    </div>\n\n  </div> -->\n\n  <div class="main-content">\n\n    <div class="search-div">\n\n      <ion-item no-lines>\n\n        <ion-searchbar class="search-bar" placeholder="英语文学" no-padding (ionFocus)="showSearch()">\n\n        </ion-searchbar>\n\n        <ion-icon name="ios-alarm-outline" class="icon-right" item-end (click)="show()"></ion-icon>\n\n        <ion-icon name="ios-download-outline" class="icon-right" item-end (click)="show()"></ion-icon>\n\n      </ion-item>\n\n    </div>\n\n    <div class="slide-img">\n\n      <ion-slides #slider pager autoplay="2000" loop="true" (ionSlideDidChange)="onSlideChanged()" dir="ltr">\n\n        <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background\':\'url(\' +slide.imageUrl+\')\'}">\n\n          <h2>{{slide.title}}</h2>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <div class="classify">\n\n      <div class="myGrid">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-icon name="md-archive" color="beauty1"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <ion-icon name="heart" color="beauty4"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <ion-icon name="md-pie" color="beauty2"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <span>视频分类</span></ion-col>\n\n            <ion-col col-4>\n\n              <span>添加订阅</span></ion-col>\n\n            <ion-col col-4>\n\n              <span>我的订阅</span></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n    <hr no-margin>\n\n    <div class="parts-order">\n\n      <div class="order-title">\n\n        <h4 text-center no-margin>我的订阅</h4>\n\n        <hr class="short-hr" no-padding>\n\n      </div>\n\n      <div class="order-cards">\n\n        <ion-item no-lines>\n\n          <ion-avatar float-left padding-right>\n\n            <img src="assets/img/slide1.jpeg" alt="TED">\n\n          </ion-avatar>\n\n          <h2>每日TED优选</h2>\n\n          <p>2017/01/05</p>\n\n          <button ion-button color="secondary" item-end>订阅</button>\n\n        </ion-item>\n\n        <div class="img-div">\n\n          <img src="assets/img/slide1.jpeg" alt="" class="order-img">\n\n          <div class="img-words" padding>\n\n            <h5>如何掌控你们自己的时间</h5>\n\n            <p>经常听见有人抱怨自己很忙，没时间做这个，没时间做哪个。情况真实是这样的吗？</p>\n\n          </div>\n\n        </div>\n\n        <div class="span-div">\n\n          <span float-left>11`55``&nbsp;|&nbsp;4387万人观看</span>\n\n          <span float-right>#视频</span>\n\n        </div>\n\n\n\n      </div>\n\n      <div class="order-cards">\n\n        <ion-item no-lines>\n\n          <ion-avatar float-left padding-right>\n\n            <img src="assets/img/slide1.jpeg" alt="TED">\n\n          </ion-avatar>\n\n          <h2>每日TED优选</h2>\n\n          <p>2017/01/05</p>\n\n          <button ion-button color="secondary" item-end>订阅</button>\n\n        </ion-item>\n\n        <div class="img-div">\n\n          <img src="assets/img/slide1.jpeg" alt="" class="order-img">\n\n          <div class="img-words">\n\n            <h5>如何掌控你们自己的时间</h5>\n\n            <p>经常听见有人抱怨自己很忙，没时间做这个，没时间做哪个。情况真实是这样的吗？</p>\n\n          </div>\n\n        </div>\n\n        <div class="span-div">\n\n          <span float-left>11`55``&nbsp;|&nbsp;4387万人观看</span>\n\n          <span float-right>#视频</span>\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic\and\src\pages\tabs\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
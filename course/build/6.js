webpackJsonp([6],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPageModule", function() { return ClassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class__ = __webpack_require__(689);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassPageModule = (function () {
    function ClassPageModule() {
    }
    ClassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__class__["a" /* ClassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__class__["a" /* ClassPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__class__["a" /* ClassPage */]]
        })
    ], ClassPageModule);
    return ClassPageModule;
}());

//# sourceMappingURL=class.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassPage; });
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
 * Generated class for the ClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClassPage = (function () {
    function ClassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.colors = ['rgba(34, 19, 19, 0.33)', '#e0e437', '#37e446', '#375be4', '#972cb1'];
        this.slideindex = 1;
        this.cards = [
            {
                imgsrc: "assets/img/slide2.jpeg",
                span: "马克图文",
                title: "福利 | 王牌特工2华丽回归！",
                content: "不看后悔一整年",
                people: "249"
            },
            {
                imgsrc: "assets/img/slide1.jpeg",
                span: "哔哔",
                title: "人性经得起考验吗？",
                content: "不想看见你丑陋的样子",
                people: "2534"
            },
            {
                imgsrc: "assets/img/slide2.jpeg",
                span: "马克图文",
                title: "重磅！问号君来了！",
                content: "咱们好好说道说道",
                people: "990"
            },
            {
                imgsrc: "assets/img/slide1.jpeg",
                span: "哔哔",
                title: "谁是你生命中最重要的人？",
                content: "都是人生过客，除了你",
                people: "4982"
            }
        ];
        this.color = this.colors[0];
    }
    ClassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassPage');
    };
    ClassPage.prototype.onSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.color = this.colors[currentIndex];
        this.slideindex = currentIndex + 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], ClassPage.prototype, "slider", void 0);
    ClassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class',template:/*ion-inline-start:"F:\ionic\and\src\pages\tabs\class\class.html"*/'\n\n<ion-content [style.background-color]="color">\n\n<ion-slides #slider\n\n            (ionSlideDidChange)="onSlideChanged()">\n\n<ion-slide *ngFor="let item of cards;let indx = index" class="slider">\n\n  <ion-card>\n\n    <img src={{item.imgsrc}} alt="卡片">\n\n    <div class="img-span">{{item.span}}</div>\n\n    <ion-card-header>{{item.title}}</ion-card-header>\n\n    <p>{{item.content}}</p>\n\n    <button ion-button block color="dark" class="slide-btn">立即参与</button>\n\n    <p>已有{{item.people}}人参与</p>\n\n  </ion-card>\n\n</ion-slide>\n\n\n\n</ion-slides>\n\n<span class="slide-page" >{{slideindex}}/40</span>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic\and\src\pages\tabs\class\class.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClassPage);
    return ClassPage;
}());

//# sourceMappingURL=class.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
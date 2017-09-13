webpackJsonp([8],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookstorePageModule", function() { return BookstorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookstore__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookstorePageModule = (function () {
    function BookstorePageModule() {
    }
    return BookstorePageModule;
}());
BookstorePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bookstore__["a" /* BookstorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookstore__["a" /* BookstorePage */]),
        ],
    })
], BookstorePageModule);

//# sourceMappingURL=bookstore.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookstorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookstorePage = (function () {
    function BookstorePage() {
        this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
    }
    BookstorePage.prototype.ionViewDidLoad = function () {
        var map = this.map =
            new BMap.Map(this.map_container3.nativeElement, {
                enableMapClick: false,
            }); //创建地图实例
        map.enableScrollWheelZoom();
        var point = new BMap.Point(113.38028471135, 23.129702256122); //坐标可以通过百度地图坐标拾取器获取
        var marker = new BMap.Marker(point);
        this.map.addOverlay(marker);
        map.centerAndZoom(point, 18); //设置中心和地图显示级别
        var local = new BMap.LocalSearch(map, {
            renderOptions: {
                map: map,
                selectFirstResult: true,
                autoViewport: true
            },
            onMarkersSet: (function (res) {
                res.forEach(function (e, i) {
                    var myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
                    var marker = new BMap.Marker(e.point, myIcon);
                    marker.addEventListener("click", function () {
                        console.log(e.address);
                    });
                });
            })
        });
        var index = 0;
        var adds = [
            "博尔赫斯书店",
            "方所书店",
            "联合书店",
            "唐宁书店",
            "1200bookshop",
            "学而优",
            "小古堂书店",
            "BensHoP书店",
            "以撒书房",
            "禾田书房"
        ];
        // local.search("1200bookshop", { forceLocal: true });
        local.search("1200bookshop", { forceLocal: true });
        var searchArr = local.getResults();
    };
    return BookstorePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], BookstorePage.prototype, "map_container3", void 0);
BookstorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bookstore',template:/*ion-inline-start:"D:\Ionic-GoogleMap\src\pages\bookstore\bookstore.html"*/'<!--\n  Generated template for the BookstorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>bookstore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div #map id="map_container3"></div>\n<div id="book_store">\n  <!-- <button ion-button full (click)="show()">展示</button> -->\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic-GoogleMap\src\pages\bookstore\bookstore.html"*/,
    }),
    __metadata("design:paramtypes", [])
], BookstorePage);

//# sourceMappingURL=bookstore.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
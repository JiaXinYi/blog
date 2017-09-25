webpackJsonp([3],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointSearchPageModule", function() { return PointSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_search__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PointSearchPageModule = (function () {
    function PointSearchPageModule() {
    }
    return PointSearchPageModule;
}());
PointSearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__point_search__["a" /* PointSearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__point_search__["a" /* PointSearchPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__point_search__["a" /* PointSearchPage */]]
    })
], PointSearchPageModule);

//# sourceMappingURL=point-search.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the PointSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PointSearchPage = (function () {
    function PointSearchPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.searchQuery = '';
        this.items = [
            {
                name: '万科花园项目一',
                address: '沈阳市万科花园'
            },
            {
                name: '中海虞城项目二',
                address: '沈阳市中海虞城'
            }
        ];
    }
    PointSearchPage.prototype.ionViewDidEnter = function () {
        this.searchBar.setFocus();
    };
    PointSearchPage.prototype.selectItem = function (item) {
    };
    PointSearchPage.prototype.doSearch = function () {
    };
    PointSearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PointSearchPage.prototype.clearHistory = function () {
        this.items = [];
    };
    return PointSearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchBar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Searchbar */])
], PointSearchPage.prototype, "searchBar", void 0);
PointSearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-point-search',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route\point-search\point-search.html"*/'<!--\n\n  Generated template for the PointSearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>搜索地点</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button (click)="dismiss()">\n\n      <!-- <span>关闭</span> -->\n\n      <ion-icon name="close" class="icon"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="searchDiv">\n\n  <ion-searchbar  placeholder="搜索" \n\n                  #searchBar\n\n                  class="searchBar" \n\n                  animated \n\n                  abounce="500" \n\n                  (ngModel)="searchVal" \n\n                  (ionInput)="getItems($event)">\n\n\n\n  </ion-searchbar>\n\n  <button ion-button  (click)="doSearch()" class="doSearch">确定\n\n    </button>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items" (click)="selectItem(item)">\n\n      {{item.name}}<br/>\n\n      <span class="address">{{item.address}}</span>\n\n    </ion-item>\n\n    <button *ngIf="items.length>0" ion-button full clear (click)="clearHistory()">清除搜索历史</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route\point-search\point-search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], PointSearchPage);

//# sourceMappingURL=point-search.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
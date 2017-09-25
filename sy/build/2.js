webpackJsonp([2],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNearListPageModule", function() { return TaskNearListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_near_list__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskNearListPageModule = (function () {
    function TaskNearListPageModule() {
    }
    return TaskNearListPageModule;
}());
TaskNearListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__task_near_list__["a" /* TaskNearListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task_near_list__["a" /* TaskNearListPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__task_near_list__["a" /* TaskNearListPage */]]
    })
], TaskNearListPageModule);

//# sourceMappingURL=task-near-list.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskNearListPage; });
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
 * Generated class for the TaskNearListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TaskNearListPage = (function () {
    function TaskNearListPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.items = [{
                name: "2017年4G皇姑区联通基站光缆配套工程2",
                type: "专业：基站光缆",
                design: "设计形式：简图",
                person: "设计人员:李江"
            },
            {
                name: "2017年4G皇姑区联通基站光缆配套工程2",
                type: "专业：基站光缆",
                design: "设计形式：简图",
                person: "设计人员:李江"
            },
            {
                name: "2017年4G皇姑区联通基站光缆配套工程2",
                type: "专业：基站光缆",
                design: "设计形式：简图",
                person: "设计人员:李江"
            }];
    }
    TaskNearListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TaskNearListPage.prototype.taskDetail = function () {
        this.navCtrl.push('TaskNearResourcesPage');
    };
    TaskNearListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 3; i++) {
                _this.items.push(_this.items[i]);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    return TaskNearListPage;
}());
TaskNearListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-task-near-list',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\task-near-list\task-near-list.html"*/'\n\n<ion-content no-padding>\n\n  <!-- <div class="dimissBtn"> -->\n\n  <button ion-button full (click)="dismiss()" class="dimissBtn" color="label">收起\n\n      <ion-icon name="ios-arrow-down" class="icon-padding"></ion-icon>\n\n  </button>\n\n  <!-- </div> -->\n\n<ion-list class="nearList">\n\n  <ion-item *ngFor="let item of items" (click)="taskDetail()">\n\n    <h2>{{item.name}}</h2>\n\n    <p>{{item.type}}</p>\n\n    <p>{{item.design}}</p>\n\n    <p>{{item.person}}</p>\n\n  </ion-item>\n\n</ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content>\n\n      loadingSpinner="bubbles"\n\n      loadingText="Loading more data..."\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\task-near-list\task-near-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], TaskNearListPage);

//# sourceMappingURL=task-near-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
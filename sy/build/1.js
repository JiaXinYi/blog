webpackJsonp([1],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNearResourcesPageModule", function() { return TaskNearResourcesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_near_resources__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskNearResourcesPageModule = (function () {
    function TaskNearResourcesPageModule() {
    }
    return TaskNearResourcesPageModule;
}());
TaskNearResourcesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__task_near_resources__["a" /* TaskNearResourcesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task_near_resources__["a" /* TaskNearResourcesPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__task_near_resources__["a" /* TaskNearResourcesPage */]]
    })
], TaskNearResourcesPageModule);

//# sourceMappingURL=task-near-resources.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskNearResourcesPage; });
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
 * Generated class for the TaskNearResourcesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TaskNearResourcesPage = (function () {
    function TaskNearResourcesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TaskNearResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskNearResourcesPage');
    };
    TaskNearResourcesPage.prototype.downLoad = function () {
    };
    return TaskNearResourcesPage;
}());
TaskNearResourcesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-task-near-resources',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\task-near-resources\task-near-resources.html"*/'<!--\n\n  Generated template for the TaskNearResourcesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>成果展示</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- <ion-card>\n\n    <img src="img/nin-live.png"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Nine Inch Nails Live\n\n        </ion-card-title>\n\n      <p>\n\n        The most popular industrial group ever, and largely\n\n        responsible for bringing the music to a mass audience.\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n  <ion-grid no-padding>\n\n\n\n    <ion-row class="res-title">\n\n      <ion-col col-12>\n\n        <div>2017年4G皇姑区联通基站光缆配套工程2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <div class="label-class">详细信息</div>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-4 label>\n\n        <div>流水号</div>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <div>2017-YT-2091</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- <ion-row>\n\n      <ion-col col-4>\n\n        <div>单位名称</div>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <div>2017年4G皇姑区联通基站光缆配套工程</div>\n\n      </ion-col>\n\n    </ion-row> -->\n\n\n\n    <ion-row>\n\n      <ion-col col-4 label>\n\n        <div>设计形式</div>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <div>初步设计（简图）</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <div>专业划分</div>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <div>基站光缆</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-4 label>\n\n        <div>设计人员</div>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <div>王子旭</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <!-- <ion-col col-12> -->\n\n      <div class="label-class">文件下载</div>\n\n      <!-- </ion-col> -->\n\n      <ion-card>\n\n        <ion-item class="icon-word-exl">\n\n          <!-- <ion-avatar>\n\n          <img item-start src="assets/img/word.png" alt="word文档">\n\n       </ion-avatar> -->\n\n          <img item-start src="assets/img/attach/word_128.png" alt="word文档">\n\n          <h2>勘测报告说明.doc</h2>\n\n          <p>1.21M</p>\n\n          <button ion-button item-end clear (click)="downLoad()">下载</button>\n\n        </ion-item>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-item class="icon-word-exl">\n\n          <img item-start src="assets/img/attach/xls_128.png" alt="excle文件">\n\n          <h2>勘测表格内容.doc</h2>\n\n          <p>3.11M</p>\n\n          <button ion-button item-end clear (click)="downLoad()">下载</button>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <div class="label-class">成果图片</div>\n\n      <ion-card>\n\n        <!-- <ion-card-title>成果图展示</ion-card-title> -->\n\n        <ion-card-content>\n\n          <ion-card-title>成果图1</ion-card-title>\n\n          <p>相关描述</p>\n\n          <img src="assets/img/chengguo.jpg" alt="成果图1">\n\n          <ion-card-title>成果图2</ion-card-title>\n\n          <p>相关描述</p>\n\n          <img src="assets/img/chengguo1.jpg" alt="成果图2">\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\task-near-resources\task-near-resources.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TaskNearResourcesPage);

//# sourceMappingURL=task-near-resources.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
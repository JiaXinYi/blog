webpackJsonp([0],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNearPageModule", function() { return TaskNearPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_near__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskNearPageModule = (function () {
    function TaskNearPageModule() {
    }
    return TaskNearPageModule;
}());
TaskNearPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__task_near__["a" /* TaskNearPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task_near__["a" /* TaskNearPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__task_near__["a" /* TaskNearPage */]]
    })
], TaskNearPageModule);

//# sourceMappingURL=task-near.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskNearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libriary_mapUtils__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libriary_GeoJsonUtil__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskNearPage = (function () {
    function TaskNearPage(navCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.isShow = false;
        // pageSlides: string[] = ["测试1", "测试2", "测试3", "测试4", "测试5", "测试6", "测试7", "测试8"];
        this.pageNumber = 2;
        this.islarge = false;
        this.svgxml = 'assets/lib/images/method-draw-image.svg';
        this.showDetails = function (e) {
            _this.navCtrl.push('TaskNearResourcesPage');
        };
        //   let svg = '<svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">'+
        //   '<g>' +
        //     '<title>background</title>' +
        //     '<rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>' +
        //    '<g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">' +
        //     '<rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>' +
        //    '</g>' + 
        //   '</g>' +
        //   '<g>' +
        //    '<title>Layer 1</title>' + 
        //    '<ellipse ry="28.5" rx="31.5" id="svg_1" cy="148.5" cx="266" stroke-width="1.5" stroke="#000" fill="#CE7975"/>' +
        //   '</g>' +
        //  '</svg>';
        //   this.svgxml = 'data:image/svg+xml;base64,' + window.btoa(decodeURIComponent(encodeURIComponent(svg))); //给图片对象写入base64编码的svg流    
    }
    TaskNearPage.prototype.ngOnInit = function () {
        var _this = this;
        var curPosition = [23.129529, 113.380216];
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        this.map = L.map('map', {
            center: curPosition,
            zoom: 14,
            crs: L.CRS.EPSG3857,
            attributionControl: false,
            layers: [VectorLayer]
            //zoomControl: false,
        });
        //地图定位
        __WEBPACK_IMPORTED_MODULE_2__libriary_mapUtils__["b" /* mapUtils */].locate().then(function (latlng) {
            curPosition = [latlng.latitude, latlng.longitude];
            _this.map.setView(curPosition, 14);
        }).catch(function (err) {
            //TODO somthing wrong
        });
        //加载数据
        this.getJson("assets/json/geojson.json").then(function (data) {
            var geoJSON = data;
            _this.slides = geoJSON.features;
            __WEBPACK_IMPORTED_MODULE_3__libriary_GeoJsonUtil__["a" /* GeoJsonUtil */].tramsformCoordinate(geoJSON.features);
            var layer = L.geoJSON(geoJSON).addTo(_this.map, {
                style: function (feature) {
                    return {};
                },
                pointToLayer: function (geoJsonPoint, latlng) {
                    return L.marker(latlng);
                }
            }).bindPopup(function (layer) {
                var Element = document.createElement("button");
                Element.innerHTML = "详情";
                Element.onclick = _this.showDetails;
                return Element;
                // return "编号值:" + layer.feature.properties.code;
            });
            _this.map.fitBounds(layer.getBounds());
            var tempP = [23.124008117101754, 113.37358843143204];
            var myIcon = L.icon({
                iconUrl: 'assets/lib/images/mymarker.png',
                iconSize: [48, 48],
                iconAnchor: [24, 48],
                shadowUrl: 'assets/lib/images/marker-shadow.png',
                shadowSize: [68, 95],
                shadowAnchor: [22, 94]
            });
            L.marker(tempP, { icon: myIcon }).addTo(_this.map);
        }).catch(function (err) {
            console.log(err);
        });
        // this.slides = [];
        // for (let i = 0; i < 8; i++) {
        //   this.slides.push({
        //     title: '万科项目二' + i,
        //     image: 'assets/img/wanke.jpg',
        //     name: '刘伟',
        //     distance: '1' + i + '公里'
        //   })
        // }
    };
    TaskNearPage.prototype.getJson = function (path) {
        // 在IE7下测试通过，IE6下必须创建 new ActiveXObject("MSXML2.XMLHTTP.6.0")
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', path);
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    var objs = JSON.parse(request.responseText);
                    resolve(objs);
                }
            };
            request.onerror = function (err) {
                reject(err);
            };
            request.send(null);
        });
    };
    TaskNearPage.prototype.addMap = function () {
        var modal = this.modalCtrl.create('MapAddressPage');
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    TaskNearPage.prototype.enlarge = function () {
        this.islarge = !this.islarge;
    };
    TaskNearPage.prototype.pointSearch = function () {
        this.navCtrl.push('PointSearchPage');
    };
    TaskNearPage.prototype.showListModal = function () {
        this.modalCtrl.create('TaskNearListPage', {}, {
            //动画效果
            enterAnimation: 'modal-from-bottom-enter',
            leaveAnimation: 'modal-from-bottom-leave'
        }).present();
    };
    return TaskNearPage;
}());
TaskNearPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-task-near',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\task-near\task-near.html"*/'<!--\n\n  Generated template for the TaskNearPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>查看附近任务</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="pointSearch()">\n\n      <ion-icon name="ios-search-outline"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div id="map" class="map" #map>\n\n    <!-- <ion-fab top right>\n\n         <button ion-fab mini><ion-icon name="ios-arrow-dropdown"></ion-icon></button>\n\n         <ion-fab-list side="bottom">\n\n           <button ion-fab (tap)=\'addMap()\'><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n         </ion-fab-list>\n\n       </ion-fab> -->\n\n    <!--<div class="legendClass">\n\n      <span (click)=\'enlarge()\'>\n\n           <img [ngStyle]="{ \'width\':\'auto\', \'height\': islarge ?\'50px\':\'30px\' }" src="assets/lib/images/marker-icon.png"><p>点状符号</p>\n\n         </span>\n\n      <span (click)=\'enlarge()\'>\n\n           <img [ngStyle]="{ \'width\':\'auto\', \'height\': islarge ?\'50px\':\'30px\' }" [src]="svgxml" ><p>点状符号</p>\n\n         </span>\n\n    </div>-->\n\n  </div>\n\n\n\n  <div class="showModal">\n\n      <!-- <ion-buttons> -->\n\n          <button ion-button block outline color="primary" (click)="showListModal()">展示单项任务列表 \n\n          <ion-icon name="ios-arrow-up" class="icon-padding"></ion-icon>\n\n        </button>\n\n      <!-- </ion-buttons> -->\n\n    <!-- <ion-item color="label" (click)="showListModal()">单个列表\n\n      <ion-icon name="ios-arrow-up"  item-right></ion-icon>\n\n    </ion-item> -->\n\n    <!-- <button ion-button block outline color="primary" (click)="showListModal()">展示单项任务列表</button> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\task-near\task-near.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], TaskNearPage);

//# sourceMappingURL=task-near.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
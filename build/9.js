webpackJsonp([9],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaiduMapPageModule", function() { return BaiduMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baidumap__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BaiduMapPageModule = (function () {
    function BaiduMapPageModule() {
    }
    return BaiduMapPageModule;
}());
BaiduMapPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__baidumap__["a" /* BaiduMapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__baidumap__["a" /* BaiduMapPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__baidumap__["a" /* BaiduMapPage */]]
    })
], BaiduMapPageModule);

//# sourceMappingURL=baidumap.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaiduMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaiduMapPage = (function () {
    function BaiduMapPage(geolocation) {
        this.geolocation = geolocation;
        this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
    }
    BaiduMapPage.prototype.ionViewDidEnter = function () {
        var map = this.map =
            new BMap.Map(this.map_container.nativeElement, {
                enableMapClick: true,
                enableScrollWheelZoom: true,
                enableContinuousZoom: true //连续缩放效果，默认禁用
            }); //创建地图实例
        // map.centerAndZoom("广州",17); //设置城市设置中心和地图显示级别
        // map.addControl(new BMap.MapTypeControl());//地图类型切换
        // map.setCurrentCity("广州"); //设置当前城市
        var point = new BMap.Point(113.38028471135, 23.129702256122); //坐标可以通过百度地图坐标拾取器获取
        var marker = new BMap.Marker(point);
        this.map.addOverlay(marker);
        map.centerAndZoom(point, 18); //设置中心和地图显示级别
        // let sizeMap = new BMap.Size(10, 80);//显示位置
        // map.addControl(new BMap.NavigationControl());
        // let myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(300, 157));
        // let marker = this.marker = new BMap.Marker(point, { icon: myIcon });
        // map.addOverlay(marker);
    };
    BaiduMapPage.prototype.getLocationByBrowser = function () {
        var _this = this;
        var geolocation1 = this.geolocation1 = new BMap.Geolocation();
        geolocation1.getCurrentPosition(function (r) {
            var mk = _this.marker = new BMap.Marker(r.point, { icon: _this.myIcon });
            if (geolocation1.getStatus() == BMAP_STATUS_SUCCESS) {
                _this.map.addOverlay(mk);
                _this.map.panTo(r.point, 16);
                console.log('浏览器定位：您的位置是 ' + r.point.lng + ',' + r.point.lat);
            }
            else {
                alert('failed' + _this.geolocation1.getStatus());
            }
        }, { enableHighAccuracy: false });
    };
    BaiduMapPage.prototype.getLocationByIp = function () {
        var _this = this;
        var myCity = new BMap.LocalCity();
        myCity.get(function (result) {
            var cityName = result.name;
            _this.map.setCenter(cityName);
            console.log("当前定位城市:" + cityName);
        });
    };
    BaiduMapPage.prototype.getLocationByCity = function () {
        var city = "广州";
        if (city != "") {
            this.map.centerAndZoom(city, 16); // 用城市名设置地图中心点
        }
    };
    BaiduMapPage.prototype.getLocationByLatLon = function () {
        var point = new BMap.Point(113.38028471135, 23.129702256122);
        var marker = this.marker = new BMap.Marker(point, { icon: this.myIcon });
        this.map.addOverlay(marker);
        this.map.centerAndZoom(point, 16);
    };
    BaiduMapPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var locationPoint = new BMap.Point(resp.coords.longitude, resp.coords.latitude);
            var convertor = new BMap.Convertor();
            var pointArr = [];
            pointArr.push(locationPoint);
            convertor.translate(pointArr, 1, 5, function (data) {
                if (data.status === 0) {
                    var marker = _this.marker = new BMap.Marker(data.points[0], { icon: _this.myIcon });
                    _this.map.panTo(data.points[0]);
                    marker.setPosition(data.points[0]);
                    _this.map.addOverlay(marker);
                }
            });
            console.log('GPS定位：您的位置是 ' + resp.coords.longitude + ',' + resp.coords.latitude);
        });
    };
    return BaiduMapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], BaiduMapPage.prototype, "map_container", void 0);
BaiduMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-baidumap',template:/*ion-inline-start:"D:\Ionic-GoogleMap\src\pages\baidumap\baidumap.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>百度地图</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map_container"></div>\n  <div id="btn_location">\n  <button ion-button  class="btn_loaction" (click)="getLocationByBrowser()">浏览器定位</button>\n  <button ion-button  class="btn_loaction" (click)="getLocationByIp()">IP定位</button>\n  <button ion-button  class="btn_loaction" (click)="getLocationByCity()">城市定位</button>\n  <button ion-button  class="btn_loaction" (click)="getLocationByLatLon()">经纬度定位</button>\n  <button ion-button  class="btn_loaction" (click)="getLocation()">GPS点击定位</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic-GoogleMap\src\pages\baidumap\baidumap.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], BaiduMapPage);

//# sourceMappingURL=baidumap.js.map

/***/ })

});
//# sourceMappingURL=9.js.map
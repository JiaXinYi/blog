webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_list_project_list__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RowGroupPage } from '../row-group/row-group';

// import { NewListPage } from '../new-list//new-list';
// import { NoticeListPage } from '../notice-list/notice-list';
// import { EmailListPage } from '../email-list/email-list'; 
// import { ConferencePage } from '../conference/conference';
// import { CarOrderPage } from '../car-order/car-order';
// import { ErrorPage } from '../error/error';
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rowLabel = "新闻公告";
        this.flag = true;
        this.imageUrl = "assets/img/authority_120.png";
        this.showIconText = 3;
    }
    HomePage.prototype.projectList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__project_list_project_list__["a" /* ProjectListPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      首页\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-home">\n    <ion-item-divider><span class="energized-bg"></span>综合办公</ion-item-divider>\n    <div class="mainTitleGroup" (click)=projectList()>\n      <div class="titleGroupRow">\n        <div text-center class="col">\n          <div class="item main-process">\n            <div class="main-process-image">\n              <span class="sm-RedIcon" *ngIf="flag">{{showIconText}}</span>\n              <img class="titleImage" src="assets/img/inProcess_120.png" />\n            </div>\n            <p>项目委托清单</p>\n          </div>\n        </div>\n      </div><!--titleGroupRow end-->\n      <div class="titleGroupRow">\n        <div text-center class="col">\n          <div class="item main-process">\n            <div class="main-process-image">\n              <span class="sm-RedIcon" *ngIf="flag">{{showIconText}}</span>\n              <img class="titleImage" src="assets/img/todo_96.jpg" />\n            </div>\n            <p>资源清查</p>\n          </div>\n        </div>\n      </div><!--titleGroupRow end-->\n      <!--<div class="titleGroupRow" (click)=error()>\n        <div text-center class="col">\n          <div class="item main-process">\n            <div class="main-process-image">\n              <span class="sm-RedIcon" *ngIf="flag">{{showIconText}}</span>\n              <img class="titleImage" src="inProcess_120.png" />\n            </div>\n            <p>{{rowLabel}}</p>\n          </div>\n        </div>\n      </div>titleGroupRow end-->\n\n    </div><!--mainTitleGroup end-->\n\n    <!--<div margin-top></div>-->\n    <ion-item-divider><span class="positive-bg"></span>通知</ion-item-divider>\n    <div class="mainTitleGroup">\n      <!--<row-group></row-group>\n      <row-group></row-group>\n      <row-group></row-group>-->\n      <!--titleGroupRow-->\n      <div class="titleGroupRow" (click)=newList()>\n        <div text-center class="col">\n          <div class="item main-process">\n            <div class="main-process-image">\n              <span class="sm-RedIcon" *ngIf="flag">{{showIconText}}</span>\n              <img class="titleImage" src="assets/img/news_96.png" />\n            </div>\n            <p>在线新闻</p>\n          </div>\n        </div>\n      </div>\n      <!--titleGroupRow-->\n      <div class="titleGroupRow" (click)=noticeList()>\n        <div text-center class="col">\n          <div class="item main-process">\n            <div class="main-process-image">\n              <span class="sm-RedIcon" *ngIf="flag">{{showIconText}}</span>\n              <img class="titleImage" src="assets/img/time_96.png" />\n            </div>\n            <p>通知公告</p>\n          </div>\n        </div>\n      </div>\n      <!--titleGroupRow-->\n      <div class="titleGroupRow" (click)=emailList()>\n        <div text-center class="col">\n          <div class="item main-process">\n            <div class="main-process-image">\n              <span class="sm-RedIcon" *ngIf="flag">{{showIconText}}</span>\n              <img class="titleImage" src="assets/img/email_96.png" />\n            </div>\n            <p>在线邮箱</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    \n</ion-content>\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteDesignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_design_modal_route_design_add__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ledup_modal_ledup_modal__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MySlide } from "../../components/my-side";

var RouteDesignPage = (function () {
    function RouteDesignPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.flag = true;
        this.resourceFlag = false;
        this.showTransferboxFlag = false;
        this.showPipelineFlag = false;
        this.showBarsFlag = false;
        this.showWallFlag = false;
    }
    RouteDesignPage.prototype.ngOnInit = function () {
        var _this = this;
        var curPosition = [23.129529, 113.380216];
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        var SatBasemap = L.esri.basemapLayer('GoogleSat');
        var SatLayer = L.layerGroup([SatBasemap]);
        this.map = L.map('routeDesign', {
            center: curPosition,
            zoom: 14,
            crs: L.CRS.EPSG3857,
            attributionControl: true,
            zoomControl: false,
        });
        var drawnItems = L.featureGroup().bindPopup('我是画图要素').addTo(this.map);
        this.layersToolBar = L.control.layers({
            '谷歌地图': VectorLayer.addTo(this.map),
            "谷歌影像": SatLayer
        }, { '绘图图层': drawnItems }, { position: 'topleft', collapsed: false });
        L.drawLocal.draw.toolbar.actions.text = '取消';
        L.drawLocal.draw.toolbar.finish.text = '完成';
        L.drawLocal.draw.toolbar.undo.text = '撤销';
        L.drawLocal.draw.toolbar.buttons.polyline = '绘画路线';
        L.drawLocal.draw.handlers.polyline.tooltip.start = null;
        L.drawLocal.draw.handlers.polyline.tooltip.cont = null;
        L.drawLocal.draw.handlers.polyline.tooltip.end = null;
        L.drawLocal.draw.handlers.marker.tooltip.start = null;
        L.drawLocal.edit.handlers.edit.tooltip.subtext = null;
        L.drawLocal.edit.handlers.edit.tooltip.text = null;
        L.drawLocal.edit.handlers.remove.tooltip.text = null;
        this.drawToolBar = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems,
                poly: {
                    allowIntersection: false
                }
            },
            draw: {
                // polygon: {
                //   allowIntersection: false,
                //   showArea: true
                // },
                // polyline: {
                //   shapeOptions: {
                //       color: '#f357a1',
                //       weight: 10
                //   },
                // },
                polygon: false,
                circle: false,
                rectangle: false,
                circlemarker: false,
            }
        });
        //添加图层
        // this.map.addControl(layersToolBar);
        // this.map.addControl(drawToolBar);
        // this.map.removeControl(layersToolBar);
        // this.map.removeControl(drawToolBar);
        this.map.on(L.Draw.Event.CREATED, function (event) {
            var type = event.layerType, layer = event.layer;
            if (type === 'polyline') {
                //TODO 画完线的工作
                _this.showPipeline();
            }
            drawnItems.addLayer(layer);
        });
        this.featureLayer = L.featureGroup()
            .bindPopup(function (layer) {
            //return layer.options.content.title + ":"+ layer.options.content.address;
            return "<p style='font-weight:bolder'>交接箱</p><p>名称：" + layer.options.content.title + "</p><p class='transferboxTip'>位置：" + layer.options.content.address + "</p><p class='transferboxTip'>芯位：" + "48</p>";
        })
            .addTo(this.map);
    };
    // ngOnInit(){
    //   var map = new L.map('routeDesign',{
    //     crs:L.CRS.EPSG3857,
    //     attributionControl: false,
    //     zoomControl: false
    //   }).setView([23.129529,113.380216], 14);
    //   let basemap = L.esri.basemapLayer('GaodeVec');
    //   basemap.addTo(map);
    //   this.slides = [];
    //   for(let i=0; i < 8; i++){
    //     this.slides.push({
    //       title:'万科项目二' + i,
    //       image:'assets/img/wanke.jpg',
    //       name:'刘伟',
    //       distance:'1'+ i + '公里'
    //     })
    //   }
    // }
    //路由设计
    RouteDesignPage.prototype.routeButton = function () {
        if (!!this.flag) {
            this.flag = false;
            this.map.addControl(this.layersToolBar);
            this.map.addControl(this.drawToolBar);
        }
        else {
            this.flag = true;
            //添加图层
        }
    };
    //显示资源信息
    RouteDesignPage.prototype.showResource = function () {
        if (!!!this.resourceFlag) {
            this.resourceFlag = true;
        }
        else {
            this.resourceFlag = false;
        }
    };
    //添加交接箱
    RouteDesignPage.prototype.showTransferbox = function () {
        var _this = this;
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__route_design_modal_route_design_add__["a" /* RouteDesignModalPage */], {
            zoom: mapCurZoom,
            center: mapCurCenter
        });
        var mytransferbox = L.icon({
            iconUrl: 'assets/lib/images/transferbox-icon-2x.png',
            iconSize: [25, 41],
            iconAnchor: [12.5, 41],
        });
        modal.onDidDismiss(function (data) {
            if (!!!data)
                return;
            var marker = L.marker(data.center, { icon: mytransferbox, content: data.content });
            var markerContent = data.content;
            _this.featureLayer.addLayer(marker);
            _this.map.fitBounds(_this.featureLayer.getBounds());
            if (!!!_this.showTransferboxFlag) {
                _this.showTransferboxFlag = true;
            }
            else {
                _this.showTransferboxFlag = false;
            }
        });
        modal.present();
    };
    RouteDesignPage.prototype.closeTransferbox = function () {
        if (!!!this.showTransferboxFlag) {
            this.showTransferboxFlag = true;
        }
        else {
            this.showTransferboxFlag = false;
        }
    };
    //添加光缆管道
    RouteDesignPage.prototype.showPipeline = function () {
        if (!!!this.showPipelineFlag) {
            this.showPipelineFlag = true;
        }
        else {
            this.showPipelineFlag = false;
        }
    };
    RouteDesignPage.prototype.closePipeline = function () {
        if (!!!this.showPipelineFlag) {
            this.showPipelineFlag = true;
        }
        else {
            this.showPipelineFlag = false;
        }
    };
    //添加杠路吊线
    RouteDesignPage.prototype.showBars = function () {
        if (!!!this.showBarsFlag) {
            this.showBarsFlag = true;
        }
        else {
            this.showBarsFlag = false;
        }
    };
    RouteDesignPage.prototype.closeBars = function () {
        if (!!!this.showBarsFlag) {
            this.showBarsFlag = true;
        }
        else {
            this.showBarsFlag = false;
        }
    };
    //添加墙壁吊线
    RouteDesignPage.prototype.showWall = function () {
        if (!!!this.showWallFlag) {
            this.showWallFlag = true;
        }
        else {
            this.showWallFlag = false;
        }
    };
    RouteDesignPage.prototype.closeWall = function () {
        if (!!!this.showWallFlag) {
            this.showWallFlag = true;
        }
        else {
            this.showWallFlag = false;
        }
    };
    RouteDesignPage.prototype.addLedupPoint = function () {
        var _this = this;
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__ledup_modal_ledup_modal__["a" /* LedupModalPage */], {
            zoom: mapCurZoom,
            center: mapCurCenter
        });
        modal.onDidDismiss(function (data) {
            if (!!!data)
                return;
            var marker = L.marker(data.center);
            _this.featureLayer.addLayer(marker);
            _this.map.fitBounds(_this.featureLayer.getBounds());
        });
        modal.present();
    };
    return RouteDesignPage;
}());
RouteDesignPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'route-design',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route-design\route-design.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      路由设计\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="ios-search-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="routeDesign" class="map" #map></div>\n\n  <!--<div class="routeList" *ngIf="flag">\n\n    <ion-item>\n\n      <ion-avatar item-left>\n\n        <img src="assets/img/guanglan.jpg">\n\n      </ion-avatar>\n\n      <h2>小区1号交接箱-1号需求点</h2>\n\n      <p>路由总长度：1234米</p>\n\n    </ion-item>\n\n    <div class="routListButton">\n\n      <a ion-button clear class="active">自动路由</a>\n\n      <a ion-button clear (click)=routeButton()>手动路由</a>\n\n    </div>\n\n  </div>-->\n\n   <div class="layer-tool">\n\n    <a><ion-icon name="ios-browsers-outline"></ion-icon><br/>图层</a>\n\n    <a><ion-icon name="ios-pin-outline"></ion-icon><br/>遥感</a>\n\n  </div>\n\n  <div class="resource-tool">\n\n    <a (click)=addLedupPoint()><ion-icon name="ios-git-network-outline"></ion-icon><br/>引上</a>\n\n    <a><ion-icon name="ios-git-commit-outline"></ion-icon><br/>途径点</a>\n\n    <a><ion-icon name="ios-eye-outline"></ion-icon><br/>查看</a>\n\n    <!--<a><ion-icon name="ios-pin-outline"></ion-icon><br/>确定范围</a>-->\n\n  </div>\n\n  <div class="operate-tool">\n\n    <a><ion-icon name="ios-arrow-round-back-outline"></ion-icon><br/>上一步</a>\n\n    <a><ion-icon name="ios-clipboard-outline"></ion-icon><br/>保存</a>\n\n    <!--<a><ion-icon name="ios-pin-outline"></ion-icon><br/>确定范围</a>-->\n\n  </div>\n\n  <!--底部导航-->\n\n  <div class="route-tab" *ngIf="!!!flag">\n\n    <a ion-button clear>\n\n      <ion-icon name="ios-pin-outline"></ion-icon>添加需求点</a>\n\n    <a ion-button clear (click)=showResource()>\n\n      <ion-icon name="ios-map-outline"></ion-icon>添加资源</a>\n\n    <a ion-button clear>\n\n      <ion-icon name="ios-disc-outline"></ion-icon>确定范围</a>\n\n  </div>\n\n  <!--资源列表-->\n\n  <div class="route-resource" *ngIf="resourceFlag">\n\n      <a ion-button (click)=showTransferbox()><ion-icon name="ios-map-outline"></ion-icon>添加交接箱</a>\n\n      <a ion-button (click)=showPipeline()><ion-icon name="ios-map-outline"></ion-icon>光缆管道</a>\n\n      <a ion-button (click)=showBars()><ion-icon name="ios-map-outline"></ion-icon>杆路吊线</a>\n\n      <a ion-button (click)=showWall()><ion-icon name="ios-map-outline"></ion-icon>墙壁吊线</a>\n\n  </div>\n\n  <!--添加交接箱-->\n\n  <!--<div class="routeDesign-transferbox" *ngIf="showTransferboxFlag">\n\n    <ion-list-header>添加交接箱<ion-icon name="ios-close-circle-outline" item-end (click)=closeTransferbox()></ion-icon></ion-list-header>\n\n    <ion-item>\n\n      <span class="input-label">标题</span>\n\n      <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-label">位置</span>\n\n      <span class="input-value">黄浦区瑞和北路</span>\n\n      <button ion-button clear item-end><ion-icon name="ios-pin-outline"></ion-icon><div>[校准位置]</div></button>    \n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">容量</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">备注</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n    </ion-item>\n\n    <div padding-horizontal>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>-->\n\n\n\n  <!--添加光缆管道-->\n\n  <div class="routeDesign-pipeline" *ngIf="showPipelineFlag">\n\n    <ion-list-header>添加光缆管道<ion-icon name="ios-close-circle-outline" item-end (click)=closePipeline()></ion-icon></ion-list-header>\n\n    <ion-item>\n\n        <span class="input-label">光缆材质</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">管道材质</span>\n\n        <span class="input-value">90CM钢管</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">布井材质</span>\n\n        <span class="input-value">铸铁</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">布井距离</span>\n\n        <span class="input-value">50米</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">路面属性</span>\n\n      <div class="road">\n\n        <div class="roadItem">\n\n          <span class="input-label">柏油</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写百分比"/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">方砖</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写百分比"/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">土路</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder=""/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">草地</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder=""/>\n\n        </div>\n\n      </div>\n\n    </ion-item>   \n\n    <!--<ion-item>\n\n      <span class="input-textarea-label">备注</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n    </ion-item>-->\n\n    <div padding-horizontal>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>\n\n\n\n  <!--添加杠路吊线-->\n\n  <div class="routeDesign-bars" *ngIf="showBarsFlag">\n\n    <ion-list-header>添加杠路吊线<ion-icon name="ios-close-circle-outline" item-end (click)=closeBars()></ion-icon></ion-list-header>\n\n    <ion-item>\n\n        <span class="input-label">光缆材质</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">吊线材质</span>\n\n        <span class="input-value">3CM钢丝</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">杠属性</span>\n\n        <span class="input-value">双向钢丝杠</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">布杆距离</span>\n\n        <span class="input-value">50米</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">备注</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n    </ion-item>\n\n    <div padding-horizontal>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>\n\n\n\n  <!--添加墙壁吊线-->\n\n  <div class="routeDesign-wall" *ngIf="showWallFlag">\n\n    <ion-list-header>添加墙壁吊线<ion-icon name="ios-close-circle-outline" item-end (click)=closeWall()></ion-icon></ion-list-header>\n\n    <ion-item>\n\n        <span class="input-label">光缆材质</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">三角架材质</span>\n\n        <span class="input-value">铜</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">布三角架距离</span>\n\n        <span class="input-value">50米</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">备注</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n    </ion-item>\n\n    <div padding-horizontal>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route-design\route-design.html"*/,
        styleUrls: ['/pages/route-design/route-design.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
], RouteDesignPage);

//# sourceMappingURL=route-design.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferBoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_bit_core_bit__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pic_resources_pic_resources__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransferBoxPage = (function () {
    function TransferBoxPage(navtrl) {
        this.navtrl = navtrl;
    }
    //选择芯位 
    TransferBoxPage.prototype.corebit = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_2__core_bit_core_bit__["a" /* CoreBitPage */]);
    };
    //查看资源点图片
    TransferBoxPage.prototype.resources = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_3__pic_resources_pic_resources__["a" /* PicResourcesPage */]);
    };
    return TransferBoxPage;
}());
TransferBoxPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'transferbox',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\transferbox\transferbox.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      交接箱详情\n\n    </ion-title>\n\n    <!--<ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="ios-camera-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n    <ion-item padding text-center no-lines class="transferbox">\n\n        <!--<img src="assets/img/guanglan.jpg"/>-->\n\n        <p>东荟花园1号交接箱</p>\n\n        <div>\n\n          <a ion-button outline (click)=resources()>查看资源点照片</a>  \n\n          <a ion-button color="danger" (click)=corebit()>选择芯位</a>  \n\n      </div>\n\n    </ion-item>\n\n   <div margin-top></div>\n\n   <ion-item>\n\n     <!--<ion-label>Password</ion-label>\n\n     <ion-input type="password"></ion-input>-->\n\n     <!--<ion-label>编号</ion-label>-->\n\n     <span class="input-label">标题</span>\n\n     <span class="input-value">东荟花园1号交接箱</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">位置</span>\n\n     <span class="input-value">黄浦区瑞和北路</span>\n\n     <button ion-button clear item-end><ion-icon name="ios-pin-outline"></ion-icon><div>[校准位置]</div></button>    \n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">容量</span> \n\n     <span class="input-value">共48芯</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">占用率</span>\n\n     <span class="input-value">60%(18芯)</span>\n\n   </ion-item>\n\n \n\n   <!--<div margin>\n\n      <a ion-button block margin-bottom outline (click)=projectNear()>查看附近的项目</a>  \n\n      <a ion-button block (click)=projectHistory()>该客户的历史项目(20个)</a>  \n\n   </div> -->\n\n </ion-list>\n\n\n\n</ion-content>\n\n<!--<div class="processbar">\n\n  <a ion-button full class="task-button" (click)=corebit()>选用芯位</a>\n\n  <a ion-button full color="danger">删除资源</a>\n\n</div>-->'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\transferbox\transferbox.html"*/,
        styleUrls: ['/pages/transferbox/transferbox.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TransferBoxPage);

//# sourceMappingURL=transferbox.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/route/point-search/point-search.module": [
		293,
		3
	],
	"../pages/task-near-list/task-near-list.module": [
		295,
		2
	],
	"../pages/task-near-resources/task-near-resources.module": [
		296,
		1
	],
	"../pages/task-near/task-near.module": [
		294,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { WorkPage } from '../work/work';



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        //tab2Root = WorkPage;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <!--<ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="工作圈" tabIcon="information-circle" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="通讯录" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="person"></ion-tab>-->\n\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="通讯录" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我的" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


//import { MemberListPage } from '../member-list/member-list';
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.placeholder = "请输入用户名或单位";
        this.initializeItems();
    }
    ContactPage.prototype.initializeItems = function () {
        this.items = [
            "中心领导",
            "办公室",
            "人事科",
            "财务科",
            "计划科",
            "质量管理科",
            "技术研究科",
            "数据管理室",
            "工会",
            "党办",
            "第一党支部",
            "第二党支部",
            "第三党支部"
        ];
    };
    ContactPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>\n      通讯录\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page-contact">\n  <ion-searchbar (ionInput)="getItems($event)" [placeholder]="placeholder"></ion-searchbar>\n  <ion-list>\n    <div class="contactMenu">\n      <span>目录</span> > <span><a>部门</a></span>\n    </div>\n    <ion-item *ngFor="let item of items" (click) = memberList(item)>\n      {{ item }}\n      <ion-icon name="ios-arrow-forward-outline" color="gray" item-right></ion-icon>    \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_detail_project_detail__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListPage = (function () {
    function ProjectListPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.pet = "unfinished";
        this.placeholder = "请输入项目名称、客户单位、地点";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    ProjectListPage.prototype.projectDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__project_detail_project_detail__["a" /* ProjectDetailPage */]);
    };
    return ProjectListPage;
}());
ProjectListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'project-list',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\project-list\project-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      项目委托清单\n    </ion-title>\n    <!--<ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)" [placeholder]="placeholder"></ion-searchbar>\n  <div [ngSwitch]="pet">\n    <!--<ion-list *ngSwitchCase="\'unfinished\'" class="tab-content">\n      <ion-item *ngFor="let row of todoProcess"  (click)=workDetail()>\n        <img class="process-item-image" src="assets/img/icon-work/icon2.png"/>\n        <h2>{{row.Title}}</h2>\n        <div class="process-name">\n          <button ion-button small float-left color="danger">{{row.CurStepTitle}}</button>\n          <button ion-button small float-right outline>{{row.CurStepUrgentLevel}}</button>\n        </div>\n        <p class="process-time">提交时间：<span>{{row.CurStepArrivetime}}</span></p>\n      </ion-item>\n    </ion-list>-->\n    <ion-list *ngSwitchCase="\'unfinished\'" class="tab-content">\n      <ion-item (click)=projectDetail()>\n        <!--<ion-thumbnail item-left>    \n            <img src="assets/img/wanke.jpg"/>         \n        </ion-thumbnail> -->\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <!--<ion-thumbnail item-left>    \n            <img src="assets/img/wanke.jpg"/>         \n        </ion-thumbnail> -->\n        <h2>万科花园二期项目万科花园二期</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <!--<ion-thumbnail item-left>    \n            <img src="assets/img/wanke.jpg"/>         \n        </ion-thumbnail> -->\n        <h2>万科花园二期电缆项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园三期光缆小区布线项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n\n    </ion-list>\n\n    <!--办理中-->\n    <ion-list *ngSwitchCase="\'finished\'" class="tab-content">\n      <ion-item>\n        <h2>万科花园二期项目111111111111111111</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目2222222222222222222</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目3333333333333333333333</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n    </ion-list>\n\n    <!--我创建-->\n    <ion-list *ngSwitchCase="\'all\'" class="all">\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>李江</span></p>\n        <p class="project-time">要求完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">负责人：<span>李江，李伟，张东</span></p>\n        <ion-icon name="finish" item-end></ion-icon>\n      </ion-item>     \n    </ion-list>\n  </div>\n</ion-content>\n<div class="project-tab">\n  <ion-segment [(ngModel)] ="pet">\n      <ion-segment-button value="unfinished">未完成</ion-segment-button>\n      <ion-segment-button value="finished">已完成</ion-segment-button>\n      <ion-segment-button value="all">全部</ion-segment-button>\n    </ion-segment>\n</div>\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\project-list\project-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], ProjectListPage);

//# sourceMappingURL=project-list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_history_project_history__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_list_task_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_near_project_near__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDetailPage = (function () {
    function ProjectDetailPage(navtrl) {
        this.navtrl = navtrl;
    }
    //客户历史项目清单 
    ProjectDetailPage.prototype.projectHistory = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_2__project_history_project_history__["a" /* ProjectHistoryPage */]);
    };
    //任务清单
    ProjectDetailPage.prototype.taskList = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_3__task_list_task_list__["a" /* TaskListPage */]);
    };
    //查看附件项目
    ProjectDetailPage.prototype.projectNear = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_4__project_near_project_near__["a" /* ProjectNearPage */]);
    };
    ProjectDetailPage.prototype.taskNear = function () {
        this.navtrl.push('TaskNearPage');
    };
    return ProjectDetailPage;
}());
ProjectDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'project-detail',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\project-detail\project-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      项目委托详情\n\n    </ion-title>\n\n    <!--<ion-buttons end>\n\n      <button ion-button clear (click)=workLog()>\n\n        查看流程\n\n      </button>\n\n    </ion-buttons>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n    <!--<ion-list-header>\n\n      基础资料\n\n    </ion-list-header>-->\n\n   <div margin-top></div>\n\n   <ion-item>\n\n     <!--<ion-label>Password</ion-label>\n\n     <ion-input type="password"></ion-input>-->\n\n     <!--<ion-label>编号</ion-label>-->\n\n     <span class="input-label">委托编号</span>\n\n     <span class="input-value">2017-Y-用户传输-2091</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">委托名称</span>\n\n     <span class="input-value">1001</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">设计阶段</span>\n\n     <span class="input-value">初步设计（简图）</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">项目地点</span>\n\n     <span class="input-value">沈阳市文化路190号</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">建设单位</span>\n\n     <span class="input-value">中国联通沈阳分公司</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">建设单位联系人</span>\n\n     <span class="input-value">张晓华</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">联系电话</span>\n\n     <span class="input-value-phone">13898322113</span>\n\n     <ion-icon item-end name="ios-call-outline" color="secondary"></ion-icon> \n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">委托单位</span>\n\n     <span class="input-value">中国联通沈阳分公司</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">委托单位联系人</span>\n\n     <span class="input-value">张晓华</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">联系电话</span>\n\n     <span class="input-value-phone">13898322113</span>\n\n     <ion-icon item-end name="ios-call-outline" color="secondary"></ion-icon> \n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">任务下达时间</span>\n\n     <span class="input-value">2017-06-20</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">要求完成时间</span>\n\n     <span class="input-value">2017-06-20</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">设计人员</span>\n\n     <span class="input-value">张三，李思，王柳</span>\n\n   </ion-item>\n\n   <div margin>\n\n      <a ion-button block margin-bottom outline (click)=taskNear()>附近已完成单项任务</a>  \n\n      <a ion-button block (click)=projectHistory()>该客户的历史项目(20个)</a>  \n\n   </div> \n\n </ion-list>\n\n\n\n</ion-content>\n\n<div class="processbar">\n\n  <a ion-button full class="task-button" (click)=taskList()>单项任务(30)</a>\n\n  <a ion-button full color="dark">设为已完成</a>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\project-detail\project-detail.html"*/,
        styleUrls: ['/pages/project-detail/porject-detail.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ProjectDetailPage);

//# sourceMappingURL=project-detail.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_historyDetail_project_historyDetail__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectHistoryPage = (function () {
    function ProjectHistoryPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.placeholder = "请输入项目名称、客户单位、地点";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    ProjectHistoryPage.prototype.projectHistoryDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__project_historyDetail_project_historyDetail__["a" /* ProjectHistoryDetailPage */]);
    };
    return ProjectHistoryPage;
}());
ProjectHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'project-history',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\project-history\project-history.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      客户历史项目清单\n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)" [placeholder]="placeholder"></ion-searchbar>\n    <!--<ion-list *ngSwitchCase="\'unfinished\'" class="tab-content">\n      <ion-item *ngFor="let row of todoProcess"  (click)=workDetail()>\n        <img class="process-item-image" src="assets/img/icon-work/icon2.png"/>\n        <h2>{{row.Title}}</h2>\n        <div class="process-name">\n          <button ion-button small float-left color="danger">{{row.CurStepTitle}}</button>\n          <button ion-button small float-right outline>{{row.CurStepUrgentLevel}}</button>\n        </div>\n        <p class="process-time">提交时间：<span>{{row.CurStepArrivetime}}</span></p>\n      </ion-item>\n    </ion-list>-->\n    \n\n    <!--历史项目清单-->\n    <ion-list class="all">\n      <ion-item (click)=projectHistoryDetail()>\n        <!--<ion-thumbnail item-left>    \n            <img src="assets/img/wanke.jpg"/>         \n        </ion-thumbnail> -->\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>2017-03-08</span></p>\n        <p class="project-time">完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">地点：<span>广州科韵路09号</span></p>\n        <ion-icon name="finish" item-end></ion-icon>\n      </ion-item>\n      <ion-item>\n        <h2>中海虞城项目</h2>\n        <p class="project-time">下达时间: <span>2017-03-01</span></p>\n        <p class="project-time">完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">地点：<span>北京市中山一路90号</span></p>\n        <ion-icon name="finish" item-end></ion-icon>\n      </ion-item>\n      <ion-item>\n        <h2>春晖苑小区三期项目</h2>\n        <p class="project-time">下达时间:<span>2017-05-01</span></p>\n        <p class="project-time">完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">地点：<span>湖北荆门市长江路09号</span></p>\n        <ion-icon name="finish" item-end></ion-icon>\n      </ion-item>\n      <ion-item>\n        <h2>万科花园二期项目</h2>\n        <p class="project-time">下达时间:<span>2017-03-08</span></p>\n        <p class="project-time">完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">地点：<span>广州科韵路09号</span></p>\n        <ion-icon name="finish" item-end></ion-icon>\n      </ion-item>\n      <ion-item>\n        <h2>中海虞城项目</h2>\n        <p class="project-time">下达时间: <span>2017-03-01</span></p>\n        <p class="project-time">完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">地点：<span>北京市中山一路90号</span></p>\n        <ion-icon name="finish" item-end></ion-icon>\n      </ion-item>\n      <ion-item>\n        <h2>春晖苑小区三期项目</h2>\n        <p class="project-time">下达时间:<span>2017-05-01</span></p>\n        <p class="project-time">完成时间：<span>2017-03-01 16:51:57</span></p>\n        <p class="project-user">地点：<span>湖北荆门市长江路09号</span></p>\n        <ion-icon name="finish" item-end></ion-icon>\n      </ion-item>      \n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\project-history\project-history.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], ProjectHistoryPage);

//# sourceMappingURL=project-history.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectHistoryDetailPage; });
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


// import { ProjectHistoryPage } from '../project-history/project-history';
// import { WorkCallBackPage } from '../work-callback/work-callback';
// import { WorkLogPage } from './../work-log/work-log';
var ProjectHistoryDetailPage = (function () {
    function ProjectHistoryDetailPage(navtrl) {
        this.navtrl = navtrl;
    }
    return ProjectHistoryDetailPage;
}());
ProjectHistoryDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'project-historyDetail',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\project-historyDetail\project-historyDetail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      万科二期项目详情\n\n    </ion-title>\n\n    <!--<ion-buttons end>\n\n      <button ion-button clear (click)=workLog()>\n\n        查看流程\n\n      </button>\n\n    </ion-buttons>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n    <!--<ion-list-header>\n\n      基础资料\n\n    </ion-list-header>-->\n\n   <div margin-top></div>\n\n   <ion-item>\n\n     <!--<ion-label>Password</ion-label>\n\n     <ion-input type="password"></ion-input>-->\n\n     <!--<ion-label>编号</ion-label>-->\n\n     <span class="input-label">委托编号</span>\n\n     <span class="input-value">2017-Y-用户传输-2091</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">委托名称</span>\n\n     <span class="input-value">1001</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">设计阶段</span>\n\n     <span class="input-value">初步设计（简图）</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">项目地点</span>\n\n     <span class="input-value">沈阳市文化路190号</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">建设单位</span>\n\n     <span class="input-value">中国联通沈阳分公司</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">建设单位联系人</span>\n\n     <span class="input-value">张晓华</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">联系电话</span>\n\n     <span class="input-value-phone">13898322113</span>\n\n     <ion-icon item-end name="ios-call-outline" color="secondary"></ion-icon> \n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">委托单位</span>\n\n     <span class="input-value">中国联通沈阳分公司</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">委托单位联系人</span>\n\n     <span class="input-value">张晓华</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">联系电话</span>\n\n     <span class="input-value-phone">13898322113</span>\n\n     <ion-icon item-end name="ios-call-outline" color="secondary"></ion-icon> \n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">任务下达时间</span>\n\n     <span class="input-value">2017-06-20</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">要求完成时间</span>\n\n     <span class="input-value">2017-06-20</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">设计人员</span>\n\n     <span class="input-value">张三，李思，王柳</span>\n\n   </ion-item>\n\n   <!--<div margin>\n\n      <a ion-button block margin-bottom outline>查看附近的项目</a>  \n\n      <a ion-button block (click)=projectHistory()>该客户的历史项目(20个)</a>  \n\n   </div> -->\n\n </ion-list>\n\n\n\n</ion-content>\n\n<!--<div class="processbar">\n\n  <a ion-button full class="task-button">单项任务(30)</a>\n\n  <a ion-button full color="dark">设为已完成</a>\n\n</div>-->'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\project-historyDetail\project-historyDetail.html"*/,
        styleUrls: ['/pages/project-historyDetail/project-historyDetail.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ProjectHistoryDetailPage);

//# sourceMappingURL=project-historyDetail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_detail_task_detail__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_add_task_add__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskListPage = (function () {
    function TaskListPage(navCtrl, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pet = "unfinished";
        // placeholder:string = "请输入项目名称、客户单位、地点";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TaskListPage.prototype.taskDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task_detail_task_detail__["a" /* TaskDetailPage */]);
    };
    TaskListPage.prototype.taskAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__task_add_task_add__["a" /* TaskAddPage */]);
    };
    TaskListPage.prototype.slectPerson = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('选择人员');
        alert.addInput({
            type: 'radio',
            label: '刘健',
            value: '刘健',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: '刘健2',
            value: '刘健2'
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    return TaskListPage;
}());
TaskListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'task-list',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\task-list\task-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      单项任务清单\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=slectPerson()>\n        <ion-icon name="ios-funnel-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=taskAdd()>\n        <ion-icon name="ios-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--<ion-searchbar (ionInput)="getItems($event)" [placeholder]="placeholder"></ion-searchbar>-->\n  <div [ngSwitch]="pet">\n    <!--<ion-list *ngSwitchCase="\'unfinished\'" class="tab-content">\n      <ion-item *ngFor="let row of todoProcess"  (click)=workDetail()>\n        <img class="process-item-image" src="assets/img/icon-work/icon2.png"/>\n        <h2>{{row.Title}}</h2>\n        <div class="process-name">\n          <button ion-button small float-left color="danger">{{row.CurStepTitle}}</button>\n          <button ion-button small float-right outline>{{row.CurStepUrgentLevel}}</button>\n        </div>\n        <p class="process-time">提交时间：<span>{{row.CurStepArrivetime}}</span></p>\n      </ion-item>\n    </ion-list>-->\n    <ion-list *ngSwitchCase="\'unfinished\'" class="tab-content">\n      <ion-item (click)=taskDetail()>\n        <!--<ion-thumbnail item-left>    \n            <img src="assets/img/guanglan.jpg"/>         \n        </ion-thumbnail> -->\n        <h2>2017年4G皇姑区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员<span>李江</span></p>\n      </ion-item>\n      <ion-item> \n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n      <ion-item (click)=projectDetail()> \n        <h2>2017年4G皇姑区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员<span>李江</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n      <ion-item (click)=projectDetail()> \n        <h2>2017年4G皇姑区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员<span>李江</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n      <ion-item (click)=projectDetail()>\n        <h2>2017年4G皇姑区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员<span>李江</span></p>\n      </ion-item>\n      <ion-item> \n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n    </ion-list>\n\n    <!--办理中-->\n    <ion-list *ngSwitchCase="\'finished\'" class="tab-content">\n      <ion-item>\n        <h2>2017年4G沈阳市区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n      <ion-item (click)=projectDetail()>\n        <h2>2017年4G沈阳市区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员<span>李江</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>2017年4G沈阳市区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n      <ion-item (click)=projectDetail()>\n        <h2>2017年4G皇姑区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员<span>李江</span></p>\n      </ion-item>\n      <ion-item>\n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n    </ion-list>\n\n    <!--我创建-->\n    <ion-list *ngSwitchCase="\'all\'" class="all">\n      <ion-item>\n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n      </ion-item>\n      <ion-item (click)=projectDetail()>\n        <h2>2017年4G皇姑区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员<span>李江</span></p>\n        <ion-icon name="finish" item-end></ion-icon>   \n      </ion-item>\n      <ion-item>\n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>   \n      </ion-item>\n      <ion-item (click)=projectDetail()>\n        <h2>2017年4G皇姑区联通基站光缆配套工程</h2>\n        <p class="project-time">专业:<span>基站光缆</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>     \n        <p class="project-user">设计人员<span>李江</span></p>\n        <ion-icon name="finish" item-end></ion-icon>   \n      </ion-item>\n      <ion-item>\n        <h2>2017年4G皇姑区联通基站光缆配套工程2</h2>\n        <p class="project-time">专业:<span>李江</span></p>\n        <p class="project-time">设计形式：<span>简图</span></p>\n        <p class="project-user">设计人员：<span>李伟</span></p>\n        <ion-icon name="finish" item-end></ion-icon>        \n      </ion-item>   \n    </ion-list>\n  </div>\n</ion-content>\n<div class="project-tab">\n  <ion-segment [(ngModel)] ="pet">\n      <ion-segment-button value="unfinished">待勘察任务</ion-segment-button>\n      <ion-segment-button value="finished">已勘察任务</ion-segment-button>\n      <ion-segment-button value="all">全部任务</ion-segment-button>\n    </ion-segment>\n</div>\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\task-list\task-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TaskListPage);

//# sourceMappingURL=task-list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_route__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sunvey_notes_sunvey_notes__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskDetailPage = (function () {
    function TaskDetailPage(navtrl) {
        this.navtrl = navtrl;
    }
    TaskDetailPage.prototype.route = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_2__route_route__["a" /* RoutePage */]);
    };
    //勘察笔记
    TaskDetailPage.prototype.sunveyNotes = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_3__sunvey_notes_sunvey_notes__["a" /* SunveyNotesPage */]);
    };
    return TaskDetailPage;
}());
TaskDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'task-detail',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\task-detail\task-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      单项任务详情\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)=sunveyNotes()>\n\n        勘察笔记\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n    <!--<ion-list-header>\n\n      基础资料\n\n    </ion-list-header>-->\n\n   <div margin-top></div>\n\n   <ion-item>\n\n     <!--<ion-label>Password</ion-label>\n\n     <ion-input type="password"></ion-input>-->\n\n     <!--<ion-label>编号</ion-label>-->\n\n     <span class="input-label">流水号</span>\n\n     <span class="input-value">2017-YT-2091</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">单位名称</span>\n\n     <span class="input-value">2017年4G皇姑区联通基站光缆配套工程</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">设计形式</span>\n\n     <span class="input-value">初步设计（简图）</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">专业划分</span>\n\n     <span class="input-value">基站光缆</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">设计人员</span>\n\n     <span class="input-value">王子旭</span>\n\n   </ion-item>\n\n   <ion-item>\n\n     <span class="input-label">勘察状态</span>\n\n     <span class="input-value">未完成</span>\n\n   </ion-item>\n\n   <!--<div margin>\n\n      <a ion-button block margin-bottom outline>查看附近的项目</a>  \n\n      <a ion-button block (click)=projectHistory()>该客户的历史项目(20个)</a>  \n\n   </div> -->\n\n </ion-list>\n\n\n\n</ion-content>\n\n<div class="processbar">\n\n  <a ion-button full class="task-button" (click)=route()>路由勘察</a>\n\n  <a ion-button full color="dark">勘察完毕</a>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\task-detail\task-detail.html"*/,
        styleUrls: ['/pages/task-detail/task-detail.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TaskDetailPage);

//# sourceMappingURL=task-detail.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_design_route_design__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transferbox_transferbox__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point_add_modal_point_add__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transforbox_modal_transferbox_modal__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transferbox_add_modal_transferbox_add_modal__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MySlide } from "../../components/my-side";





var RoutePage = (function () {
    function RoutePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.flag = false;
        this.layerFlag = false;
        this.demandPoints = new Array();
        this.featureLayer = null; //画图要素的图层
    }
    RoutePage.prototype.ngOnInit = function () {
        var curPosition = [23.129529, 113.380216];
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        var SatBasemap = L.esri.basemapLayer('GoogleSat');
        var SatLayer = L.layerGroup([SatBasemap]);
        this.map = L.map('map', {
            center: curPosition,
            zoom: 14,
            crs: L.CRS.EPSG3857,
            attributionControl: true,
            zoomControl: false,
        });
        VectorLayer.addTo(this.map);
        // let drawnItems = L.featureGroup().bindPopup('Hello world!').addTo(this.map);
        // L.control.layers({
        //     '谷歌地图': VectorLayer.addTo(this.map),
        //     "谷歌影像": SatLayer
        // }, { 'drawlayer': drawnItems }, { position: 'topleft', collapsed: false }).addTo(this.map);
        // this.map.addControl(new L.Control.Draw({
        //   edit: {
        //     featureGroup: drawnItems,
        //     poly: {
        //       allowIntersection: false
        //     }
        //   },
        //   draw: {
        //     polygon: {
        //       allowIntersection: false,
        //       showArea: true
        //     }
        //   }
        // }));
        // this.map.on(L.Draw.Event.CREATED, (event)=>{
        //   let layer = event.layer;
        //   drawnItems.addLayer(layer);
        // });
        this.featureLayer = L.featureGroup()
            .bindPopup("<div><button onclick=\"showInfo()\">\u8BE6\u60C5</button></div>")
            .on('click', function () { alert('我是需求点'); })
            .addTo(this.map);
    };
    // ngOnInit() {
    //   var map = L.map('map', {
    //     crs: L.CRS.EPSG3857,
    //     attributionControl: false,
    //     zoomControl: false
    //   }).setView([23.129529, 113.380216], 14);
    //   let basemap = L.esri.basemapLayer('GoogleVex');
    //   basemap.addTo(map);
    // }
    //路由设计
    RoutePage.prototype.routeButton = function () {
        if (!!this.flag) {
            this.flag = false;
        }
        else {
            this.flag = true;
        }
    };
    RoutePage.prototype.transferBoxMask = function () {
        if (this.flag == true) {
            this.flag = false;
        }
    };
    //跳转到路由规划
    RoutePage.prototype.routeDesign = function () {
        if (this.flag == true) {
            this.flag = false;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__route_design_route_design__["a" /* RouteDesignPage */]);
    };
    //跳转到交接箱详情
    RoutePage.prototype.transferbox = function () {
        if (this.flag == true) {
            this.flag = false;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transferbox_transferbox__["a" /* TransferBoxPage */]);
    };
    //图层显示
    RoutePage.prototype.showLayer = function () {
        if (!!this.layerFlag) {
            this.layerFlag = false;
        }
        else {
            this.layerFlag = true;
        }
    };
    //图层遮罩层
    RoutePage.prototype.layerMask = function () {
        if (this.layerFlag == true) {
            this.layerFlag = false;
        }
    };
    RoutePage.prototype.addDemandPoint = function () {
        var _this = this;
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__point_add_modal_point_add__["a" /* PointAddModalPage */], {
            zoom: mapCurZoom,
            center: mapCurCenter
        });
        modal.onDidDismiss(function (data) {
            if (!!!data)
                return;
            var marker = L.marker(data.center);
            _this.featureLayer.addLayer(marker);
            _this.map.fitBounds(_this.featureLayer.getBounds());
        });
        modal.present();
    };
    RoutePage.prototype.pointSearch = function () {
        this.navCtrl.push('PointSearchPage');
    };
    //选择资源
    RoutePage.prototype.selectTransferbox = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__transforbox_modal_transferbox_modal__["a" /* TransferboxModalPage */]);
        modal.onDidDismiss(function (data) {
            if (!!!data)
                return;
            //let marker = L.marker(data.center);
            //this.featureLayer.addLayer(marker);
            //this.map.fitBounds(this.featureLayer.getBounds());
        });
        modal.present();
    };
    //新增交接箱
    RoutePage.prototype.addTransferbox = function () {
        var _this = this;
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__transferbox_add_modal_transferbox_add_modal__["a" /* TransferboxAddModalPage */], {
            zoom: mapCurZoom,
            center: mapCurCenter
        });
        var mytransferbox = L.icon({
            iconUrl: 'assets/lib/images/transferbox-icon-2x.png',
            iconSize: [25, 41],
            iconAnchor: [12.5, 41],
        });
        modal.onDidDismiss(function (data) {
            if (!!!data)
                return;
            var marker = L.marker(data.center, { icon: mytransferbox, content: data.content });
            _this.featureLayer.addLayer(marker);
            _this.map.fitBounds(_this.featureLayer.getBounds());
        });
        modal.present();
    };
    return RoutePage;
}());
RoutePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'route',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route\route.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      路由勘察\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="pointSearch()">\n\n        <ion-icon name="ios-search-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n   <!--<div id="map" class="map" #map [ngStyle]="{\'height\': flag ? \'calc(100% - 44px)\' : \'calc(100% - 244px)\'}">-->\n\n   <div id="map" class="map" #map>\n\n      <!--设计路由按钮-->\n\n      <!--<div class="route-button" *ngIf="!flag" (click)=routeButton()>\n\n        <ion-icon name="ios-git-merge-outline"></ion-icon><br>\n\n        路由设计\n\n      </div>-->\n\n\n\n   </div>\n\n   <div class="route-box">\n\n     <ion-item>\n\n        <span class="input-label">从</span>\n\n        <span class="input-value">新增需求点</span>\n\n        <button ion-button icon-only clear item-end color="d-gray" (click)=addDemandPoint()><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item no-lines>\n\n        <span class="input-label">到</span>\n\n        <span class="input-value">选择资源点</span>\n\n        <button ion-button icon-only clear item-end color="d-gray" (click)=selectTransferbox()><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n  </div>\n\n  <div class="transferBox-mask" *ngIf="flag" (click)=transferBoxMask()></div>\n\n  <div class="layer-mask" *ngIf="layerFlag" (click)=layerMask()></div>\n\n  <div class="layer-tool" *ngIf="!!!flag">\n\n    <a (click)=showLayer()><ion-icon name="ios-browsers-outline"></ion-icon><br/>图层</a>\n\n    <a><ion-icon name="ios-pin-outline"></ion-icon><br/>遥感</a>\n\n  </div>\n\n  <div class="resource-tool">\n\n    <!--<a (click)=addDemandPoint()><ion-icon name="ios-pin-outline"></ion-icon><br/>需求点</a>\n\n    <a (click)=showLayer()><ion-icon name="ios-browsers-outline"></ion-icon><br/>图层</a>-->\n\n    <a (click)=addTransferbox()><ion-icon name="ios-archive-outline"></ion-icon><br/>交接箱</a>\n\n    <a><ion-icon name="ios-clipboard-outline"></ion-icon><br/>保存</a>\n\n  </div>\n\n  <div class="route-layer" [ngStyle]="{\'right\': layerFlag ? \'0\' : \'-180px\'}">\n\n    <ion-list-header>选择图层</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="md-disc" item-start></ion-icon>\n\n       <ion-label>资源点</ion-label>\n\n       <ion-checkbox item-end color="position"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="ios-pulse-outline" item-start></ion-icon>\n\n       <ion-label>管线</ion-label>\n\n       <ion-checkbox item-end color="position" checked="true"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="ios-pulse-outline" item-start></ion-icon>\n\n       <ion-label>支线</ion-label>\n\n       <ion-checkbox item-end color="position"></ion-checkbox>\n\n    </ion-item>\n\n  </div>\n\n  <ion-list class="transferBox" *ngIf="flag">\n\n    <ion-list-header>选择交接箱     选择局</ion-list-header>\n\n    <ion-item>\n\n        <ion-thumbnail item-left>    \n\n            <img src="assets/img/guanglan.jpg"/>         \n\n        </ion-thumbnail> \n\n        <h2>1号交接箱</h2>\n\n        <p class="project-time">占用率：<span>60%</span></p>\n\n        <p class="project-time">距离:<span>1.2公里</span></p>\n\n        <button ion-button clear item-end (click)=routeDesign()><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>\n\n        <!--<button clear small item-end><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>   -->\n\n        <button ion-button clear small item-end (click)=transferbox()><ion-icon name="ios-list-box-outline"></ion-icon><div>详情查看</div></button>   \n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-thumbnail item-left>    \n\n            <img src="assets/img/guanglan.jpg"/>         \n\n        </ion-thumbnail> \n\n        <h2>2号交接箱</h2>\n\n        <p class="project-time">占用率：<span>60%</span></p>\n\n        <p class="project-time">距离:<span>1.2公里</span></p>\n\n        <button ion-button clear item-end><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>\n\n        <!--<button clear small item-end><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>   -->\n\n        <button ion-button clear small item-end><ion-icon name="ios-list-box-outline"></ion-icon><div>详情查看</div></button>   \n\n    </ion-item>\n\n     \n\n  </ion-list>\n\n  <div class="route-tab">\n\n    <a ion-button clear><ion-icon name="ios-pin-outline"></ion-icon> 添加需求点</a>\n\n    <!--<a ion-button clear>路由设计</a>-->\n\n    <a ion-button clear><ion-icon name="ios-map-outline"></ion-icon>添加资源</a>\n\n    <a ion-button clear><ion-icon name="ios-disc-outline"></ion-icon>确定范围</a>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route\route.html"*/,
        styleUrls: ['/pages/route/route.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], RoutePage);

// var showInfo = function (){
//   alert("按钮信息");
// } 
//# sourceMappingURL=route.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteDesignModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libriary_CoordinateUtil__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libriary_mapUtils__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouteDesignModalPage = (function () {
    function RouteDesignModalPage(navCtrl, navParams, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.address = ""; // 当前坐标的地名地址
        this.addressArray = new Array(); //存储地名地址服务的数组
        this.addressIndex = -1; //当前地名地址服务数组的索引
        this.moveEvent = function (e) {
            _this.address = ".......";
            var center = _this.map.getCenter();
            var bdpoint = __WEBPACK_IMPORTED_MODULE_2__libriary_CoordinateUtil__["a" /* CoordinateUtil */].transformFromGCJToBD(new __WEBPACK_IMPORTED_MODULE_3__libriary_mapUtils__["a" /* LatLng */](center.lat, center.lng));
            var geturl = "http://172.16.50.133:18400/Baidu/Position?lon=" + bdpoint.longitude + "&lat=" + bdpoint.latitude;
            _this.getJson(geturl).then(function (data) {
                _this.addressArray = data;
                _this.adjust();
            }, function (err) {
            });
        };
    }
    RouteDesignModalPage.prototype.ngOnInit = function () {
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var SatelliteBasemap = L.esri.basemapLayer('GoogleSat');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        var SatelliteLayer = L.layerGroup([SatelliteBasemap]);
        var BaseLayers = { "地图": VectorLayer, "影像": SatelliteLayer };
        var curZoom = this.navParams.get('zoom');
        var curCenter = this.navParams.get('center');
        this.map = new L.map('routeDesignModal', {
            center: curCenter,
            zoom: curZoom,
            crs: L.CRS.EPSG3857,
            attributionControl: false,
            zoomControl: false,
            layers: [VectorLayer]
        });
        //绑定地图移动结束事件
        this.map.on("moveend", this.moveEvent);
        L.control.layers(BaseLayers, null).addTo(this.map);
    };
    RouteDesignModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RouteDesignModalPage.prototype.submit = function () {
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        this.viewCtrl.dismiss({
            center: mapCurCenter,
            zoom: mapCurZoom,
            content: {
                title: this.title,
                address: this.address
            }
        });
    };
    RouteDesignModalPage.prototype.getJson = function (path) {
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
    RouteDesignModalPage.prototype.adjust = function () {
        if (this.addressIndex < 0 && this.addressArray.length === 0) {
            return;
        }
        this.addressIndex++;
        if (this.addressArray.length <= this.addressIndex) {
            this.addressIndex = 0;
        }
        var tmpAddress = this.addressArray[this.addressIndex];
        this.address = tmpAddress.Address + "---" + tmpAddress.PlaceName;
        // this.map.off("moveend");
        // this.map.setView([tmpAddress.Lat, tmpAddress.Lon]);
        // this.map.on("moveend", this.moveEvent);
    };
    return RouteDesignModalPage;
}());
RouteDesignModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-routedesign-modal',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route-design\route-design-modal\route-design-add.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            添加交接箱\n\n        </ion-title>\n\n        <!--<ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n         <span ion-text color="primary">取消</span>\n\n         <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n       </button>\n\n        </ion-buttons>-->\n\n        <ion-buttons end>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n            <ion-icon name="ios-close-circle-outline"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="map">\n\n        \n\n        <div id="routeDesignModal" class="map" style="height:40%;" #mapModal>\n\n            <img src=\'assets/lib/images/transferbox-icon-2x.png\' class="hideDivIcon" />\n\n        </div>\n\n    </div>\n\n<!--添加交接箱-->\n\n<div class="routeDesign-transferbox">\n\n    <!--<ion-list-header>添加交接箱<ion-icon name="ios-close-circle-outline" item-end (click)=closeTransferbox()></ion-icon></ion-list-header>-->\n\n    <ion-item>\n\n      <span class="input-label">标题</span>\n\n      <input [(ngModel)]="title" class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n      <!--<span class="input-value">东荟花园1号交接箱</span>-->\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-label">位置</span>\n\n      <span class="input-value">{{address}}</span>\n\n      <button ion-button clear item-end (click)="adjust()"><ion-icon name="ios-pin-outline"></ion-icon><div>[校准位置]</div></button>    \n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">容量</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">备注</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n    </ion-item>\n\n    <div padding-horizontal (click)=\'submit()\'>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<!-- <div class="submitbar" (click)=\'submit()\'>\n\n    <button ion-button block color="primary">确定</button>\n\n</div> -->'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route-design\route-design-modal\route-design-add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], RouteDesignModalPage);

//# sourceMappingURL=route-design-add.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedupModalPage; });
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


var LedupModalPage = (function () {
    function LedupModalPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.pet = "ledup";
        this.showPipelineFlag = false;
    }
    LedupModalPage.prototype.ngOnInit = function () {
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var SatelliteBasemap = L.esri.basemapLayer('GoogleSat');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        var SatelliteLayer = L.layerGroup([SatelliteBasemap]);
        var BaseLayers = { "地图": VectorLayer, "影像": SatelliteLayer };
        var curZoom = this.navParams.get('zoom');
        var curCenter = this.navParams.get('center');
        this.map = new L.map(this.mapDiv.nativeElement, {
            center: curCenter,
            zoom: curZoom,
            crs: L.CRS.EPSG3857,
            attributionControl: false,
            zoomControl: false,
            layers: [VectorLayer]
        });
        L.control.layers(BaseLayers, null).addTo(this.map);
    };
    LedupModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LedupModalPage.prototype.submit = function () {
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        this.viewCtrl.dismiss({
            center: mapCurCenter,
            zoom: mapCurZoom
        });
    };
    LedupModalPage.prototype.showResourceRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('选择资源');
        alert.addInput({
            type: 'radio',
            label: '光缆管道',
            value: 'guangdao',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: '杠路吊线',
            value: 'ganglu'
        });
        alert.addInput({
            type: 'radio',
            label: '墙壁吊线',
            value: 'qiangbi'
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                //this.testRadioOpen = false;
                //this.testRadioResult = data;
                if (data == 'guangdao') {
                    _this.showPipelineFlag = true;
                }
            }
        });
        alert.present();
    };
    LedupModalPage.prototype.closePipeline = function () {
        if (!!!this.showPipelineFlag) {
            this.showPipelineFlag = true;
        }
        else {
            this.showPipelineFlag = false;
        }
    };
    return LedupModalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ledupModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], LedupModalPage.prototype, "mapDiv", void 0);
LedupModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ledup-modal',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route-design\ledup-modal\ledup-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      新增引上\n\n    </ion-title>\n\n    <!--<ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n         <span ion-text color="primary">取消</span>\n\n         <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n       </button>\n\n        </ion-buttons>-->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n            <ion-icon name="ios-close-circle-outline"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="map">\n\n\n\n    <div id="ledupModal" class="map" style="height:70%;" #ledupModal>\n\n      <img src=\'assets/lib/images/marker-icon.png\' class="hideDivIcon" />\n\n    </div>\n\n  </div>\n\n\n\n  <!--添加引上点-->\n\n  <div class="ledup-tab routeDesign-point">\n\n      <ion-segment [(ngModel)] ="pet">\n\n          <ion-segment-button value="ledup">添加引上点</ion-segment-button>\n\n          <ion-segment-button value="loadResource">添加路段资源</ion-segment-button>\n\n      </ion-segment>\n\n  \n\n  \n\n  <div [ngSwitch]="pet">\n\n    <div  *ngSwitchCase="\'ledup\'">\n\n      <ion-item>\n\n        <span class="input-label">标题</span>\n\n        <input [(ngModel)]="title" class="input-text" type="text" name="" value="" placeholder="填写信息" />\n\n        <!--<span class="input-value">东荟花园1号交接箱</span>-->\n\n      </ion-item>\n\n      <ion-item>\n\n        <div class="road">\n\n          <div class="roadItem">\n\n            <span class="input-label">经度</span>\n\n            <input class="input-text" type="text" name="" value="" placeholder="填写经度"/>\n\n          </div>\n\n          <div class="roadItem">\n\n            <span class="input-label">纬度</span>\n\n            <input class="input-text" type="text" name="" value="" placeholder="填写纬度"/>\n\n          </div>\n\n        </div>\n\n      </ion-item>  \n\n      <ion-item>\n\n        <span class="input-label">类型</span>\n\n        <span class="input-value">用户</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n      </ion-item>\n\n      <div padding-horizontal (click)=\'submit()\'>\n\n        <a ion-button block color="secondary">确定</a>\n\n      </div>\n\n    </div>\n\n    <div  *ngSwitchCase="\'loadResource\'">\n\n      <ion-item>\n\n        <span class="input-label">左边路段</span>\n\n        <span class="input-value">填充路段资源</span>\n\n        <button ion-button icon-only clear item-end color="d-gray" (click)=showResourceRadio()><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <span class="input-label">右边路段</span>\n\n        <span class="input-value">填充路段资源</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n      </ion-item>\n\n      <div padding-horizontal (click)=\'submit()\'>\n\n        <a ion-button block color="secondary">确定</a>\n\n      </div>\n\n    </div>\n\n  </div>  \n\n  </div>\n\n\n\n  <!--添加光缆管道-->\n\n  <div class="routeDesign-pipeline" *ngIf="showPipelineFlag">\n\n    <ion-list-header>添加光缆管道<ion-icon name="ios-close-circle-outline" item-end (click)=closePipeline()></ion-icon></ion-list-header>\n\n    <ion-item>\n\n        <span class="input-label">光缆材质</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">管道材质</span>\n\n        <span class="input-value">90CM钢管</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">布井材质</span>\n\n        <span class="input-value">铸铁</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">布井距离</span>\n\n        <span class="input-value">50米</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">路面属性</span>\n\n      <div class="road">\n\n        <div class="roadItem">\n\n          <span class="input-label">柏油</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写百分比"/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">方砖</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写百分比"/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">土路</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder=""/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">草地</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder=""/>\n\n        </div>\n\n      </div>\n\n    </ion-item>   \n\n    <div padding-horizontal>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>\n\n  <!--<div class="routeDesign-point">\n\n    <ion-item>\n\n      <span class="input-label">标题</span>\n\n      <input [(ngModel)]="title" class="input-text" type="text" name="" value="" placeholder="填写信息" />\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="road">\n\n        <div class="roadItem">\n\n          <span class="input-label">经度</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写经度"/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">纬度</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写纬度"/>\n\n        </div>\n\n      </div>\n\n    </ion-item>  \n\n    <ion-item>\n\n      <span class="input-label">类型</span>\n\n      <span class="input-value">用户</span>\n\n      <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <div padding-horizontal (click)=\'submit()\'>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>-->\n\n\n\n</ion-content>\n\n<!--<div class="submitbar" (click)=\'submit()\'>\n\n    <button ion-button block color="primary">确定</button>\n\n</div>-->\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route-design\ledup-modal\ledup-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LedupModalPage);

//# sourceMappingURL=ledup-modal.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreBitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resource_add_resource_add__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ProjectHistoryPage } from '../project-history/project-history';
//import { TaskListPage } from '../task-list/task-list';
//import { ProjectNearPage } from '../project-near/project-near';

var CoreBitPage = (function () {
    function CoreBitPage(navtrl) {
        this.navtrl = navtrl;
    }
    CoreBitPage.prototype.resourceAdd = function () {
        this.navtrl.push(__WEBPACK_IMPORTED_MODULE_2__resource_add_resource_add__["a" /* ResourceAddPage */]);
    };
    return CoreBitPage;
}());
CoreBitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'core-bit',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\core-bit\core-bit.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      小区一号交接箱\n\n    </ion-title>\n\n    <!--<ion-buttons end>\n\n      <button ion-button icon-only (click)=resourceAdd()>\n\n        <ion-icon name="ios-add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>-->\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)=resourceAdd()>\n\n        资源占用\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n   <!--<div margin-top></div>-->\n\n    <!--<div class="bitList">\n\n      <div class="bitTitle">\n\n        <span><b>1盘</b>到XX局</span>\n\n        <span>1号光缆</span>\n\n      </div>\n\n      <div class="bitCol">\n\n          <div class="bitItem occupation"><p>1</p></div> \n\n          <div class="bitItem occupation"><p>2</p></div> \n\n          <div class="bitItem occupation"><p>3</p></div> \n\n          <div class="bitItem occupation"><p>4</p></div>\n\n          <div class="bitItem occupation"><p>5</p></div> \n\n          <div class="bitItem occupation"><p>6</p></div> \n\n          <div class="bitItem occupation"><p>7</p></div>\n\n          <div class="bitItem occupation"><p>8</p></div> \n\n          <div class="bitItem occupation"><p>9</p></div> \n\n          <div class="bitItem occupation"><p>10</p></div> \n\n          <div class="bitItem occupation"><p>11</p></div>\n\n          <div class="bitItem occupation"><p>12</p></div> \n\n      </div>\n\n      <div class="bitTitle">\n\n        <span><b>2盘</b>到XX局</span>\n\n        <span>1号光缆</span>\n\n      </div>\n\n      <div class="bitCol">\n\n        <div class="bitItem occupation"><p>1</p></div> \n\n        <div class="bitItem occupation"><p>2</p></div> \n\n        <div class="bitItem occupation"><p>3</p></div>\n\n        <div class="bitItem occupation"><p>4</p></div> \n\n        <div class="bitItem occupation"><p>5</p></div> \n\n        <div class="bitItem"><p>6</p></div> \n\n        <div class="bitItem"><p>7</p></div> \n\n        <div class="bitItem"><p>8</p></div> \n\n        <div class="bitItem"><p>9</p></div> \n\n        <div class="bitItem"><p>10</p></div> \n\n        <div class="bitItem"><p>11</p></div> \n\n        <div class="bitItem"><p>12</p></div> \n\n      </div>\n\n      <div class="bitTitle">\n\n        <span><b>3盘</b>到XX局</span>\n\n        <span>1号光缆</span>\n\n      </div>\n\n      <div class="bitCol">\n\n        <div class="bitItem occupation"><p>1</p></div> \n\n        <div class="bitItem occupation"><p>2</p></div> \n\n        <div class="bitItem occupation"><p>3</p></div>\n\n        <div class="bitItem occupation"><p>4</p></div> \n\n        <div class="bitItem occupation"><p>5</p></div> \n\n        <div class="bitItem"><p>6</p></div> \n\n        <div class="bitItem"><p>7</p></div> \n\n        <div class="bitItem"><p>8</p></div> \n\n        <div class="bitItem"><p>9</p></div> \n\n        <div class="bitItem"><p>10</p></div> \n\n        <div class="bitItem"><p>11</p></div> \n\n        <div class="bitItem"><p>12</p></div> \n\n      </div>\n\n      <div class="bitTitle">\n\n        <span><b>4盘</b>到XX局</span>\n\n        <span>2号光缆</span>\n\n      </div>\n\n      <div class="bitCol">\n\n        <div class="bitItem"><p>1</p></div> \n\n        <div class="bitItem"><p>2</p></div> \n\n        <div class="bitItem"><p>3</p></div>\n\n        <div class="bitItem"><p>4</p></div> \n\n        <div class="bitItem"><p>5</p></div> \n\n        <div class="bitItem"><p>6</p></div> \n\n        <div class="bitItem"><p>7</p></div> \n\n        <div class="bitItem"><p>8</p></div> \n\n        <div class="bitItem"><p>9</p></div> \n\n        <div class="bitItem"><p>10</p></div> \n\n        <div class="bitItem"><p>11</p></div> \n\n        <div class="bitItem"><p>12</p></div> \n\n      </div>\n\n      \n\n    \n\n    </div>--><!--bitList end-->\n\n    <!--<div class="bitDescription">\n\n      <div class="occupation_state"><span class="occupation"></span>占用</div>\n\n      <div class="occupation_state"><span></span>未占用</div>\n\n    </div>--><!--bitDescription end-->\n\n\n\n    <div ion-item>1盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>2盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>3盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>4盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>5盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>6盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>7盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>8盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>9盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>10盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>11盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>12盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>13盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>14盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>15盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>16盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>17盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>18盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>19盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>20盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>21盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>22盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>23盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n    <div ion-item>24盘 到 XX局 <button ion-button item-end>芯数信息</button></div>\n\n</ion-content>\n\n<div class="processbar">\n\n  <a ion-button full class="task-button" >选用芯位</a>\n\n  <a ion-button full color="danger">删除资源</a>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\core-bit\core-bit.html"*/,
        styleUrls: ['/pages/core-bit/core-bit.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], CoreBitPage);

//# sourceMappingURL=core-bit.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceAddPage; });
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


var ResourceAddPage = (function () {
    function ResourceAddPage(navtrl, actionSheetCtrl) {
        this.navtrl = navtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mydate = new Date();
    }
    return ResourceAddPage;
}());
ResourceAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'resource-add',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\resource-add\resource-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      资源占用\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n   <div margin-top></div>\n\n    <ion-item>\n\n        <span class="input-label">从</span>\n\n        <span class="input-value">XX交接箱</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">到</span>\n\n        <span class="input-value">需求点信息</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">占用芯位</span>\n\n        <span class="input-value">48芯</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    \n\n   </ion-list>\n\n</ion-content>\n\n<div class="submitbar">\n\n  <a ion-button block color="secondary">提交</a>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\resource-add\resource-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ResourceAddPage);

//# sourceMappingURL=resource-add.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PicResourcesPage = (function () {
    function PicResourcesPage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.imageList = [];
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    PicResourcesPage.prototype.ngOnInit = function () { };
    PicResourcesPage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.image = imageData;
            _this.imageList.push(_this.image);
            // alert(this.imageList);
        }, function (err) {
            // Handle error
        });
    };
    return PicResourcesPage;
}());
PicResourcesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pic-resources',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\pic-resources\pic-resources.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      资源点图片\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)=takePicture()>\n\n        <ion-icon name="ios-camera-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!--<div class="picList">\n\n    <div class="picItem"><img src="assets/img/guanglan.jpg"/></div> \n\n    <div class="picItem"><img src="assets/img/guanglan.jpg"/></div> \n\n    <div class="picItem"><img src="assets/img/guanglan.jpg"/></div> \n\n    <div class="picItem"><img src="assets/img/guanglan.jpg"/></div>\n\n    <div class="picItem"><img src="assets/img/guanglan.jpg"/></div> \n\n    <div class="picItem"><img src="assets/img/guanglan.jpg"/></div> \n\n    <div class="picItem"><img src="assets/img/guanglan.jpg"/></div>\n\n    <div class="picItem"><img [src]="image" alt=""></div>  \n\n  </div>-->\n\n  <!--<ion-item *ngFor="let image of imageList"><img [src]="image" alt=""></ion-item>-->\n\n  <div class="picList">\n\n     <div class="picItem" *ngFor="let image of imageList"><img [src]="image" alt=""></div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\pic-resources\pic-resources.html"*/,
        styleUrls: ['/pages/pic-resources/pic-resources.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], PicResourcesPage);

//# sourceMappingURL=pic-resources.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointAddModalPage; });
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


var PointAddModalPage = (function () {
    function PointAddModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PointAddModalPage.prototype.ngOnInit = function () {
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var SatelliteBasemap = L.esri.basemapLayer('GoogleSat');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        var SatelliteLayer = L.layerGroup([SatelliteBasemap]);
        var BaseLayers = { "地图": VectorLayer, "影像": SatelliteLayer };
        var curZoom = this.navParams.get('zoom');
        var curCenter = this.navParams.get('center');
        this.map = new L.map('mapModal', {
            center: curCenter,
            zoom: curZoom,
            crs: L.CRS.EPSG3857,
            attributionControl: false,
            zoomControl: false,
            layers: [VectorLayer]
        });
        L.control.layers(BaseLayers, null).addTo(this.map);
    };
    PointAddModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PointAddModalPage.prototype.submit = function () {
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        this.viewCtrl.dismiss({
            center: mapCurCenter,
            zoom: mapCurZoom
        });
    };
    return PointAddModalPage;
}());
PointAddModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pointAdd-modal',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route\point-add-modal\point-add.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            新增需求点\n\n        </ion-title>\n\n        <!--<ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n         <span ion-text color="primary">取消</span>\n\n         <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n       </button>\n\n        </ion-buttons>-->\n\n        <ion-buttons end>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n            <ion-icon name="ios-close-circle-outline"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="map">\n\n        \n\n        <div id="mapModal" class="map" style="height:60%;" #mapModal>\n\n            <img src=\'assets/lib/images/marker-icon.png\' class="hideDivIcon" />\n\n        </div>\n\n    </div>\n\n    <!--添加需求点-->\n\n  <div class="routeDesign-point">\n\n    <!--<ion-list-header>添加交接箱<ion-icon name="ios-close-circle-outline" item-end (click)=closeTransferbox()></ion-icon></ion-list-header>-->\n\n    <ion-item>\n\n      <span class="input-label">标题</span>\n\n      <input [(ngModel)]="title" class="input-text" type="text" name="" value="" placeholder="填写信息" />\n\n      <!--<span class="input-value">东荟花园1号交接箱</span>-->\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="road">\n\n        <div class="roadItem">\n\n          <span class="input-label">经度</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写经度"/>\n\n        </div>\n\n        <div class="roadItem">\n\n          <span class="input-label">纬度</span>\n\n          <input class="input-text" type="text" name="" value="" placeholder="填写纬度"/>\n\n        </div>\n\n      </div>\n\n    </ion-item>  \n\n    <ion-item>\n\n      <span class="input-label">类型</span>\n\n      <span class="input-value">用户</span>\n\n      <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-label">接入类型</span>\n\n      <span class="input-value">交接箱（多选）</span>\n\n      <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <div padding-horizontal (click)=\'submit()\'>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n<!--<div class="submitbar" (click)=\'submit()\'>\n\n    <button ion-button block color="primary">确定</button>\n\n</div>-->'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route\point-add-modal\point-add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], PointAddModalPage);

//# sourceMappingURL=point-add.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferboxModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_line_route_line__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transferbox_transferbox__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransferboxModalPage = (function () {
    function TransferboxModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.pet = "transferbox";
    }
    TransferboxModalPage.prototype.ngOnInit = function () {
    };
    TransferboxModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TransferboxModalPage.prototype.routeDesign = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__route_line_route_line__["a" /* RouteLinePage */]);
    };
    //跳转到交接箱详情
    TransferboxModalPage.prototype.transferbox = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transferbox_transferbox__["a" /* TransferBoxPage */]);
    };
    return TransferboxModalPage;
}());
TransferboxModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'transferbox-modal',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route\transforbox-modal\transferbox-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      资源查找\n\n    </ion-title>\n\n    <!--<ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n         <span ion-text color="primary">取消</span>\n\n         <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n       </button>\n\n        </ion-buttons>-->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n            <ion-icon name="ios-close-circle-outline"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="pet">\n\n    <ion-list *ngSwitchCase="\'transferbox\'" class="tab-content">\n\n      <ion-item>\n\n          <h2>1号交接箱</h2>\n\n          <p class="project-time">占用率：<span>60%</span></p>\n\n          <p class="project-time">距离:<span>1.2公里</span></p>\n\n          <button ion-button clear item-end (click)=routeDesign()><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>\n\n          <!--<button clear small item-end><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>   -->\n\n          <button ion-button clear small item-end (click)=transferbox()><ion-icon name="ios-list-box-outline"></ion-icon><div>详情查看</div></button>   \n\n      </ion-item>\n\n      <ion-item>\n\n          <h2>2号交接箱</h2>\n\n          <p class="project-time">占用率：<span>60%</span></p>\n\n          <p class="project-time">距离:<span>1.2公里</span></p>\n\n          <button ion-button clear item-end><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>\n\n          <!--<button clear small item-end><ion-icon name="ios-git-merge-outline"></ion-icon><div>路由规划</div></button>   -->\n\n          <button ion-button clear small item-end><ion-icon name="ios-list-box-outline"></ion-icon><div>详情查看</div></button>   \n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'part\'" class="tab-content">\n\n      \n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'station\'" class="tab-content">\n\n      \n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<div class="resource-tab">\n\n  <ion-segment [(ngModel)] ="pet">\n\n      <ion-segment-button value="transferbox">交接箱</ion-segment-button>\n\n      <ion-segment-button value="part">局</ion-segment-button>\n\n      <ion-segment-button value="station">基站</ion-segment-button>\n\n    </ion-segment>\n\n</div>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route\transforbox-modal\transferbox-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], TransferboxModalPage);

//# sourceMappingURL=transferbox-modal.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteLinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_design_route_design__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MySlide } from "../../components/my-side";

var RouteLinePage = (function () {
    function RouteLinePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.flag = true;
        this.resourceFlag = false;
        this.showlineFlag = false;
        this.pageNumber = 1;
    }
    RouteLinePage.prototype.ngOnInit = function () {
        var map = new L.map('routeLine', {
            crs: L.CRS.EPSG3857,
            attributionControl: false,
            zoomControl: false
        }).setView([23.129529, 113.380216], 14);
        var basemap = L.esri.basemapLayer('GaodeVec');
        basemap.addTo(map);
        this.slides = [];
        for (var i = 0; i < 3; i++) {
            this.slides.push({
                title: 'XX交接箱 -> 1号需求点' + i,
                length: '123' + i + '米',
                distance: '1' + i + '公里'
            });
        }
    };
    //添加交接箱
    RouteLinePage.prototype.showline = function () {
        if (!!!this.showlineFlag) {
            this.showlineFlag = true;
        }
        else {
            this.showlineFlag = false;
        }
    };
    // closeline(){
    //   if (!!!this.showlineFlag) {
    //     this.showlineFlag = true;
    //   } else {
    //     this.showlineFlag = false;
    //   }
    // }
    RouteLinePage.prototype.designRoute = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__route_design_route_design__["a" /* RouteDesignPage */]);
    };
    return RouteLinePage;
}());
RouteLinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'route-line',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route-line\route-line.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      路由线路\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="ios-search-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="routeLine" class="map" #map></div>\n\n  <!--<div class="routeList" *ngIf="flag">\n\n    <ion-item no-lines>\n\n      <ion-avatar item-left>\n\n        <img src="assets/img/guanglan.jpg">\n\n      </ion-avatar>\n\n      <h2>XX交接箱-1号需求点</h2>\n\n      <p>路由总长度：1234米</p>\n\n    </ion-item>\n\n    <div class="routListButton">\n\n      <a ion-button clear class="active">自动路由</a>\n\n      <a ion-button clear  (click)=routeButton()>手动路由</a>\n\n    </div>\n\n  </div>-->\n\n  <div class="layer-tool">\n\n    <a><ion-icon name="ios-browsers-outline"></ion-icon><br/>图层</a>\n\n    <a><ion-icon name="ios-pin-outline"></ion-icon><br/>遥感</a>\n\n  </div>\n\n  <div class="resource-tool">\n\n    <!--<a (click)=addDemandPoint()><ion-icon name="ios-pin-outline"></ion-icon><br/>需求点</a>\n\n    <a (click)=showLayer()><ion-icon name="ios-browsers-outline"></ion-icon><br/>图层</a>-->\n\n    <a><ion-icon name="ios-clipboard-outline"></ion-icon><br/>保存</a>\n\n  </div>\n\n\n\n  <!--添加交接箱-->\n\n  <!--<div class="routeDesign-transferbox" *ngIf="showTransferboxFlag">\n\n    <ion-list-header>添加交接箱<ion-icon name="ios-close-circle-outline" item-end (click)=closeTransferbox()></ion-icon></ion-list-header>\n\n    <ion-item>\n\n      <span class="input-label">标题</span>\n\n      <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-label">位置</span>\n\n      <span class="input-value">黄浦区瑞和北路</span>\n\n      <button ion-button clear item-end><ion-icon name="ios-pin-outline"></ion-icon><div>[校准位置]</div></button>    \n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">容量</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">备注</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n    </ion-item>\n\n    <div padding-horizontal>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>-->\n\n  <div class="line-content">\n\n    <!--<h2>附近项目</h2>-->\n\n    <ion-slides [slidesPerView]="pageNumber">\n\n      <ion-slide *ngFor="let slide of slides" padding-vertical>\n\n        <!--<ion-list-header>路线一</ion-list-header>-->\n\n        <ul>\n\n          <li></li>\n\n          <li class="active"></li>\n\n          <li></li>\n\n        </ul>\n\n        <ion-item no-lines class="line-title">\n\n          <p class="line_name">路线一</p>\n\n          <h2>{{slide.title}}</h2>\n\n          <p>路由总长度：{{slide.length}}</p>\n\n          <button ion-button clear small item-end (click)=showline()><ion-icon name="ios-list-box-outline"></ion-icon><div>选用</div></button>   \n\n        </ion-item>\n\n        <ion-list class="line-detail" *ngIf="showlineFlag">\n\n           <ion-item>\n\n            <div class="log-icon"><ion-icon name="checkmark-circle" color="secondary"></ion-icon></div>\n\n            <h2>起点(XX交接箱)</h2>\n\n            <h3>沿着管道走800米</h3>\n\n            <p><ion-icon name="ios-time-outline" color="gray"></ion-icon>井盖个数</p>\n\n            <!--<div class="memberphoto" item-end>理员</div>-->\n\n          </ion-item>\n\n          <ion-item>\n\n            <div class="log-icon"><ion-icon name="checkmark-circle" color="secondary"></ion-icon></div>\n\n            <h2>引上</h2>\n\n            <h3>沿着管道走300米</h3>\n\n            <p><ion-icon name="ios-time-outline" color="gray"></ion-icon>井盖个数40个</p>\n\n            <!--<div class="memberphoto" item-end>理员</div>-->\n\n          </ion-item>\n\n          <ion-item class="assertive-bg">\n\n            <div class="log-icon"><ion-icon name="checkmark-circle" color="secondary"></ion-icon></div>\n\n            <h2>终点(1号需求点)</h2>\n\n            <h3>沿着墙壁掉线走300米</h3>\n\n            <p><ion-icon name="ios-time-outline" color="gray"></ion-icon>三角架30个</p>\n\n            <div ion-button class="memberphoto" item-end (click)="designRoute()">作图</div>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route-line\route-line.html"*/,
        styleUrls: ['/pages/route-line/route-line.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], RouteLinePage);

//# sourceMappingURL=route-line.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferboxAddModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libriary_CoordinateUtil__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libriary_mapUtils__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransferboxAddModalPage = (function () {
    function TransferboxAddModalPage(navCtrl, navParams, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.address = ""; // 当前坐标的地名地址
        this.addressArray = new Array(); //存储地名地址服务的数组
        this.addressIndex = -1; //当前地名地址服务数组的索引
        this.moveEvent = function (e) {
            _this.address = ".......";
            var center = _this.map.getCenter();
            var bdpoint = __WEBPACK_IMPORTED_MODULE_2__libriary_CoordinateUtil__["a" /* CoordinateUtil */].transformFromGCJToBD(new __WEBPACK_IMPORTED_MODULE_3__libriary_mapUtils__["a" /* LatLng */](center.lat, center.lng));
            var geturl = "http://172.16.50.133:18400/Baidu/Position?lon=" + bdpoint.longitude + "&lat=" + bdpoint.latitude;
            _this.getJson(geturl).then(function (data) {
                _this.addressArray = data;
                _this.adjust();
            }, function (err) {
            });
        };
    }
    TransferboxAddModalPage.prototype.ngOnInit = function () {
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var SatelliteBasemap = L.esri.basemapLayer('GoogleSat');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        var SatelliteLayer = L.layerGroup([SatelliteBasemap]);
        var BaseLayers = { "地图": VectorLayer, "影像": SatelliteLayer };
        var curZoom = this.navParams.get('zoom');
        var curCenter = this.navParams.get('center');
        this.map = new L.map('transferboxAddModal', {
            center: curCenter,
            zoom: curZoom,
            crs: L.CRS.EPSG3857,
            attributionControl: false,
            zoomControl: false,
            layers: [VectorLayer]
        });
        //绑定地图移动结束事件
        this.map.on("moveend", this.moveEvent);
        L.control.layers(BaseLayers, null).addTo(this.map);
    };
    TransferboxAddModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TransferboxAddModalPage.prototype.submit = function () {
        var mapCurZoom = this.map.getZoom();
        var mapCurCenter = this.map.getCenter();
        this.viewCtrl.dismiss({
            center: mapCurCenter,
            zoom: mapCurZoom,
            content: {
                title: this.title,
                address: this.address
            }
        });
    };
    TransferboxAddModalPage.prototype.getJson = function (path) {
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
    TransferboxAddModalPage.prototype.adjust = function () {
        if (this.addressIndex < 0 && this.addressArray.length === 0) {
            return;
        }
        this.addressIndex++;
        if (this.addressArray.length <= this.addressIndex) {
            this.addressIndex = 0;
        }
        var tmpAddress = this.addressArray[this.addressIndex];
        this.address = tmpAddress.Address + "---" + tmpAddress.PlaceName;
        // this.map.off("moveend");
        // this.map.setView([tmpAddress.Lat, tmpAddress.Lon]);
        // this.map.on("moveend", this.moveEvent);
    };
    return TransferboxAddModalPage;
}());
TransferboxAddModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'transferbox-add-modal',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\route\transferbox-add-modal\transferbox-add-modal.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            新增交接箱\n\n        </ion-title>\n\n        <!--<ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n         <span ion-text color="primary">取消</span>\n\n         <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n       </button>\n\n        </ion-buttons>-->\n\n        <ion-buttons end>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n            <ion-icon name="ios-close-circle-outline"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="map">\n\n        \n\n        <div id="transferboxAddModal" class="map" style="height:40%;" #mapModal>\n\n            <img src=\'assets/lib/images/transferbox-icon-2x.png\' class="hideDivIcon" />\n\n        </div>\n\n    </div>\n\n<!--添加交接箱-->\n\n<div class="routeDesign-transferbox">\n\n    <!--<ion-list-header>添加交接箱<ion-icon name="ios-close-circle-outline" item-end (click)=closeTransferbox()></ion-icon></ion-list-header>-->\n\n    <ion-item>\n\n      <span class="input-label">标题</span>\n\n      <input [(ngModel)]="title" class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n      <!--<span class="input-value">东荟花园1号交接箱</span>-->\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-label">位置</span>\n\n      <span class="input-value">{{address}}</span>\n\n      <button ion-button clear item-end (click)="adjust()"><ion-icon name="ios-pin-outline"></ion-icon><div>[校准位置]</div></button>    \n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">容量</span>\n\n        <span class="input-value">48（芯）</span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-textarea-label">备注</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n    </ion-item>\n\n    <div padding-horizontal (click)=\'submit()\'>\n\n      <a ion-button block color="secondary">确定</a>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<!-- <div class="submitbar" (click)=\'submit()\'>\n\n    <button ion-button block color="primary">确定</button>\n\n</div> -->'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\route\transferbox-add-modal\transferbox-add-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], TransferboxAddModalPage);

//# sourceMappingURL=transferbox-add-modal.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SunveyNotesPage; });
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


var SunveyNotesPage = (function () {
    function SunveyNotesPage(navtrl, actionSheetCtrl) {
        this.navtrl = navtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mydate = new Date();
    }
    return SunveyNotesPage;
}());
SunveyNotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'sunvey-notes',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\sunvey-notes\sunvey-notes.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      勘察笔记\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n   <div margin-top></div>\n\n    <!--<ion-item>\n\n        <span class="input-label">标题</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>-->\n\n    <ion-item>\n\n      <span class="input-label">勘察结果</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n      <button ion-button class="phraseButton">惯用语</button>\n\n    </ion-item>\n\n    <div margin-top></div>\n\n    <ion-list-header>基础信息</ion-list-header>\n\n    <ion-item>\n\n        <span class="input-label">联系人</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">电话</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写电话号码"/>\n\n    </ion-item>\n\n    <ion-list-header>照片</ion-list-header>\n\n    <div class="sunvey-list">\n\n      <div class="sunvey-image"><img src="assets/img/guanglan.jpg"/></div>\n\n      <div class="sunvey-image"><img src="assets/img/guanglan.jpg"/></div>\n\n      <div class="sunvey-image"><img src="assets/img/guanglan.jpg"/></div>\n\n      <div class="sunvey-image"><img src="assets/img/guanglan.jpg"/></div>\n\n      <div class="sunvey-image"><img src="assets/img/guanglan.jpg"/></div>\n\n      <div class="sunvey-image"><ion-icon name="ios-add"></ion-icon></div>\n\n    </div>\n\n    \n\n    <!--<ion-item>\n\n        <span class="input-label">一级专业</span>\n\n        <span class="input-value"></span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">二级专业</span>\n\n        <span class="input-value"></span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">设计形式</span>\n\n        <span class="input-value"></span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>-->\n\n    \n\n   </ion-list>\n\n</ion-content>\n\n<div class="submitbar">\n\n  <a ion-button block color="secondary">提交</a>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\sunvey-notes\sunvey-notes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], SunveyNotesPage);

//# sourceMappingURL=sunvey-notes.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskAddPage; });
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


var TaskAddPage = (function () {
    function TaskAddPage(navtrl, actionSheetCtrl) {
        this.navtrl = navtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mydate = new Date();
    }
    return TaskAddPage;
}());
TaskAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'task-add',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\task-add\task-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      新建任务\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n   <div margin-top></div>\n\n    <ion-item>\n\n        <span class="input-label">标题</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n        <!--<ion-input type="text" value="" placeholder="填写信息"></ion-input>-->\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">一级专业</span>\n\n        <span class="input-value"></span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">二级专业</span>\n\n        <span class="input-value"></span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">设计形式</span>\n\n        <span class="input-value"></span>\n\n        <button ion-button icon-only clear item-end color="d-gray"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-item>\n\n    \n\n   </ion-list>\n\n</ion-content>\n\n<div class="submitbar">\n\n  <a ion-button block color="secondary">提交</a>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\task-add\task-add.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object])
], TaskAddPage);

var _a, _b;
//# sourceMappingURL=task-add.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectNearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libriary_mapUtils__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libriary_GeoJsonUtil__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_address_map_address__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectNearPage = (function () {
    function ProjectNearPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        // pageSlides: string[] = ["测试1", "测试2", "测试3", "测试4", "测试5", "测试6", "测试7", "测试8"];
        this.pageNumber = 2;
        this.islarge = false;
        this.svgxml = 'assets/lib/images/method-draw-image.svg';
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
    ProjectNearPage.prototype.ngOnInit = function () {
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
                // let myIcon = L.icon({
                //   iconUrl: 'assets/lib/images/mymarker.png',
                //   iconSize: [32, 32],
                //   iconAnchor: [16, 32],
                // });
                // layer.setIcon(myIcon);
                return "编号值:" + layer.feature.properties.code;
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
    ProjectNearPage.prototype.getJson = function (path) {
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
    ProjectNearPage.prototype.addMap = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__map_address_map_address__["a" /* MapAddressPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    ProjectNearPage.prototype.enlarge = function () {
        this.islarge = !this.islarge;
    };
    return ProjectNearPage;
}());
ProjectNearPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'project-near',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\project-near\project-near.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      查看附近项目\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n   <div id="map" class="map" #map >\n\n     <ion-fab top right>\n\n      <button ion-fab mini><ion-icon name="ios-arrow-dropdown"></ion-icon></button>\n\n      <ion-fab-list side="bottom">\n\n        <button ion-fab (tap)=\'addMap()\'><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n      </ion-fab-list>\n\n    </ion-fab>\n\n    <div class="legendClass">\n\n      <span (click)=\'enlarge()\'>\n\n        <img [ngStyle]="{ \'width\':\'auto\', \'height\': islarge ?\'50px\':\'30px\' }" src="assets/lib/images/marker-icon.png"><p>点状符号</p>\n\n      </span>\n\n      <span (click)=\'enlarge()\'>\n\n        <img [ngStyle]="{ \'width\':\'auto\', \'height\': islarge ?\'50px\':\'30px\' }" [src]="svgxml" ><p>点状符号</p>\n\n      </span>\n\n    </div>\n\n   </div>\n\n   <!--<ion-slides class="slide-title" [options]="mySlideOptions">  \n\n      <ion-slide *ngFor="let slide of slides; let i = index;">  \n\n        <div (click)="onClick(i)">  \n\n          <span class="slide-title-unit" [ngClass]="{\'slide-title-active\': selectedIndex == i}">{{slide}}</span>  \n\n        </div>  \n\n      </ion-slide>  \n\n  </ion-slides>  -->\n\n  <!--<my-slide (slideClick)="onSlideClick($event)" [slides]="pageSlides" [pageNumber]="7"></my-slide>-->\n\n  <div class="project-content">\n\n    <!--<h2>附近项目</h2>-->\n\n    <ion-slides [slidesPerView]="pageNumber">\n\n      <ion-slide *ngFor="let slide of slides">\n\n        <img src="{{slide.properties.image}}"/>\n\n        <p class="slideTitle">{{slide.properties.title}}</p>\n\n        <p><span float-left>设计人员：{{slide.properties.name}}</span><span float-right>{{slide.properties.distance}}</span></p>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\project-near\project-near.html"*/,
        styleUrls: ['/pages/project-near/project-near.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], ProjectNearPage);

//# sourceMappingURL=project-near.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libriary_CoordinateUtil__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libriary_mapUtils__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapAddressPage = (function () {
    function MapAddressPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    MapAddressPage.prototype.ngOnInit = function () {
        var VectorBasemap = L.esri.basemapLayer('GoogleVex');
        var SatelliteBasemap = L.esri.basemapLayer('GoogleSat');
        var VectorLayer = L.layerGroup([VectorBasemap]);
        var SatelliteLayer = L.layerGroup([SatelliteBasemap]);
        var BaseLayers = { "谷歌地图": VectorLayer, "谷歌影像": SatelliteLayer };
        this.map = new L.map('mapAddress', {
            center: [23.129529, 113.380216],
            zoom: 14,
            crs: L.CRS.EPSG3857,
            attributionControl: false,
            zoomControl: false,
            layers: [VectorLayer]
        });
        //L.control.layers(BaseLayers, null).addTo(this.map);
    };
    MapAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MapAddressPage.prototype.submit = function () {
        var location = {
            lng: 113.3803385789265,
            lat: 23.129519713076828
        };
        var tmp = __WEBPACK_IMPORTED_MODULE_2__libriary_CoordinateUtil__["a" /* CoordinateUtil */].transformFromBDToGCJ(new __WEBPACK_IMPORTED_MODULE_3__libriary_mapUtils__["a" /* LatLng */](location.lat, location.lng));
        L.marker([tmp.latitude, tmp.longitude]).addTo(this.map);
        // let ak = "skm1oP6HDZW33atFknc0dSIf0MnFellH";
        // let address = this.searchText;
        // let url = "https://api.map.baidu.com/geocoder/v2/?" + "address=" + address + "&output=json&ak=" + ak + '&callback=func';
        // this.getJson(url).then(
        //   data => {
        //     let geoJSON: any = data.result.location;
        //     // this.slides = geoJSON.features;
        //     // CoordinateUtil.tramsformCoordinate(geoJSON.features);
        //     // let layer = L.geoJSON(geoJSON).addTo(this.map, {
        //     //   style: function (feature) {
        //     //     return {};
        //     //   },
        //     //   pointToLayer: function (geoJsonPoint, latlng) {
        //     //     return L.marker(latlng);
        //     //   }
        //     // }).bindPopup((layer)=> {
        //     //   return "编号值:" + layer.feature.properties.code;
        //     // });
        //     // this.map.fitBounds(layer.getBounds());
        //   }).catch(
        //   err => {
        //     console.log(err);
        //   });
    };
    MapAddressPage.prototype.getItems = function (ev) {
        this.searchText = ev.target.value;
    };
    MapAddressPage.prototype.getJson = function (path) {
        // 在IE7下测试通过，IE6下必须创建 new ActiveXObject("MSXML2.XMLHTTP.6.0")
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', path, true);
            request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.setRequestHeader('Access-Control-Allow-Credentials', 'true'); //设置是否发送cookie，需要在客户端同时设置才会生效
            request.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With'); //允许的访问头部，也需要在客户端同时设置，同时为了避免跨域访问出错，客户端最好不要设置该项信息，避免服务端不允许
            request.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
            request.onreadystatechange = func;
            request.onerror = function (err) {
                reject(err);
            };
            request.send(null);
        });
    };
    return MapAddressPage;
}());
MapAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map-address',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\map-address\map-address.html"*/'<ion-header>\n\n   <ion-toolbar>\n\n    <ion-title>\n\n      地图摸态框\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (tap)="dismiss()">\n\n        <span ion-text color="primary">取消</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n   <div id="mapAddress" class="map" #mapModal >\n\n     <div class="searchbar">\n\n  <!--	搜索框-->\n\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    </div>  \n\n   </div>\n\n</ion-content>\n\n  <div class="submitbar" (tap)=\'submit()\'>\n\n    <button ion-button block color="primary">确定</button>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\map-address\map-address.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], MapAddressPage);

var func = function (data) {
    console.log(data);
};
//# sourceMappingURL=map-address.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advisory_advisory__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { PersonInfoPage } from '../personinfo/personinfo';
//import { LoginPage } from '../login/login';
var AccountPage = (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //意见反馈
    AccountPage.prototype.showAdvisory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__advisory_advisory__["a" /* AdvisoryPage */]);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我的</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item padding text-center no-lines class="user-photo">\n\n        <img src="assets/img/member_pic.jpg"/>\n\n        <p>超级管理员</p>\n\n    </ion-item>\n\n    <div margin-top></div>\n\n    <ion-item (click)="showPersonInfo()">     \n\n      <ion-icon name="ios-person-outline" item-left></ion-icon>\n\n      个人信息\n\n      <ion-icon name="ios-arrow-forward-outline" color="gray" item-right></ion-icon>    \n\n    </ion-item>\n\n    <ion-item (click)="showAdvisory()">     \n\n      <ion-icon name="ios-clipboard-outline" item-left></ion-icon>\n\n      意见反馈\n\n      <ion-icon name="ios-arrow-forward-outline" color="gray" item-right></ion-icon>    \n\n    </ion-item>\n\n    <ion-item no-lines>     \n\n      <ion-icon name="ios-build-outline" item-left></ion-icon>\n\n      关于版本\n\n      <ion-note item-end>\n\n      0.0.1\n\n      </ion-note>\n\n      <ion-icon name="ios-arrow-forward-outline" color="gray" item-right></ion-icon>    \n\n    </ion-item>\n\n    <div margin-top></div>\n\n    <button ion-button full color="danger" (click) = logout()>退出账号</button>\n\n  </ion-list>\n\n \n\n</ion-content>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\account\account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvisoryPage; });
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


var AdvisoryPage = (function () {
    function AdvisoryPage(navtrl, actionSheetCtrl) {
        this.navtrl = navtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mydate = new Date();
    }
    return AdvisoryPage;
}());
AdvisoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'advisory',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\advisory\advisory.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      意见反馈\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n   <div margin-top></div>\n\n    <ion-item>\n\n        <span class="input-label">姓名</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">手机</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">邮箱</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">QQ</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-label">留意信息</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n      <button ion-button class="phraseButton">惯用语</button>\n\n    </ion-item>\n\n   </ion-list>\n\n</ion-content>\n\n<div class="submitbar">\n\n  <a ion-button block color="secondary">提交</a>\n\n</div>'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\advisory\advisory.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], AdvisoryPage);

//# sourceMappingURL=advisory.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoJsonUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapUtils__ = __webpack_require__(27);


var GeoJsonUtil = (function () {
    function GeoJsonUtil() {
    }
    /**
   * geojson根据类型做坐标偏移到火星坐标系
   *
   * @private
   * @param {any[]} features
   * @memberof WebgisPage
   */
    GeoJsonUtil.tramsformCoordinate = function (features) {
        features.forEach(function (features) {
            var Coordinates = features.geometry.coordinates;
            if (features.geometry.type == "LineString") {
                Coordinates.forEach(function (coordinate) {
                    var tmp = new __WEBPACK_IMPORTED_MODULE_1__mapUtils__["a" /* LatLng */](coordinate[1], coordinate[0]);
                    tmp = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromWGSToGCJ(tmp);
                    coordinate[0] = tmp.longitude;
                    coordinate[1] = tmp.latitude;
                });
            }
            else if (features.geometry.type == "Polygon") {
                Coordinates.forEach(function (coordinate) {
                    coordinate.forEach(function (element) {
                        var tmp = new __WEBPACK_IMPORTED_MODULE_1__mapUtils__["a" /* LatLng */](element[1], element[0]);
                        tmp = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromWGSToGCJ(tmp);
                        element[0] = tmp.longitude;
                        element[1] = tmp.latitude;
                    });
                });
            }
            else if (features.geometry.type == "Point") {
                var tmp = new __WEBPACK_IMPORTED_MODULE_1__mapUtils__["a" /* LatLng */](Coordinates[1], Coordinates[0]);
                tmp = __WEBPACK_IMPORTED_MODULE_0__CoordinateUtil__["a" /* CoordinateUtil */].transformFromWGSToGCJ(tmp);
                Coordinates[0] = tmp.longitude;
                Coordinates[1] = tmp.latitude;
            }
        });
        return features;
    };
    return GeoJsonUtil;
}());

//# sourceMappingURL=GeoJsonUtil.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_transition__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_project_list_project_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_project_detail_project_detail__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_project_history_project_history__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_project_historyDetail_project_historyDetail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_task_list_task_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_task_detail_task_detail__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_task_add_task_add__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_project_near_project_near__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_route_route__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_map_address_map_address__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_route_point_add_modal_point_add__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_route_transforbox_modal_transferbox_modal__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_route_transferbox_add_modal_transferbox_add_modal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_route_design_route_design__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_route_design_route_design_modal_route_design_add__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_route_line_route_line__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_route_design_ledup_modal_ledup_modal__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_transferbox_transferbox__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_core_bit_core_bit__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_resource_add_resource_add__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_pic_resources_pic_resources__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_sunvey_notes_sunvey_notes__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_advisory_advisory__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//plugins




















//import { MySlide } from '../components/my-side';










//import { ComponentModule } from '../components/component.module';
var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-from-bottom-enter', __WEBPACK_IMPORTED_MODULE_0__modal_transition__["a" /* ModalFromBottomEnter */]);
        this.config.setTransition('modal-from-bottom-leave', __WEBPACK_IMPORTED_MODULE_0__modal_transition__["b" /* ModalFromBottomLeave */]);
        // this.config.setTransition('modal-enter-1', ModalSlideIn);
        // this.config.setTransition('modal-leave-1', ModalSlideOut);
        // this.config.setTransition('modal-enter', ModalMDSlideIn);
        // this.config.setTransition('modal-leave', ModalMDSlideOut);
    };
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_project_list_project_list__["a" /* ProjectListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_project_detail_project_detail__["a" /* ProjectDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_project_history_project_history__["a" /* ProjectHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_project_historyDetail_project_historyDetail__["a" /* ProjectHistoryDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_task_list_task_list__["a" /* TaskListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_task_detail_task_detail__["a" /* TaskDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_task_add_task_add__["a" /* TaskAddPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_project_near_project_near__["a" /* ProjectNearPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_route_route__["a" /* RoutePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_map_address_map_address__["a" /* MapAddressPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_route_point_add_modal_point_add__["a" /* PointAddModalPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_route_transforbox_modal_transferbox_modal__["a" /* TransferboxModalPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_route_transferbox_add_modal_transferbox_add_modal__["a" /* TransferboxAddModalPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_route_line_route_line__["a" /* RouteLinePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_route_design_route_design__["a" /* RouteDesignPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_route_design_route_design_modal_route_design_add__["a" /* RouteDesignModalPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_route_design_ledup_modal_ledup_modal__["a" /* LedupModalPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_transferbox_transferbox__["a" /* TransferBoxPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_core_bit_core_bit__["a" /* CoreBitPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_resource_add_resource_add__["a" /* ResourceAddPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_pic_resources_pic_resources__["a" /* PicResourcesPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_sunvey_notes_sunvey_notes__["a" /* SunveyNotesPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_advisory_advisory__["a" /* AdvisoryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: 'true',
            }, {
                links: [
                    { loadChildren: '../pages/route/point-search/point-search.module#PointSearchPageModule', name: 'PointSearchPage', segment: 'point-search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-near/task-near.module#TaskNearPageModule', name: 'TaskNearPage', segment: 'task-near', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-near-list/task-near-list.module#TaskNearListPageModule', name: 'TaskNearListPage', segment: 'task-near-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-near-resources/task-near-resources.module#TaskNearResourcesPageModule', name: 'TaskNearResourcesPage', segment: 'task-near-resources', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_project_list_project_list__["a" /* ProjectListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_project_detail_project_detail__["a" /* ProjectDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_project_history_project_history__["a" /* ProjectHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_project_historyDetail_project_historyDetail__["a" /* ProjectHistoryDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_task_list_task_list__["a" /* TaskListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_task_detail_task_detail__["a" /* TaskDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_task_add_task_add__["a" /* TaskAddPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_project_near_project_near__["a" /* ProjectNearPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_route_route__["a" /* RoutePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_map_address_map_address__["a" /* MapAddressPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_route_point_add_modal_point_add__["a" /* PointAddModalPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_route_transforbox_modal_transferbox_modal__["a" /* TransferboxModalPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_route_transferbox_add_modal_transferbox_add_modal__["a" /* TransferboxAddModalPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_route_line_route_line__["a" /* RouteLinePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_route_design_route_design__["a" /* RouteDesignPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_route_design_route_design_modal_route_design_add__["a" /* RouteDesignModalPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_route_design_ledup_modal_ledup_modal__["a" /* LedupModalPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_transferbox_transferbox__["a" /* TransferBoxPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_core_bit_core_bit__["a" /* CoreBitPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_resource_add_resource_add__["a" /* ResourceAddPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_pic_resources_pic_resources__["a" /* PicResourcesPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_sunvey_notes_sunvey_notes__["a" /* SunveyNotesPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_advisory_advisory__["a" /* AdvisoryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFromBottomEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalFromBottomLeave; });
/* unused harmony export ModalSlideIn */
/* unused harmony export ModalSlideOut */
/* unused harmony export ModalMDSlideIn */
/* unused harmony export ModalMDSlideOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
// import { Animation,PageTransition } from 'ionic-angular'
// export class ModalFromBottomEnter extends PageTransition{
// 	public init(){
// 		const ele = this.enteringView.pageRef().nativeElement;
// 		const backdrop = new Animation(this.plt,ele.querySelector('ion-backdrop'));
// 		backdrop.beforeStyles({'z-index':0,'opacity':0.3,'visibility':'visible'});
// 		const wrapper = new Animation(this.plt,ele.querySelector('.modal-wrapper'));
// 		wrapper.fromTo('tranaform','translateX(100%)','translateX(20%)');
// 		const contentWrapper = new Animation(this.plt,ele.querySelector('ion-content.content'));
// 		contentWrapper.beforeStyles({'width':'80%'});
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 		this
// 		.element(this.enteringView.pageRef())
// 		.duration(300)
// 		.easing('cubic-bezier(.25,.1,.25,1)')
// 		.add(backdrop)
// 		.add(wrapper)
// 		.add(contentWrapper);
// 	}
// }

var ModalFromBottomEnter = (function (_super) {
    __extends(ModalFromBottomEnter, _super);
    function ModalFromBottomEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromBottomEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdropEle = ele.querySelector('ion-backdrop');
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, backdropEle);
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'height': '50%' });
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('translateY', '100%', '50%');
        backdrop.fromTo('opacity', 0.01, 0.4);
        this
            .element(this.enteringView.pageRef())
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .duration(400)
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromBottomEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

var ModalFromBottomLeave = (function (_super) {
    __extends(ModalFromBottomLeave, _super);
    function ModalFromBottomLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromBottomLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        var wrapperEle = ele.querySelector('.modal-wrapper');
        var wrapperEleRect = wrapperEle.getBoundingClientRect();
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, wrapperEle);
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        // height of the screen - top of the container tells us how much to scoot it down
        // so it's off-screen
        wrapper.fromTo('translateY', '50%', '50%');
        backdrop.fromTo('opacity', 0.4, 0);
        this
            .element(this.leavingView.pageRef())
            .easing('ease-out')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromBottomLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

var ModalSlideIn = (function (_super) {
    __extends(ModalSlideIn, _super);
    function ModalSlideIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalSlideIn.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdropEle = ele.querySelector('ion-backdrop');
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, backdropEle);
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('translateY', '100%', '0%');
        backdrop.fromTo('opacity', 0.9, 0.4);
        this
            .element(this.enteringView.pageRef())
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    };
    return ModalSlideIn;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

var ModalSlideOut = (function (_super) {
    __extends(ModalSlideOut, _super);
    function ModalSlideOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalSlideOut.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        var wrapperEle = ele.querySelector('.modal-wrapper');
        var wrapperEleRect = wrapperEle.getBoundingClientRect();
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, wrapperEle);
        // height of the screen - top of the container tells us how much to scoot it down
        // so it's off-screen
        wrapper.fromTo('translateY', '0px', this.plt.height() - wrapperEleRect.top + "px");
        backdrop.fromTo('opacity', 0.8, 0.0);
        this
            .element(this.leavingView.pageRef())
            .easing('ease-out')
            .duration(250)
            .add(backdrop)
            .add(wrapper);
    };
    return ModalSlideOut;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

var ModalMDSlideIn = (function (_super) {
    __extends(ModalMDSlideIn, _super);
    function ModalMDSlideIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalMDSlideIn.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        backdrop.fromTo('opacity', 0.01, 0.4);
        wrapper.fromTo('translateY', '40px', '0px');
        wrapper.fromTo('opacity', 0.01, 1);
        var DURATION = 280;
        var EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
        this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
            .add(backdrop)
            .add(wrapper);
    };
    return ModalMDSlideIn;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

var ModalMDSlideOut = (function (_super) {
    __extends(ModalMDSlideOut, _super);
    function ModalMDSlideOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalMDSlideOut.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        backdrop.fromTo('opacity', 0.4, 0.0);
        wrapper.fromTo('translateY', '0px', '40px');
        wrapper.fromTo('opacity', 0.99, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)')
            .add(wrapper)
            .add(backdrop);
    };
    return ModalMDSlideOut;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

//# sourceMappingURL=modal-transition.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapUtils; });
var LatLng = (function () {
    function LatLng(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return LatLng;
}());

var mapUtils = (function () {
    function mapUtils() {
    }
    /**
     * 地图定位功能
     *
     * @memberof HomePage
     */
    mapUtils.locate = function () {
        if (!navigator.geolocation) {
            alert("地图地位不可用!");
        }
        return new Promise(function (resolve, reject) {
            var latitude = 0, longitude = 0;
            var GeolocationOptions = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 3000 /// 最大请求时间
            };
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(new LatLng(position.coords.latitude, position.coords.longitude));
            }, function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.log("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.log("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.log("The request to get user location timed out.");
                        console.log("Unable to start geolocation. Check application settings.");
                        break;
                }
                reject(error.code);
            }, GeolocationOptions);
        });
    };
    return mapUtils;
}());

//# sourceMappingURL=mapUtils.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',template:/*ion-inline-start:"d:\webapp\ShenYangOfficialProject\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      登陆页面\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <img class="login-bg" src="assets/img/login_bg.jpg"/>\n  <div class="login-img">\n    <img src="assets/img/login_logo.png"/>\n  </div>\n  <ion-card>\n    <ion-list>\n      <!--<ion-item>\n        <ion-label floating>用户名</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>密码</ion-label>\n        <ion-input type="password" value=""></ion-input>\n      </ion-item>-->\n      <ion-item>\n        <ion-label><ion-icon name="ios-person-outline"></ion-icon></ion-label>\n        <ion-input type="text" value="" placeholder="邮箱/用户名"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label><ion-icon name="ios-lock-outline"></ion-icon></ion-label>\n        <ion-input type="password" value="" placeholder="密码"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <div padding>\n    <button ion-button color="primary" block (click) = login()>登录</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"d:\webapp\ShenYangOfficialProject\src\pages\login\login.html"*/,
        styleUrls: ['/pages/login/login.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoordinateUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapUtils__ = __webpack_require__(27);

var CoordinateUtil = (function () {
    function CoordinateUtil() {
    }
    /**
  * 手机GPS坐标转火星坐标
  *
  * @param wgLoc
  * @return
  */
    CoordinateUtil.transformFromWGSToGCJ = function (wgLoc) {
        //如果在国外，则默认不进行转换 
        if (this.outOfChina(wgLoc.latitude, wgLoc.longitude)) {
            return new __WEBPACK_IMPORTED_MODULE_0__mapUtils__["a" /* LatLng */](wgLoc.latitude, wgLoc.longitude);
        }
        var dLat = this.transformLat(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var dLon = this.transformLon(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var radLat = wgLoc.latitude / 180.0 * Math.PI;
        var magic = Math.sin(radLat);
        magic = 1 - this.ee * magic * magic;
        var sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtMagic) * Math.PI);
        dLon = (dLon * 180.0) / (this.a / sqrtMagic * Math.cos(radLat) * Math.PI);
        return new __WEBPACK_IMPORTED_MODULE_0__mapUtils__["a" /* LatLng */](wgLoc.latitude + dLat, wgLoc.longitude + dLon);
    };
    /**
     * 火星坐标系转WGS84坐标
     *
     * @static
     * @param {LatLng} wgLoc
     * @returns {LatLng}
     * @memberof CoordinateUtil
     */
    CoordinateUtil.transformFromGCJToWGS = function (wgLoc) {
        var gps = this.transform(wgLoc);
        var lontitude = wgLoc.longitude * 2 - gps[1];
        var latitude = wgLoc.latitude * 2 - gps[0];
        return new __WEBPACK_IMPORTED_MODULE_0__mapUtils__["a" /* LatLng */](latitude, lontitude);
    };
    /**
     * 将 BD-09 坐标转换成GCJ-02 坐标
     *
     * @static
     * @param {LatLng} wgLoc
     * @returns {LatLng}
     * @memberof CoordinateUtil
     */
    CoordinateUtil.transformFromBDToGCJ = function (wgLoc) {
        var x = wgLoc.longitude - 0.0065, y = wgLoc.latitude - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
        var tempLon = z * Math.cos(theta);
        var tempLat = z * Math.sin(theta);
        var gps = new __WEBPACK_IMPORTED_MODULE_0__mapUtils__["a" /* LatLng */](tempLat, tempLon);
        return gps;
    };
    /**
     * GCJ-02 坐标转换到 BD-09 坐标
     *
     * @static
     * @param {LatLng} wgLoc
     * @returns {LatLng}
     * @memberof CoordinateUtil
     */
    CoordinateUtil.transformFromGCJToBD = function (wgLoc) {
        var x = wgLoc.longitude, y = wgLoc.latitude;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
        var tempLon = z * Math.cos(theta) + 0.0065;
        var tempLat = z * Math.sin(theta) + 0.006;
        var gps = new __WEBPACK_IMPORTED_MODULE_0__mapUtils__["a" /* LatLng */](tempLat, tempLon);
        return gps;
    };
    CoordinateUtil.transform = function (wgLoc) {
        if (this.outOfChina(wgLoc.latitude, wgLoc.longitude)) {
            return new __WEBPACK_IMPORTED_MODULE_0__mapUtils__["a" /* LatLng */](wgLoc.latitude, wgLoc.longitude);
        }
        var dLat = this.transformLat(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var dLon = this.transformLon(wgLoc.longitude - 105.0, wgLoc.latitude - 35.0);
        var radLat = wgLoc.latitude / 180.0 * this.pi;
        var magic = Math.sin(radLat);
        magic = 1 - this.ee * magic * magic;
        var sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtMagic) * this.pi);
        dLon = (dLon * 180.0) / (this.a / sqrtMagic * Math.cos(radLat) * this.pi);
        var mgLat = wgLoc.latitude + dLat;
        var mgLon = wgLoc.longitude + dLon;
        return new __WEBPACK_IMPORTED_MODULE_0__mapUtils__["a" /* LatLng */](mgLat, mgLon);
    };
    CoordinateUtil.transformLat = function (x, y) {
        var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y
            + 0.2 * Math.sqrt(x > 0 ? x : -x);
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x
            * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0
            * Math.PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y
            * Math.PI / 30.0)) * 2.0 / 3.0;
        return ret;
    };
    CoordinateUtil.transformLon = function (x, y) {
        var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1
            * Math.sqrt(x > 0 ? x : -x);
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x
            * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0
            * Math.PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x
            / 30.0 * Math.PI)) * 2.0 / 3.0;
        return ret;
    };
    CoordinateUtil.outOfChina = function (lat, lon) {
        if (lon < 72.004 || lon > 137.8347)
            return true;
        if (lat < 0.8293 || lat > 55.8271)
            return true;
        return false;
    };
    return CoordinateUtil;
}());

CoordinateUtil.pi = 3.1415926535897932384626;
CoordinateUtil.x_pi = 3.14159265358979324 * 3000.0 / 180.0;
CoordinateUtil.a = 6378245.0;
CoordinateUtil.ee = 0.00669342162296594323;
//# sourceMappingURL=CoordinateUtil.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map
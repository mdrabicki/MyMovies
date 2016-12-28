(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(6);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(7);
	var app_module_1 = __webpack_require__(8);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
	 */
	"use strict";
	/* tslint:disable */
	var __compiler__ = __webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var patch = false;
	if (!core_1.__core_private__['ViewUtils']) {
	    patch = true;
	    core_1.__core_private__['ViewUtils'] = core_1.__core_private__['view_utils'];
	}
	if (!__compiler__.__compiler_private__) {
	    patch = true;
	    (__compiler__).__compiler_private__ = {
	        SelectorMatcher: __compiler__.SelectorMatcher,
	        CssSelector: __compiler__.CssSelector
	    };
	}
	var __universal__ = __webpack_require__(4);
	if (patch) {
	    __universal__.ViewUtils = core_1.__core_private__['view_utils'];
	    __universal__.CssSelector = __compiler__.CssSelector;
	    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("@angular/compiler");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(10);
	var angular2_universal_1 = __webpack_require__(7);
	var app_component_1 = __webpack_require__(11);
	var navmenu_component_1 = __webpack_require__(16);
	var home_component_1 = __webpack_require__(20);
	var fetchdata_component_1 = __webpack_require__(22);
	var counter_component_1 = __webpack_require__(25);
	var notes_component_1 = __webpack_require__(27);
	var note_create_component_1 = __webpack_require__(34);
	var movies_component_1 = __webpack_require__(38);
	var movie_detail_component_1 = __webpack_require__(44);
	var actors_component_1 = __webpack_require__(48);
	var actor_create_component_1 = __webpack_require__(51);
	var actor_detail_component_1 = __webpack_require__(54);
	//import {card as MCDcard} from '@material/card';
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            counter_component_1.CounterComponent,
	            fetchdata_component_1.FetchDataComponent,
	            home_component_1.HomeComponent,
	            notes_component_1.NotesComponent,
	            note_create_component_1.NoteCreateComponent,
	            movies_component_1.MoviesComponent,
	            movie_detail_component_1.MovieDetailComponent,
	            actors_component_1.ActorsComponent,
	            actor_create_component_1.ActorCreateComponent,
	            actor_detail_component_1.ActorDetailComponent,
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'notes', component: notes_component_1.NotesComponent },
	                { path: 'note-create', component: note_create_component_1.NoteCreateComponent },
	                { path: 'movies', component: movies_component_1.MoviesComponent },
	                { path: 'movie-detail/:id', component: movie_detail_component_1.MovieDetailComponent },
	                { path: 'actors', component: actors_component_1.ActorsComponent },
	                { path: 'actors-create', component: actor_create_component_1.ActorCreateComponent },
	                { path: 'actor-detail/:id', component: actor_detail_component_1.ActorDetailComponent },
	                { path: '**', redirectTo: 'home' }
	            ]),
	            forms_1.FormsModule,
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(12),
	        styles: [__webpack_require__(13)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(14);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n\r\n@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(17),
	        styles: [__webpack_require__(18)]
	    }),
	    __metadata("design:paramtypes", [])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">MyMovies</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                 <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/movies']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Filmy\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/actors']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Aktorzy\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(19);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(21)
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<body class=\"mdc-theme--dark\">\r\n    <div class=\"mdc-card\">\r\n  <section class=\"mdc-card__primary\">\r\n    <h1 class=\"mdc-card__title mdc-card__title--large\">Title goes here</h1>\r\n    <h2 class=\"mdc-card__subtitle\">Subtitle here</h2>\r\n  </section>\r\n  <section class=\"mdc-card__supporting-text\">\r\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\r\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n    commodo consequat.\r\n  </section>\r\n  <section class=\"mdc-card__actions\">\r\n    <button class=\"mdc-button mdc-button--compact mdc-card__action\">Action 1</button>\r\n    <button class=\"mdc-button mdc-button--compact mdc-card__action\">Action 2</button>\r\n  </section>\r\n</div>\r\n<div class=\"mdc-card\">\r\n  <section class=\"mdc-card__primary\">\r\n    <h1 class=\"mdc-card__title mdc-card__title--large\">Title goes here</h1>\r\n    <h2 class=\"mdc-card__subtitle\">Subtitle here</h2>\r\n  </section>\r\n  <section class=\"mdc-card__supporting-text\">\r\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\r\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n    commodo consequat.\r\n  </section>\r\n  <section class=\"mdc-card__actions\">\r\n    <button class=\"mdc-button mdc-button--compact mdc-card__action\">Action 1</button>\r\n    <button class=\"mdc-button mdc-button--compact mdc-card__action\">Action 2</button>\r\n  </section>\r\n</div>\r\n</body>"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(23);
	var FetchDataComponent = (function () {
	    function FetchDataComponent(http) {
	        var _this = this;
	        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    return FetchDataComponent;
	}());
	FetchDataComponent = __decorate([
	    core_1.Component({
	        selector: 'fetchdata',
	        template: __webpack_require__(24)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var CounterComponent = (function () {
	    function CounterComponent() {
	        this.currentCount = 0;
	    }
	    CounterComponent.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    return CounterComponent;
	}());
	CounterComponent = __decorate([
	    core_1.Component({
	        selector: 'counter',
	        template: __webpack_require__(26)
	    }),
	    __metadata("design:paramtypes", [])
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(10);
	var note_service_1 = __webpack_require__(28);
	var NotesComponent = (function () {
	    function NotesComponent(noteService, router) {
	        this.noteService = noteService;
	        this.router = router;
	        this.notes = new Array();
	    }
	    NotesComponent.prototype.getNotes = function () {
	        var _this = this;
	        this.noteService.getNotes(this.movieId)
	            .then(function (notes) { return _this.notes = notes; });
	        // .catch();
	    };
	    ;
	    NotesComponent.prototype.gotoNoteCreate = function () {
	        this.router.navigate(['note-create/']);
	    };
	    ;
	    NotesComponent.prototype.onNoteAdd = function (note) {
	        this.notes.push(note);
	    };
	    NotesComponent.prototype.deleteComment = function (note) {
	        var _this = this;
	        this.noteService.deleteComment(this.movieId, note.id)
	            .then(function () { return _this.notes = _this.notes.filter(function (n) { return n != note; }); });
	    };
	    NotesComponent.prototype.ngOnInit = function () {
	        this.getNotes();
	    };
	    return NotesComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], NotesComponent.prototype, "movieId", void 0);
	NotesComponent = __decorate([
	    core_1.Component({
	        // moduleId: module.id,
	        selector: 'notes',
	        template: __webpack_require__(31),
	        styles: [__webpack_require__(32)],
	        providers: [note_service_1.NoteService],
	    }),
	    __metadata("design:paramtypes", [note_service_1.NoteService,
	        router_1.Router])
	], NotesComponent);
	exports.NotesComponent = NotesComponent;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(23);
	var Subject_1 = __webpack_require__(29);
	__webpack_require__(30);
	var NoteService = (function () {
	    function NoteService(http) {
	        this.http = http;
	        this.notesURL = 'review/';
	        this.header = new http_1.Headers({ 'Content-Type': 'application/json' });
	        this.notesSource = new Subject_1.Subject();
	    }
	    ;
	    NoteService.prototype.getNotes = function (movieId) {
	        return this.http.get(this.notesURL + ("" + movieId))
	            .toPromise()
	            .then(function (response) { return response.json(); });
	    };
	    ;
	    NoteService.prototype.addNote = function (note, movieId) {
	        console.log("Dodanie notki");
	        return this.http
	            .post(this.notesURL + ("" + movieId), JSON.stringify(note), { headers: this.header })
	            .toPromise()
	            .then(function (res) { return res.json(); });
	    };
	    ;
	    NoteService.prototype.handleError = function (error) {
	        console.error("blad wystapil", error);
	        return Promise.reject(error.message || error);
	    };
	    ;
	    NoteService.prototype.deleteComment = function (movieId, commentId) {
	        return this.http
	            .delete(this.notesURL + (movieId + "/" + commentId))
	            .toPromise()
	            .then(function () { return null; });
	    };
	    NoteService.prototype.ngOnDestroy = function () {
	        console.log("nie ma mnie");
	    };
	    return NoteService;
	}());
	NoteService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], NoteService);
	exports.NoteService = NoteService;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Subject");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<h1>My Notes </h1>\r\n\r\n<!--<li *ngFor='let note of notes'>\r\n    <span> {{note.title}} </span>\r\n</li>-->\r\n\r\n<!--<p>\r\n    <button (click)=\"gotoNoteCreate()\">  Create New  </button>\r\n</p>-->\r\n<p *ngIf=\"!notes\"><em>Loading...</em></p>\r\n<div class=\"card-deck-wrapper\">\r\n    <div class=\"card-deck\">\r\n       <div class=\"card\" *ngFor=\"let note of notes\">\r\n           <div class=\"card-block\">\r\n               <table style=\"width:100%\">\r\n                   <tr>\r\n                       <th width=\"60%\"><a class=\"card-title\">{{note.comment}}</a></th>\r\n                       <th>Edit</th>\r\n                       <th><button (click)='deleteComment(note)'>Usuń </button></th>\r\n               </table>\r\n               <p class=\"card-text\">{{note.rate}}</p>\r\n               <p class=\"card-text\"><small class=\"text-muted\"></small></p>\r\n           </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<note-create (onNoteAdd)=\"onNoteAdd($event)\" [movieId]=\"movieId\"></note-create>"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(33);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n    .card {\r\n        break-inside:avoid;\r\n        border-style: ridge;\r\n        border-width: 3px;\r\n    }\r\n    .card-deck{\r\n         column-count:3;\r\n         overflow-wrap:break-word;   \r\n    }\r\n", ""]);
	
	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(35);
	var router_1 = __webpack_require__(10);
	var note_service_1 = __webpack_require__(28);
	var note_1 = __webpack_require__(36);
	var NoteCreateComponent = (function () {
	    function NoteCreateComponent(noteService, location, route) {
	        this.noteService = noteService;
	        this.location = location;
	        this.route = route;
	        this.onNoteAdd = new core_1.EventEmitter();
	        this.movieId = 0;
	        this.note = new note_1.Note();
	    }
	    NoteCreateComponent.prototype.addNote = function () {
	        var _this = this;
	        this.noteService.addNote(this.note, this.movieId)
	            .then(function (res) { return _this.onNoteAdd.emit(res); });
	        // .then(()=>this.goBack());
	    };
	    NoteCreateComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    NoteCreateComponent.prototype.test = function () {
	        this.onNoteAdd.emit(new note_1.MockedNote().note);
	    };
	    return NoteCreateComponent;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], NoteCreateComponent.prototype, "onNoteAdd", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], NoteCreateComponent.prototype, "movieId", void 0);
	NoteCreateComponent = __decorate([
	    core_1.Component({
	        selector: "note-create",
	        template: __webpack_require__(37),
	        providers: [note_service_1.NoteService],
	    }),
	    __metadata("design:paramtypes", [note_service_1.NoteService,
	        common_1.Location,
	        router_1.ActivatedRoute])
	], NoteCreateComponent);
	exports.NoteCreateComponent = NoteCreateComponent;


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	var Note = (function () {
	    function Note() {
	        this.rate = 0;
	        this.comment = "";
	    }
	    return Note;
	}());
	exports.Note = Note;
	var MockedNote = (function () {
	    function MockedNote() {
	        this.note = new Note();
	        this.note.id = 100;
	        this.note.comment = "NIkusiowe";
	        this.note.rate = 5;
	    }
	    return MockedNote;
	}());
	exports.MockedNote = MockedNote;


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<h2> Nowa notatka </h2>\r\n\r\n<div>\r\n    <ul>\r\n    <li><label>Tytuł</label><input [(ngModel)]=\"note.comment\"/></li>\r\n    <li><label>Treść</label><input [(ngModel)]='note.rate'/></li>\r\n    <li><button (click)='addNote()'> Dodaj </button>\r\n    <li><button (click)='test()'> EMITUJ </button>\r\n    </ul>\r\n</div>\r\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var movie_1 = __webpack_require__(39);
	var movie_service_1 = __webpack_require__(40);
	var MoviesComponent = (function () {
	    function MoviesComponent(movieService) {
	        this.movieService = movieService;
	    }
	    MoviesComponent.prototype.addMovie = function () {
	        var _this = this;
	        var movie = new movie_1.Movie(document.getElementById("movie.title").value, parseFloat(document.getElementById("movie.year").value));
	        this.movieService
	            .addMovie(movie)
	            .then(function (movie) { return _this.movies.push(movie); });
	    };
	    MoviesComponent.prototype.ngOnInit = function () {
	        this.getMovies();
	    };
	    MoviesComponent.prototype.getMovies = function () {
	        var _this = this;
	        this.movieService
	            .getMovies()
	            .then(function (movies) { return _this.movies = movies; })
	            .catch();
	    };
	    MoviesComponent.prototype.deleteMovie = function (movie) {
	        var _this = this;
	        this.movieService.deleteMovie(movie.id)
	            .then(function (movies) { return _this.movies = _this.movies.filter(function (m) { return m !== movie; }); });
	    };
	    return MoviesComponent;
	}());
	MoviesComponent = __decorate([
	    core_1.Component({
	        selector: 'movies',
	        template: __webpack_require__(41),
	        styles: [__webpack_require__(42)],
	        providers: [movie_service_1.MovieService],
	    }),
	    __metadata("design:paramtypes", [movie_service_1.MovieService])
	], MoviesComponent);
	exports.MoviesComponent = MoviesComponent;


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var Movie = (function () {
	    function Movie(title, year) {
	        this.title = title;
	        this.year = year;
	    }
	    return Movie;
	}());
	exports.Movie = Movie;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(23);
	var core_1 = __webpack_require__(3);
	var MovieService = (function () {
	    function MovieService(http) {
	        this.http = http;
	        this.headers = new http_1.Headers({ 'content-type': 'application/json' });
	    }
	    ;
	    MovieService.prototype.addMovie = function (movie) {
	        return this.http
	            .post('movies', movie, this.headers)
	            .toPromise()
	            .then(function (res) { return res.json(); });
	    };
	    MovieService.prototype.getMovies = function () {
	        return this.http
	            .get('movies')
	            .toPromise()
	            .then(function (result) { return result.json(); });
	    };
	    MovieService.prototype.deleteMovie = function (id) {
	        return this.http
	            .delete('movies/' + ("" + id))
	            .toPromise()
	            .then(function () { return null; });
	    };
	    MovieService.prototype.getMovie = function (id) {
	        return this.http.get('movies/' + ("" + id))
	            .toPromise()
	            .then(function (response) { return response.json(); });
	    };
	    MovieService.prototype.search = function (actorName) {
	        return this.http
	            .get('actors/' + ("" + actorName))
	            .map(function (res) { return res.json(); });
	    };
	    MovieService.prototype.addActorToMovie = function (movieId, actorId) {
	        return this.http
	            .post('movies/' + ("" + movieId), actorId, this.headers)
	            .toPromise()
	            .then(function () { return null; });
	    };
	    return MovieService;
	}());
	MovieService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], MovieService);
	exports.MovieService = MovieService;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<h2> Nowy Film </h2>\r\n\r\n<div>\r\n    <ul>\r\n        \r\n    <li><label>Tytuł</label><input type=\"text\" id=\"movie.title\" required/></li>\r\n    <li><label>Rok</label><input type=\"number\" id='movie.year' max=\"2017\" min=\"1900\" value=\"2000\"/></li>\r\n    <li><button (click)='addMovie()'> Dodaj </button>\r\n    </ul>\r\n</div>\r\n\r\n<h1>My Movies </h1>\r\n\r\n\r\n<p *ngIf=\"!movies\"><em>Loading...</em></p>\r\n\r\n<div class=\"card-deck-wrapper\">\r\n    <div class=\"row\">\r\n    <div class=\"card-deck\">\r\n       \r\n       <div class=\"card\" *ngFor=\"let movie of movies\">\r\n            <div class=\"col-md-4\">\r\n           <div class=\"card-block\">\r\n               <table style=\"width:100%\">\r\n                   <tr>\r\n                       <th width=\"60%\"><a [routerLink]=\"['/movie-detail',movie.id]\" class=\"card-title\">{{movie.title}} </a></th>\r\n                       <th>Edit</th>\r\n                       <button (click)='deleteMovie(movie)'> Delete </button>\r\n               </table>\r\n               <p class=\"card-text\">{{movie.year}}</p>\r\n               <p class=\"card-text\"><small class=\"text-muted\"></small></p>\r\n           </div>\r\n           </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(43);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n    /*.card {\r\n        break-inside:avoid;\r\n        border-style: ridge;\r\n        border-width: 3px;\r\n    }\r\n    .card-deck{\r\n         column-count:3;\r\n         overflow-wrap:break-word;   \r\n    }*/\r\n", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(35);
	var router_1 = __webpack_require__(10);
	var movie_service_1 = __webpack_require__(40);
	var rxjs_1 = __webpack_require__(45);
	__webpack_require__(46);
	var MovieDetailComponent = (function () {
	    function MovieDetailComponent(location, route, movieService) {
	        this.location = location;
	        this.route = route;
	        this.movieService = movieService;
	        this.searchTerm = new rxjs_1.Subject();
	    }
	    ;
	    MovieDetailComponent.prototype.goBack = function () {
	        console.log(this.movie);
	        this.location.back();
	    };
	    MovieDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params
	            .switchMap(function (params) { return _this
	            .movieService.getMovie(+params['id']); })
	            .subscribe(function (movie) { return _this.movie = movie; });
	        this.actors = this.searchTerm
	            .debounceTime(600)
	            .distinctUntilChanged()
	            .switchMap(function (term) { return term
	            ? _this.movieService.search(term)
	            : rxjs_1.Observable.of([]); });
	    };
	    MovieDetailComponent.prototype.addActorToMovie = function (actor) {
	        this.movieService.addActorToMovie(this.movie.id, actor.id);
	    };
	    MovieDetailComponent.prototype.search = function (actorName) {
	        this.searchTerm.next(actorName);
	    };
	    return MovieDetailComponent;
	}());
	MovieDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'movie-detail',
	        template: __webpack_require__(47),
	        providers: [movie_service_1.MovieService],
	    }),
	    __metadata("design:paramtypes", [common_1.Location,
	        router_1.ActivatedRoute,
	        movie_service_1.MovieService])
	], MovieDetailComponent);
	exports.MovieDetailComponent = MovieDetailComponent;


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/switchMap");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<h2>Szczegóły filmu <h2>\r\n\r\n<div class=\"movie-detail\" *ngIf='movie' >\r\n    <ul>\r\n        <li> {{movie.title}} </li>\r\n        <li>  {{movie.year}} </li>\r\n    </ul>\r\n     <button (click)='goBack()'>back</button>\r\n</div>\r\n\r\n<div *ngIf = \"this.movie != null\">\r\n<notes [movieId] = \"this.movie.id\"> </notes>\r\n</div>\r\n\r\n<h4>Dodaj aktorów</h4>\r\n<div>\r\n<input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\"/>\r\n<div *ngFor=\"let actor of actors | async \"\r\n(click)=\"addActorToMovie(actor)\" class=\"search-result\" >\r\n{{actor.firstName}}  {{actor.lastName}}\r\n</div>\r\n\r\n</div>"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var actor_service_1 = __webpack_require__(49);
	var ActorsComponent = (function () {
	    function ActorsComponent(actorService) {
	        this.actorService = actorService;
	    }
	    ActorsComponent.prototype.ngOnInit = function () {
	        this.getActors();
	    };
	    ActorsComponent.prototype.getActors = function () {
	        var _this = this;
	        this.actorService
	            .getAllActors()
	            .then(function (actors) { return _this.actors = actors; });
	    };
	    ActorsComponent.prototype.onActorAdd = function (actor) {
	        this.actors.push(actor);
	    };
	    return ActorsComponent;
	}());
	ActorsComponent = __decorate([
	    core_1.Component({
	        selector: 'actors',
	        template: __webpack_require__(50),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService])
	], ActorsComponent);
	exports.ActorsComponent = ActorsComponent;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(23);
	var ActorService = (function () {
	    function ActorService(http) {
	        this.http = http;
	        this.actorURL = "actors/";
	        this.headers = new http_1.Headers({ 'content-type': 'application/json' });
	    }
	    ActorService.prototype.addActor = function (actor) {
	        return this.http
	            .post(this.actorURL, actor, this.headers)
	            .toPromise()
	            .then(function (res) { return res.json(); });
	    };
	    ActorService.prototype.getAllActors = function () {
	        return this.http
	            .get(this.actorURL)
	            .toPromise()
	            .then(function (res) { return res.json(); });
	    };
	    ActorService.prototype.getActorDetail = function (id) {
	        return this.http.get(this.actorURL + ("" + id))
	            .toPromise()
	            .then(function (res) { return res.json(); });
	    };
	    return ActorService;
	}());
	ActorService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], ActorService);
	exports.ActorService = ActorService;


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<actor-create (onActorAdd)='onActorAdd($event)'></actor-create>\r\n\r\n<div *ngFor=\"let actor of actors\">\r\n    <li><a [routerLink]=\"['/actor-detail',actor.id]\">  {{actor.firstName}} {{actor.lastName}} </a></li>\r\n</div>"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var actor_1 = __webpack_require__(52);
	var actor_service_1 = __webpack_require__(49);
	var ActorCreateComponent = (function () {
	    function ActorCreateComponent(actorService) {
	        this.actorService = actorService;
	        this.onActorAdd = new core_1.EventEmitter();
	        this.actor = new actor_1.Actor();
	    }
	    ActorCreateComponent.prototype.addActor = function (actor) {
	        var _this = this;
	        this.actorService.addActor(actor)
	            .then(function (res) { return _this.onActorAdd.emit(res); });
	    };
	    return ActorCreateComponent;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], ActorCreateComponent.prototype, "onActorAdd", void 0);
	ActorCreateComponent = __decorate([
	    core_1.Component({
	        selector: 'actor-create',
	        template: __webpack_require__(53),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService])
	], ActorCreateComponent);
	exports.ActorCreateComponent = ActorCreateComponent;


/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	var Actor = (function () {
	    function Actor() {
	    }
	    return Actor;
	}());
	exports.Actor = Actor;


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div>\r\n  <div class=\"form-group\">\r\n    <label for=\"FirstName\">Imie </label>\r\n    <input type=\"text\" [(ngModel)]=\"actor.firstName\" name=\"first\" class=\"form-control\" id=\"FirstName\" placeholder=\"FirstName\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"LastName\">Nazwisko </label>\r\n    <input type=\"text\" [(ngModel)]=\"actor.lastName\" class=\"form-control\" id=\"LastName\" placeholder=\"LastName\">\r\n  </div>\r\n   <div class=\"form-group\">\r\n    <label for=\"Birthday\">Data Urodzenia </label>\r\n    <input type=\"date\" [(ngModel)]=\"actor.birthday\" class=\"form-control\" id=\"Birthday\" placeholder=\"Birthday\">\r\n  </div>\r\n\r\n  <button (click)='addActor(actor)' class=\"btn btn-default\">Dodaj </button>\r\n  </div>\r\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var actor_service_1 = __webpack_require__(49);
	var router_1 = __webpack_require__(10);
	var ActorDetailComponent = (function () {
	    function ActorDetailComponent(actorService, route) {
	        this.actorService = actorService;
	        this.route = route;
	    }
	    ActorDetailComponent.prototype.getActorDetail = function (id) {
	        var _this = this;
	        this.actorService.getActorDetail(id)
	            .then(function (actor) { return _this.actor = actor; });
	        //    .then(()=>console.log(this.actor));
	    };
	    ActorDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params
	            .subscribe(function (params) {
	            return _this.getActorDetail(+params['id']);
	        });
	    };
	    return ActorDetailComponent;
	}());
	ActorDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'actor-detail',
	        template: __webpack_require__(55),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService,
	        router_1.ActivatedRoute])
	], ActorDetailComponent);
	exports.ActorDetailComponent = ActorDetailComponent;


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<p *ngIf=\"!actor\"><em>Loading...</em></p>\r\n<div *ngIf=\"actor\"> \r\n    <ul>\r\n    <li> {{actor.firstName}} </li>\r\n    <li> {{actor.lastName}} </li>\r\n    <li> {{actor.birthday}} </li>\r\n</ul>\r\n</div>\r\n"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWY0ODg0ZGFiMWVjZTg0MGY0NjAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpvbmUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3RlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9TdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzPzNkZGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3M/N2ZjYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3Iuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztB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Y0FDbkMsSUFBSSxDQUFDLGVBQUssSUFBSSxZQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssRUFBaEIsQ0FBZ0IsQ0FBQztTQUNwQyx5Q0FBeUM7S0FFeEMsQ0FBQztLQUNELHVDQUFRLEdBQVI7U0FBQSxpQkFNQztTQUxHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtjQUNoQixTQUFTLENBQUMsVUFBQyxNQUFhO2FBQ3pCLFlBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBbEMsQ0FBa0MsQ0FBQyxDQUFDO0tBR3hDLENBQUM7S0FFTCwyQkFBQztBQUFELEVBQUM7QUF0QlkscUJBQW9CO0tBTmhDLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsY0FBYztTQUN4QixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUErQixDQUFDO1NBQ2xELFNBQVMsRUFBQyxDQUFDLDRCQUFZLENBQUM7TUFDM0IsQ0FBQztzQ0FLMkIsNEJBQVk7U0FDbkIsdUJBQWM7SUFKdkIsb0JBQW9CLENBc0JoQztBQXRCWSxxREFBb0I7Ozs7Ozs7QUNWakMsbUhBQWtILGlCQUFpQixxQkFBcUIsZ0JBQWdCLHFCQUFxQixnQkFBZ0IsOEIiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZjQ4ODRkYWIxZWNlODQwZjQ2MCIsImltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQnO1xyXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIlxuLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXyA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBfX2NvcmVfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5sZXQgcGF0Y2ggPSBmYWxzZTtcbmlmICghX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG59XG5cblxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuaWYgKHBhdGNoKSB7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtOb3Rlc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tm90ZUNyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW92aWVzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vdmllRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdG9yc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RvckNyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RvckRldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgbWRjIGZyb20gJ21hdGVyaWFsLWNvbXBvbmVudHMtd2ViJztcclxuXHJcbi8vaW1wb3J0IHtjYXJkIGFzIE1DRGNhcmR9IGZyb20gJ0BtYXRlcmlhbC9jYXJkJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgQ291bnRlckNvbXBvbmVudCxcclxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBOb3Rlc0NvbXBvbmVudCxcclxuICAgICAgICBOb3RlQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIE1vdmllc0NvbXBvbmVudCxcclxuICAgICAgICBNb3ZpZURldGFpbENvbXBvbmVudCxcclxuICAgICAgICBBY3RvcnNDb21wb25lbnQsXHJcbiAgICAgICAgQWN0b3JDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgICAgQWN0b3JEZXRhaWxDb21wb25lbnQsXHJcblxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZmV0Y2gtZGF0YScsIGNvbXBvbmVudDogRmV0Y2hEYXRhQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ25vdGVzJyxjb21wb25lbnQ6Tm90ZXNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdub3RlLWNyZWF0ZScsY29tcG9uZW50Ok5vdGVDcmVhdGVDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdtb3ZpZXMnLGNvbXBvbmVudDpNb3ZpZXNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdtb3ZpZS1kZXRhaWwvOmlkJyxjb21wb25lbnQ6TW92aWVEZXRhaWxDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3RvcnMnLGNvbXBvbmVudDpBY3RvcnNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3RvcnMtY3JlYXRlJyxjb21wb25lbnQ6QWN0b3JDcmVhdGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWN0b3ItZGV0YWlsLzppZCcsY29tcG9uZW50OkFjdG9yRGV0YWlsQ29tcG9uZW50fSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAvLyBzdHlsZXM6IFtyZXF1aXJlKCcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIuc2NzcycpXSxcclxuICAgIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXHJcXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxyXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5NeU1vdmllczwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbW92aWVzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmlsbXlcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYWN0b3JzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gQWt0b3J6eVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcclxcbmxpLmxpbmstYWN0aXZlIGEsXFxyXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcclxcbi5tYWluLW5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcclxcbiAgICAubWFpbi1uYXYge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgdWwge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBhIHtcXHJcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxib2R5IGNsYXNzPVxcXCJtZGMtdGhlbWUtLWRhcmtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZGMtY2FyZFxcXCI+XFxyXFxuICA8c2VjdGlvbiBjbGFzcz1cXFwibWRjLWNhcmRfX3ByaW1hcnlcXFwiPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcIm1kYy1jYXJkX190aXRsZSBtZGMtY2FyZF9fdGl0bGUtLWxhcmdlXFxcIj5UaXRsZSBnb2VzIGhlcmU8L2gxPlxcclxcbiAgICA8aDIgY2xhc3M9XFxcIm1kYy1jYXJkX19zdWJ0aXRsZVxcXCI+U3VidGl0bGUgaGVyZTwvaDI+XFxyXFxuICA8L3NlY3Rpb24+XFxyXFxuICA8c2VjdGlvbiBjbGFzcz1cXFwibWRjLWNhcmRfX3N1cHBvcnRpbmctdGV4dFxcXCI+XFxyXFxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxcclxcbiAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxcclxcbiAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxcclxcbiAgICBjb21tb2RvIGNvbnNlcXVhdC5cXHJcXG4gIDwvc2VjdGlvbj5cXHJcXG4gIDxzZWN0aW9uIGNsYXNzPVxcXCJtZGMtY2FyZF9fYWN0aW9uc1xcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcIm1kYy1idXR0b24gbWRjLWJ1dHRvbi0tY29tcGFjdCBtZGMtY2FyZF9fYWN0aW9uXFxcIj5BY3Rpb24gMTwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJtZGMtYnV0dG9uIG1kYy1idXR0b24tLWNvbXBhY3QgbWRjLWNhcmRfX2FjdGlvblxcXCI+QWN0aW9uIDI8L2J1dHRvbj5cXHJcXG4gIDwvc2VjdGlvbj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtZGMtY2FyZFxcXCI+XFxyXFxuICA8c2VjdGlvbiBjbGFzcz1cXFwibWRjLWNhcmRfX3ByaW1hcnlcXFwiPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcIm1kYy1jYXJkX190aXRsZSBtZGMtY2FyZF9fdGl0bGUtLWxhcmdlXFxcIj5UaXRsZSBnb2VzIGhlcmU8L2gxPlxcclxcbiAgICA8aDIgY2xhc3M9XFxcIm1kYy1jYXJkX19zdWJ0aXRsZVxcXCI+U3VidGl0bGUgaGVyZTwvaDI+XFxyXFxuICA8L3NlY3Rpb24+XFxyXFxuICA8c2VjdGlvbiBjbGFzcz1cXFwibWRjLWNhcmRfX3N1cHBvcnRpbmctdGV4dFxcXCI+XFxyXFxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxcclxcbiAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxcclxcbiAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxcclxcbiAgICBjb21tb2RvIGNvbnNlcXVhdC5cXHJcXG4gIDwvc2VjdGlvbj5cXHJcXG4gIDxzZWN0aW9uIGNsYXNzPVxcXCJtZGMtY2FyZF9fYWN0aW9uc1xcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcIm1kYy1idXR0b24gbWRjLWJ1dHRvbi0tY29tcGFjdCBtZGMtY2FyZF9fYWN0aW9uXFxcIj5BY3Rpb24gMTwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJtZGMtYnV0dG9uIG1kYy1idXR0b24tLWNvbXBhY3QgbWRjLWNhcmRfX2FjdGlvblxcXCI+QWN0aW9uIDI8L2J1dHRvbj5cXHJcXG4gIDwvc2VjdGlvbj5cXHJcXG48L2Rpdj5cXHJcXG48L2JvZHk+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xyXG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmVjYXN0cyA9IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmNyZW1lbnRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5pbXBvcnQge05vdGVTZXJ2aWNlfSBmcm9tICcuL25vdGUuc2VydmljZSc7XHJcbmltcG9ydCB7Tm90ZX0gZnJvbSAnLi9ub3RlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgLy8gbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbm90ZXMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbm90ZXMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbm90ZXMuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczpbTm90ZVNlcnZpY2VdLFxyXG5cclxufSlcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE5vdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgQElucHV0KCkgcHVibGljIG1vdmllSWQ7IFxyXG4gICAgbm90ZXM6Tm90ZVtdPW5ldyBBcnJheTxOb3RlPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbm90ZVNlcnZpY2U6Tm90ZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxyXG4gICAgKXtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RlcygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5ub3RlU2VydmljZS5nZXROb3Rlcyh0aGlzLm1vdmllSWQpXHJcbiAgICAgICAgIC50aGVuKG5vdGVzID0+IHRoaXMubm90ZXM9bm90ZXMpXHJcbiAgICAgICAgLy8gLmNhdGNoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgZ290b05vdGVDcmVhdGUoKTp2b2lke1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbm90ZS1jcmVhdGUvJ10pXHJcbiAgICB9O1xyXG4gICAgb25Ob3RlQWRkKG5vdGU6Tm90ZSl7XHJcbiAgICAgICAgdGhpcy5ub3Rlcy5wdXNoKG5vdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvbW1lbnQobm90ZTpOb3RlKXtcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLmRlbGV0ZUNvbW1lbnQodGhpcy5tb3ZpZUlkLG5vdGUuaWQpXHJcbiAgICAgICAgLnRoZW4oKCk9PnRoaXMubm90ZXM9dGhpcy5ub3Rlcy5maWx0ZXIobiA9PiBuICE9IG5vdGUpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgIG5nT25Jbml0KCk6dm9pZHtcclxuICAgICAgICAgdGhpcy5nZXROb3RlcygpO1xyXG4gICAgIH1cclxuICBcclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQudHMiLCJpbXBvcnQge0luamVjdGFibGUsT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOb3RlfSBmcm9tICcuL25vdGUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIG5vdGVzVVJMID0gJ3Jldmlldy8nO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXI9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHB1YmxpYyBub3Rlc1NvdXJjZSA9IG5ldyBTdWJqZWN0PE5vdGU+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgICApIHtcclxuICAgICAgICBcclxuICAgICB9O1xyXG5cclxuICAgIGdldE5vdGVzKG1vdmllSWQ6bnVtYmVyKTogUHJvbWlzZTxOb3RlW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLm5vdGVzVVJMK2Ake21vdmllSWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpOyBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGFkZE5vdGUobm90ZTpOb3RlLG1vdmllSWQ6bnVtYmVyKTpQcm9taXNlPE5vdGU+eyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvZGFuaWUgbm90a2lcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KHRoaXMubm90ZXNVUkwrYCR7bW92aWVJZH1gXHJcbiAgICAgICAgICAgICxKU09OLnN0cmluZ2lmeShub3RlKVxyXG4gICAgICAgICAgICAse2hlYWRlcnM6dGhpcy5oZWFkZXJ9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gaGFuZGxlRXJyb3IoZXJyb3I6YW55KTpQcm9taXNlPGFueT57XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImJsYWQgd3lzdGFwaWxcIixlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGVDb21tZW50KG1vdmllSWQ6bnVtYmVyLGNvbW1lbnRJZDpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5kZWxldGUodGhpcy5ub3Rlc1VSTCtgJHttb3ZpZUlkfS8ke2NvbW1lbnRJZH1gKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKCgpPT5udWxsKVxyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmllIG1hIG1uaWVcIik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPk15IE5vdGVzIDwvaDE+XFxyXFxuXFxyXFxuPCEtLTxsaSAqbmdGb3I9J2xldCBub3RlIG9mIG5vdGVzJz5cXHJcXG4gICAgPHNwYW4+IHt7bm90ZS50aXRsZX19IDwvc3Bhbj5cXHJcXG48L2xpPi0tPlxcclxcblxcclxcbjwhLS08cD5cXHJcXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJnb3RvTm90ZUNyZWF0ZSgpXFxcIj4gIENyZWF0ZSBOZXcgIDwvYnV0dG9uPlxcclxcbjwvcD4tLT5cXHJcXG48cCAqbmdJZj1cXFwiIW5vdGVzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQtZGVjay13cmFwcGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrXFxcIj5cXHJcXG4gICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nRm9yPVxcXCJsZXQgbm90ZSBvZiBub3Rlc1xcXCI+XFxyXFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XFxcIjYwJVxcXCI+PGEgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnt7bm90ZS5jb21tZW50fX08L2E+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aD48YnV0dG9uIChjbGljayk9J2RlbGV0ZUNvbW1lbnQobm90ZSknPlVzdcWEIDwvYnV0dG9uPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj57e25vdGUucmF0ZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPjxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+PC9zbWFsbD48L3A+XFxyXFxuICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48bm90ZS1jcmVhdGUgKG9uTm90ZUFkZCk9XFxcIm9uTm90ZUFkZCgkZXZlbnQpXFxcIiBbbW92aWVJZF09XFxcIm1vdmllSWRcXFwiPjwvbm90ZS1jcmVhdGU+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm90ZXMuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4gICAgLmNhcmQge1xcclxcbiAgICAgICAgYnJlYWstaW5zaWRlOmF2b2lkO1xcclxcbiAgICAgICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkLWRlY2t7XFxyXFxuICAgICAgICAgY29sdW1uLWNvdW50OjM7XFxyXFxuICAgICAgICAgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkOyAgIFxcclxcbiAgICB9XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsSW5wdXQsRXZlbnRFbWl0dGVyLE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7UGFyYW1zLEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcclxuXHJcbmltcG9ydCB7Tm90ZVNlcnZpY2V9IGZyb20gJy4vbm90ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtOb3RlLE1vY2tlZE5vdGV9IGZyb20gJy4vbm90ZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJub3RlLWNyZWF0ZVwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW05vdGVTZXJ2aWNlXSxcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZUNyZWF0ZUNvbXBvbmVudHtcclxuICAgIG5vdGU6Tm90ZTtcclxuICAgIEBPdXRwdXQoKSBvbk5vdGVBZGQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGU+KClcclxuICAgIEBJbnB1dCgpIG1vdmllSWQ9MDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5vdGVTZXJ2aWNlOk5vdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246TG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5ub3RlPW5ldyBOb3RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTm90ZSgpOnZvaWR7ICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2UuYWRkTm90ZSh0aGlzLm5vdGUsdGhpcy5tb3ZpZUlkKVxyXG4gICAgICAgIC50aGVuKHJlcz0+dGhpcy5vbk5vdGVBZGQuZW1pdChyZXMpKVxyXG4gICAgICAgLy8gLnRoZW4oKCk9PnRoaXMuZ29CYWNrKCkpO1xyXG4gICAgfVxyXG4gICAgZ29CYWNrKCk6dm9pZHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICAgIHRlc3QoKXtcclxuICAgICAgICB0aGlzLm9uTm90ZUFkZC5lbWl0KG5ldyBNb2NrZWROb3RlKCkubm90ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBOb3RlIHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHJhdGU6IG51bWJlcjtcclxuICAgIGNvbW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmF0ZT0wO1xyXG4gICAgICAgIHRoaXMuY29tbWVudD1cIlwiO1xyXG4gICAgfVxyXG59ICAgXHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja2VkTm90ZXtcclxuICAgIG5vdGU6Tm90ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ub3RlPW5ldyBOb3RlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZS5pZD0xMDA7XHJcbiAgICAgICAgdGhpcy5ub3RlLmNvbW1lbnQ9XCJOSWt1c2lvd2VcIjtcclxuICAgICAgICB0aGlzLm5vdGUucmF0ZT01O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPiBOb3dhIG5vdGF0a2EgPC9oMj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgIDxsaT48bGFiZWw+VHl0dcWCPC9sYWJlbD48aW5wdXQgWyhuZ01vZGVsKV09XFxcIm5vdGUuY29tbWVudFxcXCIvPjwvbGk+XFxyXFxuICAgIDxsaT48bGFiZWw+VHJlxZvEhzwvbGFiZWw+PGlucHV0IFsobmdNb2RlbCldPSdub3RlLnJhdGUnLz48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiAoY2xpY2spPSdhZGROb3RlKCknPiBEb2RhaiA8L2J1dHRvbj5cXHJcXG4gICAgPGxpPjxidXR0b24gKGNsaWNrKT0ndGVzdCgpJz4gRU1JVFVKIDwvYnV0dG9uPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01vdmllfSBmcm9tICcuL21vdmllJztcclxuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSdcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vdmllcycsXHJcbiAgICB0ZW1wbGF0ZTogIHJlcXVpcmUoJy4vbW92aWVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL21vdmllcy5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbTW92aWVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbW92aWVzOk1vdmllW107XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgIHByaXZhdGUgbW92aWVTZXJ2aWNlOk1vdmllU2VydmljZSxcclxuICAgICl7fVxyXG4gICAgYWRkTW92aWUoKTp2b2lke1xyXG4gICAgICAgIHZhciBtb3ZpZSA9IG5ldyBNb3ZpZSggICAgICAgIFxyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmllLnRpdGxlXCIpKS52YWx1ZSxcclxuICAgICAgICBwYXJzZUZsb2F0KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmllLnllYXJcIikpLnZhbHVlKVxyXG4gICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmllU2VydmljZVxyXG4gICAgICAgIC5hZGRNb3ZpZShtb3ZpZSlcclxuICAgICAgICAudGhlbihtb3ZpZSA9PnRoaXMubW92aWVzLnB1c2gobW92aWUpKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6dm9pZHtcclxuICAgICAgICB0aGlzLmdldE1vdmllcygpO1xyXG4gICAgfVxyXG4gICAgZ2V0TW92aWVzKCk6dm9pZHtcclxuICAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2VcclxuICAgICAgICAuZ2V0TW92aWVzKClcclxuICAgICAgICAudGhlbihtb3ZpZXM9PnRoaXMubW92aWVzPW1vdmllcylcclxuICAgICAgICAuY2F0Y2goKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZU1vdmllKG1vdmllOk1vdmllKTp2b2lke1xyXG4gICAgICAgIHRoaXMubW92aWVTZXJ2aWNlLmRlbGV0ZU1vdmllKG1vdmllLmlkKVxyXG4gICAgICAgIC50aGVuKG1vdmllcz0+dGhpcy5tb3ZpZXM9dGhpcy5tb3ZpZXMuZmlsdGVyKG09PiBtIT09bW92aWUpKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgTW92aWV7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6c3RyaW5nLHllYXI6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy50aXRsZT10aXRsZTtcclxuICAgICAgICB0aGlzLnllYXI9eWVhcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUudHMiLCJpbXBvcnQgeyBIdHRwICwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydHtNb3ZpZX0gZnJvbSAnLi9tb3ZpZSc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0b3J9IGZyb20gJy4uL2FjdG9ycy9hY3Rvcic7XHJcbmltcG9ydHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZVNlcnZpY2V7XHJcbiAgICBwcml2YXRlIGhlYWRlcnM6SGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgICApIHsgfTtcclxuICAgIFxyXG4gICAgYWRkTW92aWUobW92aWU6TW92aWUpOlByb21pc2U8TW92aWU+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucG9zdCgnbW92aWVzJyxtb3ZpZSx0aGlzLmhlYWRlcnMpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIGdldE1vdmllcygpOlByb21pc2U8TW92aWVbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5nZXQoJ21vdmllcycpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlTW92aWUoaWQ6bnVtYmVyKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAuZGVsZXRlKCdtb3ZpZXMvJytgJHtpZH1gKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKCgpPT5udWxsKTtcclxuICAgIH1cclxuICAgIGdldE1vdmllKGlkOm51bWJlcik6UHJvbWlzZTxNb3ZpZT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21vdmllcy8nK2Ake2lkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH1cclxuICAgIHNlYXJjaChhY3Rvck5hbWU6c3RyaW5nKTpPYnNlcnZhYmxlPEFjdG9yW10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAuZ2V0KCdhY3RvcnMvJyArIGAke2FjdG9yTmFtZX1gKVxyXG4gICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGFkZEFjdG9yVG9Nb3ZpZShtb3ZpZUlkOm51bWJlcixhY3RvcklkOm51bWJlcik6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoJ21vdmllcy8nK2Ake21vdmllSWR9YCxhY3RvcklkLHRoaXMuaGVhZGVycylcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbigoKT0+bnVsbClcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPiBOb3d5IEZpbG0gPC9oMj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPGxpPjxsYWJlbD5UeXR1xYI8L2xhYmVsPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibW92aWUudGl0bGVcXFwiIHJlcXVpcmVkLz48L2xpPlxcclxcbiAgICA8bGk+PGxhYmVsPlJvazwvbGFiZWw+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgaWQ9J21vdmllLnllYXInIG1heD1cXFwiMjAxN1xcXCIgbWluPVxcXCIxOTAwXFxcIiB2YWx1ZT1cXFwiMjAwMFxcXCIvPjwvbGk+XFxyXFxuICAgIDxsaT48YnV0dG9uIChjbGljayk9J2FkZE1vdmllKCknPiBEb2RhaiA8L2J1dHRvbj5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48aDE+TXkgTW92aWVzIDwvaDE+XFxyXFxuXFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFtb3ZpZXNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrLXdyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2tcXFwiPlxcclxcbiAgICAgICBcXHJcXG4gICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nRm9yPVxcXCJsZXQgbW92aWUgb2YgbW92aWVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XFxcIjYwJVxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tb3ZpZS1kZXRhaWwnLG1vdmllLmlkXVxcXCIgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnt7bW92aWUudGl0bGV9fSA8L2E+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT0nZGVsZXRlTW92aWUobW92aWUpJz4gRGVsZXRlIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3ttb3ZpZS55ZWFyfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+PHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj48L3NtYWxsPjwvcD5cXHJcXG4gICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW92aWVzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4gICAgLyouY2FyZCB7XFxyXFxuICAgICAgICBicmVhay1pbnNpZGU6YXZvaWQ7XFxyXFxuICAgICAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhcmQtZGVja3tcXHJcXG4gICAgICAgICBjb2x1bW4tY291bnQ6MztcXHJcXG4gICAgICAgICBvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7ICAgXFxyXFxuICAgIH0qL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNb3ZpZX0gZnJvbSBcIi4vbW92aWVcIjtcclxuaW1wb3J0IHtBY3Rvcn0gZnJvbSBcIi4uL2FjdG9ycy9hY3RvclwiO1xyXG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7UGFyYW1zLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQge01vdmllU2VydmljZX0gZnJvbSAnLi9tb3ZpZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLFN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtb3ZpZS1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbW92aWUtZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6W01vdmllU2VydmljZV0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbW92aWU6TW92aWU7XHJcbiAgICBhY3RvcnM6T2JzZXJ2YWJsZTxBY3RvcltdPjtcclxuICAgIHByaXZhdGUgc2VhcmNoVGVybSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246TG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIG1vdmllU2VydmljZTpNb3ZpZVNlcnZpY2UsXHJcblxyXG4gICAgKXt9O1xyXG5cclxuICAgIGdvQmFjaygpOnZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpZSlcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMgXHJcbiAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOlBhcmFtcyk9PnRoaXNcclxuICAgICAgICAubW92aWVTZXJ2aWNlLmdldE1vdmllKCtwYXJhbXNbJ2lkJ10pKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobW92aWUgPT4gdGhpcy5tb3ZpZT1tb3ZpZSkgIFxyXG5cclxuICAgICAgICB0aGlzLmFjdG9ycyA9IHRoaXMuc2VhcmNoVGVybVxyXG4gICAgICAgIC5kZWJvdW5jZVRpbWUoNjAwKVxyXG4gICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgLnN3aXRjaE1hcCh0ZXJtPT4gdGVybVxyXG4gICAgICAgID8gdGhpcy5tb3ZpZVNlcnZpY2Uuc2VhcmNoKHRlcm0pXHJcbiAgICAgICAgOiBPYnNlcnZhYmxlLm9mPEFjdG9yW10+KFtdKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGFkZEFjdG9yVG9Nb3ZpZShhY3RvcjpBY3Rvcil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2UuYWRkQWN0b3JUb01vdmllKHRoaXMubW92aWUuaWQgLGFjdG9yLmlkKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHNlYXJjaChhY3Rvck5hbWU6c3RyaW5nKTp2b2lke1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGVybS5uZXh0KGFjdG9yTmFtZSlcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqc1wiXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5TemN6ZWfDs8WCeSBmaWxtdSA8aDI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW92aWUtZGV0YWlsXFxcIiAqbmdJZj0nbW92aWUnID5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpPiB7e21vdmllLnRpdGxlfX0gPC9saT5cXHJcXG4gICAgICAgIDxsaT4gIHt7bW92aWUueWVhcn19IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgICA8YnV0dG9uIChjbGljayk9J2dvQmFjaygpJz5iYWNrPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZiA9IFxcXCJ0aGlzLm1vdmllICE9IG51bGxcXFwiPlxcclxcbjxub3RlcyBbbW92aWVJZF0gPSBcXFwidGhpcy5tb3ZpZS5pZFxcXCI+IDwvbm90ZXM+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGg0PkRvZGFqIGFrdG9yw7N3PC9oND5cXHJcXG48ZGl2PlxcclxcbjxpbnB1dCAjc2VhcmNoQm94IGlkPVxcXCJzZWFyY2gtYm94XFxcIiAoa2V5dXApPVxcXCJzZWFyY2goc2VhcmNoQm94LnZhbHVlKVxcXCIvPlxcclxcbjxkaXYgKm5nRm9yPVxcXCJsZXQgYWN0b3Igb2YgYWN0b3JzIHwgYXN5bmMgXFxcIlxcclxcbihjbGljayk9XFxcImFkZEFjdG9yVG9Nb3ZpZShhY3RvcilcXFwiIGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIiA+XFxyXFxue3thY3Rvci5maXJzdE5hbWV9fSAge3thY3Rvci5sYXN0TmFtZX19XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdG9yU2VydmljZX0gZnJvbSAnLi9hY3Rvci5zZXJ2aWNlJ1xyXG5pbXBvcnR7QWN0b3J9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnR7QWN0b3JDcmVhdGVDb21wb25lbnR9IGZyb20gJy4vYWN0b3ItY3JlYXRlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYWN0b3JzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9ycy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbQWN0b3JTZXJ2aWNlXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3RvcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBhY3RvcnM6QWN0b3JbXTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0b3JTZXJ2aWNlOkFjdG9yU2VydmljZSxcclxuICAgICl7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5nZXRBY3RvcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RvcnMoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuYWN0b3JTZXJ2aWNlXHJcbiAgICAgICAgLmdldEFsbEFjdG9ycygpXHJcbiAgICAgICAgLnRoZW4oYWN0b3JzPT50aGlzLmFjdG9ycz1hY3RvcnMpO1xyXG4gICAgfVxyXG4gICAgb25BY3RvckFkZChhY3RvcjpBY3Rvcil7XHJcbiAgICAgICAgdGhpcy5hY3RvcnMucHVzaChhY3Rvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQudHMiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydHtIdHRwLEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnR7QWN0b3J9IGZyb20gXCIuL2FjdG9yXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3RvclNlcnZpY2V7XHJcbiAgICBwcml2YXRlIGFjdG9yVVJMPVwiYWN0b3JzL1wiO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOkh0dHBcclxuICAgICAgICApe31cclxuICAgICAgICBcclxuICAgIGFkZEFjdG9yKGFjdG9yOkFjdG9yKTpQcm9taXNlPEFjdG9yPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QodGhpcy5hY3RvclVSTCxhY3Rvcix0aGlzLmhlYWRlcnMpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQWN0b3JzKCk6UHJvbWlzZTxBY3RvcltdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmdldCh0aGlzLmFjdG9yVVJMKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcik6UHJvbWlzZTxBY3Rvcj57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3RvclVSTCArIGAke2lkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3Iuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YWN0b3ItY3JlYXRlIChvbkFjdG9yQWRkKT0nb25BY3RvckFkZCgkZXZlbnQpJz48L2FjdG9yLWNyZWF0ZT5cXHJcXG5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IGFjdG9yIG9mIGFjdG9yc1xcXCI+XFxyXFxuICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnL2FjdG9yLWRldGFpbCcsYWN0b3IuaWRdXFxcIj4gIHt7YWN0b3IuZmlyc3ROYW1lfX0ge3thY3Rvci5sYXN0TmFtZX19IDwvYT48L2xpPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyLE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0b3J9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQge0FjdG9yU2VydmljZX0gZnJvbSAnLi9hY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2FjdG9yLWNyZWF0ZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0FjdG9yU2VydmljZV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JDcmVhdGVDb21wb25lbnR7XHJcbiAgICBhY3RvcjpBY3RvcjtcclxuICAgIEBPdXRwdXQoKSBvbkFjdG9yQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxBY3Rvcj4oKTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0b3JTZXJ2aWNlOkFjdG9yU2VydmljZSxcclxuICAgICAgIFxyXG4gICAgKXtcclxuICAgICAgICAgdGhpcy5hY3Rvcj1uZXcgQWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3RvcihhY3RvcjpBY3RvcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFjdG9yU2VydmljZS5hZGRBY3RvcihhY3RvcilcclxuICAgICAgICAudGhlbihyZXM9PnRoaXMub25BY3RvckFkZC5lbWl0KHJlcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgQWN0b3J7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICBmaXJzdE5hbWU6c3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6c3RyaW5nO1xyXG4gICAgYmlydGhkYXk6RGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICA8ZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcIkZpcnN0TmFtZVxcXCI+SW1pZSA8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImFjdG9yLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJGaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdE5hbWVcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwiTGFzdE5hbWVcXFwiPk5hendpc2tvIDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWN0b3IubGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJMYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3ROYW1lXFxcIj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJCaXJ0aGRheVxcXCI+RGF0YSBVcm9kemVuaWEgPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIFsobmdNb2RlbCldPVxcXCJhY3Rvci5iaXJ0aGRheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIkJpcnRoZGF5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQmlydGhkYXlcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8YnV0dG9uIChjbGljayk9J2FkZEFjdG9yKGFjdG9yKScgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RG9kYWogPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBY3RvclNlcnZpY2V9IGZyb20gJy4vYWN0b3Iuc2VydmljZSdcclxuaW1wb3J0IHtBY3Rvcn0gZnJvbSAnLi9hY3RvcidcclxuaW1wb3J0e0FjdGl2YXRlZFJvdXRlLFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWN0b3ItZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgYWN0b3I6QWN0b3I7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApXHJcbiAgICB7fVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcil7XHJcbiAgICAgICB0aGlzLmFjdG9yU2VydmljZS5nZXRBY3RvckRldGFpbChpZClcclxuICAgICAgIC50aGVuKGFjdG9yID0+IHRoaXMuYWN0b3I9YWN0b3IpXHJcbiAgIC8vICAgIC50aGVuKCgpPT5jb25zb2xlLmxvZyh0aGlzLmFjdG9yKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgLnN1YnNjcmliZSgocGFyYW1zOlBhcmFtcyk9PlxyXG4gICAgICAgIHRoaXMuZ2V0QWN0b3JEZXRhaWwoK3BhcmFtc1snaWQnXSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCAqbmdJZj1cXFwiIWFjdG9yXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcbjxkaXYgKm5nSWY9XFxcImFjdG9yXFxcIj4gXFxyXFxuICAgIDx1bD5cXHJcXG4gICAgPGxpPiB7e2FjdG9yLmZpcnN0TmFtZX19IDwvbGk+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5sYXN0TmFtZX19IDwvbGk+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5iaXJ0aGRheX19IDwvbGk+XFxyXFxuPC91bD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
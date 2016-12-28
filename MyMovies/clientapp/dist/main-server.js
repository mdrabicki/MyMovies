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
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
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
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
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
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(8);
	var navmenu_component_1 = __webpack_require__(13);
	var home_component_1 = __webpack_require__(17);
	var fetchdata_component_1 = __webpack_require__(19);
	var counter_component_1 = __webpack_require__(22);
	var notes_component_1 = __webpack_require__(24);
	var note_create_component_1 = __webpack_require__(31);
	var movies_component_1 = __webpack_require__(35);
	var movie_detail_component_1 = __webpack_require__(41);
	var actors_component_1 = __webpack_require__(42);
	var actor_create_component_1 = __webpack_require__(45);
	var actor_detail_component_1 = __webpack_require__(48);
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
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

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
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(9),
	        styles: [__webpack_require__(10)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(11);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 12 */
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
/* 13 */
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
	        template: __webpack_require__(14),
	        styles: [__webpack_require__(15)]
	    }),
	    __metadata("design:paramtypes", [])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">MyMovies</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                 <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/movies']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Filmy\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/actors']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Aktorzy\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(16);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 17 */
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
	        template: __webpack_require__(18)
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n    <!--<notes></notes>-->\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>\r\n"

/***/ },
/* 19 */
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
	var http_1 = __webpack_require__(20);
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
	        template: __webpack_require__(21)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

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
	        template: __webpack_require__(23)
	    }),
	    __metadata("design:paramtypes", [])
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ },
/* 24 */
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
	var router_1 = __webpack_require__(7);
	var note_service_1 = __webpack_require__(25);
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
	        template: __webpack_require__(28),
	        styles: [__webpack_require__(29)],
	        providers: [note_service_1.NoteService],
	    }),
	    __metadata("design:paramtypes", [note_service_1.NoteService,
	        router_1.Router])
	], NotesComponent);
	exports.NotesComponent = NotesComponent;


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
	var http_1 = __webpack_require__(20);
	var Subject_1 = __webpack_require__(26);
	__webpack_require__(27);
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
/* 26 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Subject");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<h1>My Notes </h1>\r\n\r\n<!--<li *ngFor='let note of notes'>\r\n    <span> {{note.title}} </span>\r\n</li>-->\r\n\r\n<!--<p>\r\n    <button (click)=\"gotoNoteCreate()\">  Create New  </button>\r\n</p>-->\r\n<p *ngIf=\"!notes\"><em>Loading...</em></p>\r\n<div class=\"card-deck-wrapper\">\r\n    <div class=\"card-deck\">\r\n       <div class=\"card\" *ngFor=\"let note of notes\">\r\n           <div class=\"card-block\">\r\n               <table style=\"width:100%\">\r\n                   <tr>\r\n                       <th width=\"60%\"><a class=\"card-title\">{{note.comment}}</a></th>\r\n                       <th>Edit</th>\r\n                       <th><button (click)='deleteComment(note)'>Usuń </button></th>\r\n               </table>\r\n               <p class=\"card-text\">{{note.rate}}</p>\r\n               <p class=\"card-text\"><small class=\"text-muted\"></small></p>\r\n           </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<note-create (onNoteAdd)=\"onNoteAdd($event)\" [movieId]=\"movieId\"></note-create>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(30);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n    .card {\r\n        break-inside:avoid;\r\n        border-style: ridge;\r\n        border-width: 3px;\r\n    }\r\n    .card-deck{\r\n         column-count:3;\r\n         overflow-wrap:break-word;   \r\n    }\r\n", ""]);
	
	// exports


/***/ },
/* 31 */
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
	var common_1 = __webpack_require__(32);
	var router_1 = __webpack_require__(7);
	var note_service_1 = __webpack_require__(25);
	var note_1 = __webpack_require__(33);
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
	        template: __webpack_require__(34),
	        providers: [note_service_1.NoteService],
	    }),
	    __metadata("design:paramtypes", [note_service_1.NoteService,
	        common_1.Location,
	        router_1.ActivatedRoute])
	], NoteCreateComponent);
	exports.NoteCreateComponent = NoteCreateComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 33 */
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
/* 34 */
/***/ function(module, exports) {

	module.exports = "<h2> Nowa notatka </h2>\r\n\r\n<div>\r\n    <ul>\r\n    <li><label>Tytuł</label><input [(ngModel)]=\"note.comment\"/></li>\r\n    <li><label>Treść</label><input [(ngModel)]='note.rate'/></li>\r\n    <li><button (click)='addNote()'> Dodaj </button>\r\n    <li><button (click)='test()'> EMITUJ </button>\r\n    </ul>\r\n</div>\r\n"

/***/ },
/* 35 */
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
	var movie_1 = __webpack_require__(36);
	var movie_service_1 = __webpack_require__(37);
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
	        template: __webpack_require__(38),
	        styles: [__webpack_require__(39)],
	        providers: [movie_service_1.MovieService],
	    }),
	    __metadata("design:paramtypes", [movie_service_1.MovieService])
	], MoviesComponent);
	exports.MoviesComponent = MoviesComponent;


/***/ },
/* 36 */
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
/* 37 */
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
	var http_1 = __webpack_require__(20);
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
/* 38 */
/***/ function(module, exports) {

	module.exports = "<h2> Nowy Film </h2>\r\n\r\n<div>\r\n    <ul>\r\n        \r\n    <li><label>Tytuł</label><input type=\"text\" id=\"movie.title\" required/></li>\r\n    <li><label>Rok</label><input type=\"number\" id='movie.year' max=\"2017\" min=\"1900\" value=\"2000\"/></li>\r\n    <li><button (click)='addMovie()'> Dodaj </button>\r\n    </ul>\r\n</div>\r\n\r\n<h1>My Movies </h1>\r\n\r\n\r\n<p *ngIf=\"!movies\"><em>Loading...</em></p>\r\n\r\n<div class=\"card-deck-wrapper\">\r\n    <div class=\"row\">\r\n    <div class=\"card-deck\">\r\n       \r\n       <div class=\"card\" *ngFor=\"let movie of movies\">\r\n            <div class=\"col-md-4\">\r\n           <div class=\"card-block\">\r\n               <table style=\"width:100%\">\r\n                   <tr>\r\n                       <th width=\"60%\"><a [routerLink]=\"['/movie-detail',movie.id]\" class=\"card-title\">{{movie.title}} </a></th>\r\n                       <th>Edit</th>\r\n                       <button (click)='deleteMovie(movie)'> Delete </button>\r\n               </table>\r\n               <p class=\"card-text\">{{movie.year}}</p>\r\n               <p class=\"card-text\"><small class=\"text-muted\"></small></p>\r\n           </div>\r\n           </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(40);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n    /*.card {\r\n        break-inside:avoid;\r\n        border-style: ridge;\r\n        border-width: 3px;\r\n    }\r\n    .card-deck{\r\n         column-count:3;\r\n         overflow-wrap:break-word;   \r\n    }*/\r\n", ""]);
	
	// exports


/***/ },
/* 41 */
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
	var common_1 = __webpack_require__(32);
	var router_1 = __webpack_require__(7);
	var movie_service_1 = __webpack_require__(37);
	var rxjs_1 = __webpack_require__(50);
	__webpack_require__(51);
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
	        template: __webpack_require__(52),
	        providers: [movie_service_1.MovieService],
	    }),
	    __metadata("design:paramtypes", [common_1.Location,
	        router_1.ActivatedRoute,
	        movie_service_1.MovieService])
	], MovieDetailComponent);
	exports.MovieDetailComponent = MovieDetailComponent;


/***/ },
/* 42 */
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
	var actor_service_1 = __webpack_require__(43);
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
	        template: __webpack_require__(44),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService])
	], ActorsComponent);
	exports.ActorsComponent = ActorsComponent;


/***/ },
/* 43 */
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
	var http_1 = __webpack_require__(20);
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
/* 44 */
/***/ function(module, exports) {

	module.exports = "<actor-create (onActorAdd)='onActorAdd($event)'></actor-create>\r\n\r\n<div *ngFor=\"let actor of actors\">\r\n    <li><a [routerLink]=\"['/actor-detail',actor.id]\">  {{actor.firstName}} {{actor.lastName}} </a></li>\r\n</div>"

/***/ },
/* 45 */
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
	var actor_1 = __webpack_require__(46);
	var actor_service_1 = __webpack_require__(43);
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
	        template: __webpack_require__(47),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService])
	], ActorCreateComponent);
	exports.ActorCreateComponent = ActorCreateComponent;


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	var Actor = (function () {
	    function Actor() {
	    }
	    return Actor;
	}());
	exports.Actor = Actor;


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div>\r\n  <div class=\"form-group\">\r\n    <label for=\"FirstName\">Imie </label>\r\n    <input type=\"text\" [(ngModel)]=\"actor.firstName\" name=\"first\" class=\"form-control\" id=\"FirstName\" placeholder=\"FirstName\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"LastName\">Nazwisko </label>\r\n    <input type=\"text\" [(ngModel)]=\"actor.lastName\" class=\"form-control\" id=\"LastName\" placeholder=\"LastName\">\r\n  </div>\r\n   <div class=\"form-group\">\r\n    <label for=\"Birthday\">Data Urodzenia </label>\r\n    <input type=\"date\" [(ngModel)]=\"actor.birthday\" class=\"form-control\" id=\"Birthday\" placeholder=\"Birthday\">\r\n  </div>\r\n\r\n  <button (click)='addActor(actor)' class=\"btn btn-default\">Dodaj </button>\r\n  </div>\r\n"

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
	var actor_service_1 = __webpack_require__(43);
	var router_1 = __webpack_require__(7);
	var ActorDetailComponent = (function () {
	    function ActorDetailComponent(actorService, route) {
	        this.actorService = actorService;
	        this.route = route;
	    }
	    ActorDetailComponent.prototype.getActorDetail = function (id) {
	        var _this = this;
	        this.actorService.getActorDetail(id)
	            .then(function (actor) { return _this.actor = actor; })
	            .then(function () { return console.log(_this.actor); });
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
	        template: __webpack_require__(49),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService,
	        router_1.ActivatedRoute])
	], ActorDetailComponent);
	exports.ActorDetailComponent = ActorDetailComponent;


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf='actor!=null'>\r\n    <ul>\r\n    <li> {{actor.firstName}} </li>\r\n    <li> {{actor.lastName}} </li>\r\n    <li> {{actor.birthday}} </li>\r\n</ul>\r\n</div>"

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/switchMap");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<h2>Szczegóły filmu <h2>\r\n\r\n<div class=\"movie-detail\" *ngIf='movie' >\r\n    <ul>\r\n        <li> {{movie.title}} </li>\r\n        <li>  {{movie.year}} </li>\r\n    </ul>\r\n     <button (click)='goBack()'>back</button>\r\n</div>\r\n\r\n<div *ngIf = \"this.movie != null\">\r\n<notes [movieId] = \"this.movie.id\"> </notes>\r\n</div>\r\n\r\n<h4>Dodaj aktorów</h4>\r\n<div>\r\n<input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\"/>\r\n<div *ngFor=\"let actor of actors | async \"\r\n(click)=\"addActorToMovie(actor)\" class=\"search-result\" >\r\n{{actor.firstName}}  {{actor.lastName}}\r\n</div>\r\n\r\n</div>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWVhZTg4MjlmZDIyYjA3OTdjMWMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3M/M2RkZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3RlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3RlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcz83ZmNjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3JzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2QsNkZBQTZGO2lCQUM3Riw2REFBNkQ7aUJBQzdELFFBQVEsRUFBRSxtRUFBbUU7Y0FDaEY7YUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2lCQUN0RCw2RUFBNkU7aUJBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUM7VUFDSixDQUFDLENBQUM7U0FFSCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBa0IsY0FBTSxlQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO2FBQ3hGLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzVCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsRUFBQzs7QUF4QkQsNkJBd0JDOzs7Ozs7O0FDakNELDBEOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQXlDO0FBQ3pDLHNDQUEyQztBQUMzQyx1Q0FBK0M7QUFDL0MsbURBQXFEO0FBQ3JELDhDQUE2RDtBQUM3RCxtREFBMEU7QUFDMUUsZ0RBQWlFO0FBQ2pFLHFEQUFnRjtBQUNoRixtREFBMEU7QUFDMUUsaURBQWtFO0FBQ2xFLHVEQUE2RTtBQUM3RSxrREFBcUU7QUFDckUsd0RBQWdGO0FBQ2hGLGtEQUFxRTtBQUNyRSx3REFBZ0Y7QUFDaEYsd0RBQWdGO0FBdUNoRixLQUFhLFNBQVM7S0FBdEI7S0FDQSxDQUFDO0tBQUQsZ0JBQUM7QUFBRCxFQUFDO0FBRFksVUFBUztLQXBDckIsZUFBUSxDQUFDO1NBQ04sU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUMzQixZQUFZLEVBQUU7YUFDViw0QkFBWTthQUNaLG9DQUFnQjthQUNoQixvQ0FBZ0I7YUFDaEIsd0NBQWtCO2FBQ2xCLDhCQUFhO2FBQ2IsZ0NBQWM7YUFDZCwyQ0FBbUI7YUFDbkIsa0NBQWU7YUFDZiw2Q0FBb0I7YUFDcEIsa0NBQWU7YUFDZiw2Q0FBb0I7YUFDcEIsNkNBQW9CO1VBRXZCO1NBQ0QsT0FBTyxFQUFFO2FBQ0wsb0NBQWU7YUFDZixxQkFBWSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtpQkFDbkQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO2lCQUMxQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO2lCQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO2lCQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsU0FBUyxFQUFDLGdDQUFjLEVBQUM7aUJBQ3pDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQyxTQUFTLEVBQUMsMkNBQW1CLEVBQUM7aUJBQ3BELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxTQUFTLEVBQUMsa0NBQWUsRUFBQztpQkFDM0MsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsU0FBUyxFQUFDLDZDQUFvQixFQUFDO2lCQUMxRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsU0FBUyxFQUFDLGtDQUFlLEVBQUM7aUJBQzNDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQyxTQUFTLEVBQUMsNkNBQW9CLEVBQUU7aUJBQ3hELEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFDLFNBQVMsRUFBQyw2Q0FBb0IsRUFBQztpQkFDMUQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Y0FDckMsQ0FBQzthQUNGLG1CQUFXO1VBQ2Q7TUFDSixDQUFDOztJQUNXLFNBQVMsQ0FDckI7QUFEWSwrQkFBUzs7Ozs7OztBQ3REdEIsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTBDO0FBTzFDLEtBQWEsWUFBWTtLQUF6QjtLQUNBLENBQUM7S0FBRCxtQkFBQztBQUFELEVBQUM7QUFEWSxhQUFZO0tBTHhCLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsS0FBSztTQUNmLFFBQVEsRUFBRSxtQkFBTyxDQUFDLENBQXNCLENBQUM7U0FDekMsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxFQUFxQixDQUFDLENBQUM7TUFDM0MsQ0FBQzs7SUFDVyxZQUFZLENBQ3hCO0FBRFkscUNBQVk7Ozs7Ozs7QUNQekIsK1M7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHNEQUFxRCw2SEFBNkgsOEJBQThCLFNBQVMsS0FBSzs7QUFFOU47Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSx5Q0FBd0MsZ0JBQWdCO0FBQ3hELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQSxxQ0FBMEM7QUFPMUMsS0FBYSxnQkFBZ0I7S0FBN0I7S0FDQSxDQUFDO0tBQUQsdUJBQUM7QUFBRCxFQUFDO0FBRFksaUJBQWdCO0tBTDVCLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsVUFBVTtTQUNwQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUEwQixDQUFDO1NBQzdDLE1BQU0sRUFBRSxDQUFDLG1CQUFPLENBQUMsRUFBeUIsQ0FBQyxDQUFDO01BQy9DLENBQUM7O0lBQ1csZ0JBQWdCLENBQzVCO0FBRFksNkNBQWdCOzs7Ozs7O0FDUDdCLDhnRTs7Ozs7OztBQ0NBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQXlDLDJCQUEyQixLQUFLLCtIQUErSCxrQ0FBa0MscUJBQXFCLEtBQUssaUdBQWlHLHdCQUF3QixlQUFlLGdCQUFnQixpQkFBaUIsbUJBQW1CLEtBQUssbUNBQW1DLDZGQUE2Rix5QkFBeUIsb0NBQW9DLFNBQVMsaUJBQWlCLCtCQUErQiw4QkFBOEIseUJBQXlCLFNBQVMsd0JBQXdCLHdCQUF3QixTQUFTLDBCQUEwQix1Q0FBdUMseUJBQXlCLFNBQVMsb0JBQW9CLHdCQUF3QixTQUFTLG9CQUFvQix3QkFBd0IsNEJBQTRCLHdCQUF3QixTQUFTLHNCQUFzQiwrQkFBK0IsK0JBQStCLFNBQVMsbUJBQW1CLHdGQUF3RixnQ0FBZ0MsNkJBQTZCLG9DQUFvQyxTQUFTLEtBQUs7O0FBRTUyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxxQ0FBMEM7QUFNMUMsS0FBYSxhQUFhO0tBQTFCO0tBQ0EsQ0FBQztLQUFELG9CQUFDO0FBQUQsRUFBQztBQURZLGNBQWE7S0FKekIsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxNQUFNO1NBQ2hCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQXVCLENBQUM7TUFDN0MsQ0FBQzs7SUFDVyxhQUFhLENBQ3pCO0FBRFksdUNBQWE7Ozs7Ozs7QUNOMUIseTBEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTBDO0FBQzFDLHNDQUFxQztBQU1yQyxLQUFhLGtCQUFrQjtLQUczQiw0QkFBWSxJQUFVO1NBQXRCLGlCQUlDO1NBSEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBTTthQUN6RCxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQyxDQUFDLENBQUMsQ0FBQztLQUNQLENBQUM7S0FDTCx5QkFBQztBQUFELEVBQUM7QUFSWSxtQkFBa0I7S0FKOUIsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxXQUFXO1NBQ3JCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQTRCLENBQUM7TUFDbEQsQ0FBQztzQ0FJb0IsV0FBSTtJQUhiLGtCQUFrQixDQVE5QjtBQVJZLGlEQUFrQjs7Ozs7OztBQ1AvQiwyQzs7Ozs7O0FDQUEsd2ZBQXVmLDBCQUEwQiwyQkFBMkIseUJBQXlCLDJCQUEyQix5QkFBeUIsMkJBQTJCLG9CQUFvQix1RDs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4cUIscUNBQTBDO0FBTTFDLEtBQWEsZ0JBQWdCO0tBSjdCO1NBS1csaUJBQVksR0FBRyxDQUFDLENBQUM7S0FLNUIsQ0FBQztLQUhVLDJDQUFnQixHQUF2QjtTQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4QixDQUFDO0tBQ0wsdUJBQUM7QUFBRCxFQUFDO0FBTlksaUJBQWdCO0tBSjVCLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsU0FBUztTQUNuQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUEwQixDQUFDO01BQ2hELENBQUM7O0lBQ1csZ0JBQWdCLENBTTVCO0FBTlksNkNBQWdCOzs7Ozs7O0FDTjdCLHlJQUF3SSxnQkFBZ0IsbUY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEoscUNBQXNEO0FBQ3RELHVDQUF1QztBQUd2Qyw4Q0FBMkM7QUFhdkMsS0FBYSxjQUFjO0tBSTNCLHdCQUNZLFdBQXVCLEVBQ3ZCLE1BQWE7U0FEYixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtTQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFPO1NBSnpCLFVBQUssR0FBUSxJQUFJLEtBQUssRUFBUSxDQUFDO0tBTS9CLENBQUM7S0FFRCxpQ0FBUSxHQUFSO1NBQUEsaUJBTUM7U0FMRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2NBQ3JDLElBQUksQ0FBQyxlQUFLLElBQUksWUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLEVBQWhCLENBQWdCLENBQUM7U0FDakMsWUFBWTtLQUdoQixDQUFDO0tBQUEsQ0FBQztLQUNGLHVDQUFjLEdBQWQ7U0FDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzFDLENBQUM7S0FBQSxDQUFDO0tBQ0Ysa0NBQVMsR0FBVCxVQUFVLElBQVM7U0FDZixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQixDQUFDO0tBRUQsc0NBQWEsR0FBYixVQUFjLElBQVM7U0FBdkIsaUJBR0M7U0FGRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Y0FDbkQsSUFBSSxDQUFDLGNBQUksWUFBSSxDQUFDLEtBQUssR0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxJQUFJLElBQUksRUFBVCxDQUFTLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0tBQzVELENBQUM7S0FHQSxpQ0FBUSxHQUFSO1NBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3BCLENBQUM7S0FHTixxQkFBQztBQUFELEVBQUM7QUFsQ1k7S0FBUixZQUFLLEVBQUU7O2dEQUFnQjtBQURYLGVBQWM7S0FWOUIsZ0JBQVMsQ0FBQztTQUNQLHVCQUF1QjtTQUN2QixRQUFRLEVBQUUsT0FBTztTQUNqQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUF3QixDQUFDO1NBQzNDLE1BQU0sRUFBRSxDQUFDLG1CQUFPLENBQUMsRUFBdUIsQ0FBQyxDQUFDO1NBQzFDLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7TUFFMUIsQ0FBQztzQ0FRMEIsMEJBQVc7U0FDaEIsZUFBTTtJQU5aLGNBQWMsQ0FtQzlCO0FBbkNnQix5Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQi9CLHFDQUFtRDtBQUVuRCxzQ0FBNEM7QUFDNUMseUNBQXFDO0FBRXJDLHlCQUFxQztBQUdyQyxLQUFhLFdBQVc7S0FLcEIscUJBQ1ksSUFBVTtTQUFWLFNBQUksR0FBSixJQUFJLENBQU07U0FMZCxhQUFRLEdBQUcsU0FBUyxDQUFDO1NBQ3JCLFdBQU0sR0FBQyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7U0FDMUQsZ0JBQVcsR0FBRyxJQUFJLGlCQUFPLEVBQVEsQ0FBQztLQU14QyxDQUFDO0tBQUEsQ0FBQztLQUVILDhCQUFRLEdBQVIsVUFBUyxPQUFjO1NBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFDLEtBQUcsT0FBUyxFQUFDO2NBQy9DLFNBQVMsRUFBRTtjQUNYLElBQUksQ0FBQyxrQkFBUSxJQUFJLGVBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUN2QyxDQUFDO0tBQUEsQ0FBQztLQUVGLDZCQUFPLEdBQVAsVUFBUSxJQUFTLEVBQUMsT0FBYztTQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBRTdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtjQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFDLEtBQUcsT0FBUyxHQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNwQixFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUM7Y0FDdEIsU0FBUyxFQUFFO2NBQ1gsSUFBSSxDQUFDLGFBQUcsSUFBRSxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7S0FFL0IsQ0FBQztLQUFBLENBQUM7S0FFTCxpQ0FBVyxHQUFYLFVBQVksS0FBUztTQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7S0FDbEQsQ0FBQztLQUFBLENBQUM7S0FFRixtQ0FBYSxHQUFiLFVBQWMsT0FBYyxFQUFDLFNBQWdCO1NBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtjQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sU0FBSSxTQUFXLEVBQUM7Y0FDL0MsU0FBUyxFQUFFO2NBQ1gsSUFBSSxDQUFDLGNBQUksV0FBSSxFQUFKLENBQUksQ0FBQztLQUNuQixDQUFDO0tBQ0QsaUNBQVcsR0FBWDtTQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7S0FFL0IsQ0FBQztLQUNMLGtCQUFDO0FBQUQsRUFBQztBQTVDWSxZQUFXO0tBRHZCLGlCQUFVLEVBQUU7c0NBT1MsV0FBSTtJQU5iLFdBQVcsQ0E0Q3ZCO0FBNUNZLG1DQUFXOzs7Ozs7O0FDUnhCLDBDOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsaUdBQWdHLFlBQVksNmRBQTZkLGNBQWMsZ05BQWdOLFdBQVcsNk87Ozs7Ozs7QUNDbHpCOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQXlDLCtCQUErQixnQ0FBZ0MsOEJBQThCLFNBQVMsbUJBQW1CLDRCQUE0QixzQ0FBc0MsWUFBWTs7QUFFaFA7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEscUNBQWtFO0FBQ2xFLHdDQUF5QztBQUN6Qyx1Q0FBcUQ7QUFFckQsOENBQTJDO0FBQzNDLHNDQUF1QztBQVV2QyxLQUFhLG1CQUFtQjtLQUs1Qiw2QkFDWSxXQUF1QixFQUN2QixRQUFpQixFQUNqQixLQUFvQjtTQUZwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtTQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFTO1NBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWU7U0FOdEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBUTtTQUNyQyxZQUFPLEdBQUMsQ0FBQyxDQUFDO1NBT2YsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDO0tBQ3pCLENBQUM7S0FFRCxxQ0FBTyxHQUFQO1NBQUEsaUJBSUM7U0FIRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLGFBQUcsSUFBRSxZQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztTQUNyQyw0QkFBNEI7S0FDL0IsQ0FBQztLQUNELG9DQUFNLEdBQU47U0FDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3pCLENBQUM7S0FDRCxrQ0FBSSxHQUFKO1NBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDL0MsQ0FBQztLQUNMLDBCQUFDO0FBQUQsRUFBQztBQXRCYTtLQUFULGFBQU0sRUFBRTs7dURBQXFDO0FBQ3JDO0tBQVIsWUFBSyxFQUFFOztxREFBVztBQUhWLG9CQUFtQjtLQVAvQixnQkFBUyxDQUFDO1NBQ1AsUUFBUSxFQUFFLGFBQWE7U0FDdkIsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBOEIsQ0FBQztTQUNqRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO01BQzNCLENBQUM7c0NBUzBCLDBCQUFXO1NBQ2QsaUJBQVE7U0FDWCx1QkFBYztJQVJ2QixtQkFBbUIsQ0F3Qi9CO0FBeEJZLG1EQUFtQjs7Ozs7OztBQ2ZoQyw2Qzs7Ozs7OztBQ0FBO0tBS0k7U0FDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQztTQUNaLElBQUksQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDO0tBQ3BCLENBQUM7S0FDTCxXQUFDO0FBQUQsRUFBQztBQVRZLHFCQUFJO0FBV2pCO0tBRUk7U0FDSSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1NBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLFdBQVcsQ0FBQztTQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUM7S0FFckIsQ0FBQztLQUNMLGlCQUFDO0FBQUQsRUFBQztBQVZZLGlDQUFVOzs7Ozs7O0FDWHZCLDRWOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQWdEO0FBQ2hELHVDQUE4QjtBQUM5QiwrQ0FBNEM7QUFTNUMsS0FBYSxlQUFlO0tBRXhCLHlCQUNXLFlBQXlCO1NBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0tBQ2xDLENBQUM7S0FDSCxrQ0FBUSxHQUFSO1NBQUEsaUJBU0M7U0FSRyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FDRixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBRSxDQUFDLEtBQUssRUFDaEUsVUFBVSxDQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssQ0FBQyxDQUMxRTtTQUVELElBQUksQ0FBQyxZQUFZO2NBQ2hCLFFBQVEsQ0FBQyxLQUFLLENBQUM7Y0FDZixJQUFJLENBQUMsZUFBSyxJQUFHLFlBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7S0FDM0MsQ0FBQztLQUNELGtDQUFRLEdBQVI7U0FDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDckIsQ0FBQztLQUNELG1DQUFTLEdBQVQ7U0FBQSxpQkFLQztTQUpJLElBQUksQ0FBQyxZQUFZO2NBQ2pCLFNBQVMsRUFBRTtjQUNYLElBQUksQ0FBQyxnQkFBTSxJQUFFLFlBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxFQUFsQixDQUFrQixDQUFDO2NBQ2hDLEtBQUssRUFBRSxDQUFDO0tBQ2IsQ0FBQztLQUNELHFDQUFXLEdBQVgsVUFBWSxLQUFXO1NBQXZCLGlCQUdDO1NBRkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztjQUN0QyxJQUFJLENBQUMsZ0JBQU0sSUFBRSxZQUFJLENBQUMsTUFBTSxHQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBRyxRQUFDLEtBQUcsS0FBSyxFQUFULENBQVMsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUM7S0FDakUsQ0FBQztLQUVMLHNCQUFDO0FBQUQsRUFBQztBQTdCWSxnQkFBZTtLQVIzQixnQkFBUyxDQUFDO1NBQ1AsUUFBUSxFQUFFLFFBQVE7U0FDbEIsUUFBUSxFQUFHLG1CQUFPLENBQUMsRUFBeUIsQ0FBQztTQUM3QyxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLEVBQXdCLENBQUMsQ0FBQztTQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO01BRTVCLENBQUM7c0NBSzBCLDRCQUFZO0lBSDNCLGVBQWUsQ0E2QjNCO0FBN0JZLDJDQUFlOzs7Ozs7OztBQ1g1QjtLQUtJLGVBQVksS0FBWSxFQUFDLElBQVk7U0FDakMsSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7U0FDakIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7S0FDbkIsQ0FBQztLQUNMLFlBQUM7QUFBRCxFQUFDO0FBVFksdUJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWxCLHNDQUErQztBQUUvQyxxQ0FBeUM7QUFNekMsS0FBYSxZQUFZO0tBRXBCLHNCQUNXLElBQVU7U0FBVixTQUFJLEdBQUosSUFBSSxDQUFNO1NBRmQsWUFBTyxHQUFXLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztLQUd4RSxDQUFDO0tBQUEsQ0FBQztLQUVOLCtCQUFRLEdBQVIsVUFBUyxLQUFXO1NBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtjQUNmLElBQUksQ0FBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Y0FDakMsU0FBUyxFQUFFO2NBQ1gsSUFBSSxDQUFDLGFBQUcsSUFBRSxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7S0FDM0IsQ0FBQztLQUNELGdDQUFTLEdBQVQ7U0FDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7Y0FDZixHQUFHLENBQUMsUUFBUSxDQUFDO2NBQ2IsU0FBUyxFQUFFO2NBQ1gsSUFBSSxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQyxDQUFDO0tBQ25DLENBQUM7S0FDRCxrQ0FBVyxHQUFYLFVBQVksRUFBUztTQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7Y0FDZixNQUFNLENBQUMsU0FBUyxJQUFDLEtBQUcsRUFBSSxFQUFDO2NBQ3pCLFNBQVMsRUFBRTtjQUNYLElBQUksQ0FBQyxjQUFJLFdBQUksRUFBSixDQUFJLENBQUMsQ0FBQztLQUNwQixDQUFDO0tBQ0QsK0JBQVEsR0FBUixVQUFTLEVBQVM7U0FDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFDLEtBQUcsRUFBSSxFQUFDO2NBQ3RDLFNBQVMsRUFBRTtjQUNYLElBQUksQ0FBQyxrQkFBUSxJQUFJLGVBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUN2QyxDQUFDO0tBQ0QsNkJBQU0sR0FBTixVQUFPLFNBQWdCO1NBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtjQUNmLEdBQUcsQ0FBQyxTQUFTLElBQUcsS0FBRyxTQUFXLEVBQUM7Y0FDL0IsR0FBRyxDQUFDLGFBQUcsSUFBRSxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7S0FFMUIsQ0FBQztLQUNELHNDQUFlLEdBQWYsVUFBZ0IsT0FBYyxFQUFDLE9BQWM7U0FDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2NBQ2YsSUFBSSxDQUFDLFNBQVMsSUFBQyxLQUFHLE9BQVMsR0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztjQUNqRCxTQUFTLEVBQUU7Y0FDWCxJQUFJLENBQUMsY0FBSSxXQUFJLEVBQUosQ0FBSSxDQUFDO0tBQ25CLENBQUM7S0FDTCxtQkFBQztBQUFELEVBQUM7QUF6Q1ksYUFBWTtLQUR4QixpQkFBVSxFQUFFO3NDQUlTLFdBQUk7SUFIYixZQUFZLENBeUN4QjtBQXpDWSxxQ0FBWTs7Ozs7OztBQ1J6QixzM0JBQXEzQixhQUFhLDBNQUEwTSxZQUFZLHlMOzs7Ozs7O0FDQ3hsQzs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDRDQUEyQywrQkFBK0IsZ0NBQWdDLDhCQUE4QixTQUFTLG1CQUFtQiw0QkFBNEIsc0NBQXNDLFlBQVk7O0FBRWxQOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLHFDQUFnRDtBQUdoRCx3Q0FBeUM7QUFDekMsdUNBQXNEO0FBQ3RELCtDQUE2QztBQUM3QyxzQ0FBd0M7QUFHeEMseUJBQXFDO0FBU3JDLEtBQWEsb0JBQW9CO0tBSTdCLDhCQUNZLFFBQWlCLEVBQ2pCLEtBQW9CLEVBQ3BCLFlBQXlCO1NBRnpCLGFBQVEsR0FBUixRQUFRLENBQVM7U0FDakIsVUFBSyxHQUFMLEtBQUssQ0FBZTtTQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtTQUo3QixlQUFVLEdBQUcsSUFBSSxjQUFPLEVBQVUsQ0FBQztLQU16QyxDQUFDO0tBQUEsQ0FBQztLQUVKLHFDQUFNLEdBQU47U0FDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN6QixDQUFDO0tBRUQsdUNBQVEsR0FBUjtTQUFBLGlCQWFDO1NBWkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2NBQ2hCLFNBQVMsQ0FBQyxVQUFDLE1BQWEsSUFBRyxZQUFJO2NBQy9CLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFEVCxDQUNTLENBQUM7Y0FDckMsU0FBUyxDQUFDLGVBQUssSUFBSSxZQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssRUFBaEIsQ0FBZ0IsQ0FBQztTQUVyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVO2NBQzVCLFlBQVksQ0FBQyxHQUFHLENBQUM7Y0FDakIsb0JBQW9CLEVBQUU7Y0FDdEIsU0FBUyxDQUFDLGNBQUksSUFBRyxXQUFJO2VBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztlQUM5QixpQkFBVSxDQUFDLEVBQUUsQ0FBVSxFQUFFLENBQUMsRUFGVixDQUVVLENBQzNCO0tBQ0wsQ0FBQztLQUNELDhDQUFlLEdBQWYsVUFBZ0IsS0FBVztTQUV2QixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFL0QsQ0FBQztLQUNELHFDQUFNLEdBQU4sVUFBTyxTQUFnQjtTQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDbkMsQ0FBQztLQUdMLDJCQUFDO0FBQUQsRUFBQztBQXhDWSxxQkFBb0I7S0FQaEMsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxjQUFjO1NBQ3hCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQStCLENBQUM7U0FDbEQsU0FBUyxFQUFDLENBQUMsNEJBQVksQ0FBQztNQUUzQixDQUFDO3NDQU91QixpQkFBUTtTQUNYLHVCQUFjO1NBQ1AsNEJBQVk7SUFQNUIsb0JBQW9CLENBd0NoQztBQXhDWSxxREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJqQyxxQ0FBK0M7QUFDL0MsK0NBQTRDO0FBVzVDLEtBQWEsZUFBZTtLQUV4Qix5QkFDWSxZQUF5QjtTQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtLQUNuQyxDQUFDO0tBRUgsa0NBQVEsR0FBUjtTQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNyQixDQUFDO0tBRUQsbUNBQVMsR0FBVDtTQUFBLGlCQUlDO1NBSEcsSUFBSSxDQUFDLFlBQVk7Y0FDaEIsWUFBWSxFQUFFO2NBQ2QsSUFBSSxDQUFDLGdCQUFNLElBQUUsWUFBSSxDQUFDLE1BQU0sR0FBQyxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztLQUN0QyxDQUFDO0tBQ0Qsb0NBQVUsR0FBVixVQUFXLEtBQVc7U0FDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUIsQ0FBQztLQUNMLHNCQUFDO0FBQUQsRUFBQztBQWxCWSxnQkFBZTtLQU4zQixnQkFBUyxDQUFDO1NBQ1AsUUFBUSxFQUFDLFFBQVE7U0FDakIsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBeUIsQ0FBQztTQUM1QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO01BQzVCLENBQUM7c0NBSzJCLDRCQUFZO0lBSDVCLGVBQWUsQ0FrQjNCO0FBbEJZLDJDQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1o1QixxQ0FBeUM7QUFDekMsc0NBQTBDO0FBSzFDLEtBQWEsWUFBWTtLQUdyQixzQkFDWSxJQUFTO1NBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztTQUhiLGFBQVEsR0FBQyxTQUFTLENBQUM7U0FDbkIsWUFBTyxHQUFXLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztLQUd0RSxDQUFDO0tBRVAsK0JBQVEsR0FBUixVQUFTLEtBQVc7U0FDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2NBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Y0FDdEMsU0FBUyxFQUFFO2NBQ1gsSUFBSSxDQUFDLGFBQUcsSUFBRSxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7S0FFM0IsQ0FBQztLQUVELG1DQUFZLEdBQVo7U0FDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7Y0FDZixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztjQUNsQixTQUFTLEVBQUU7Y0FDWCxJQUFJLENBQUMsYUFBRyxJQUFJLFVBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7S0FDNUIsQ0FBQztLQUVELHFDQUFjLEdBQWQsVUFBZSxFQUFTO1NBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFHLEtBQUcsRUFBSSxFQUFDO2NBQzVDLFNBQVMsRUFBRTtjQUNYLElBQUksQ0FBQyxhQUFHLElBQUUsVUFBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0tBQzNCLENBQUM7S0FDTCxtQkFBQztBQUFELEVBQUM7QUEzQlksYUFBWTtLQUR4QixpQkFBVSxFQUFFO3NDQUtRLFdBQUk7SUFKWixZQUFZLENBMkJ4QjtBQTNCWSxxQ0FBWTs7Ozs7OztBQ056Qiw2TEFBNEwsaUJBQWlCLEdBQUcsZ0JBQWdCLHFCOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhPLHFDQUE0RDtBQUM1RCx1Q0FBOEI7QUFDOUIsK0NBQTZDO0FBUTdDLEtBQWEsb0JBQW9CO0tBRzdCLDhCQUNZLFlBQXlCO1NBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1NBRjNCLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQVMsQ0FBQztTQUs1QyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksYUFBSyxFQUFFLENBQUM7S0FDNUIsQ0FBQztLQUVELHVDQUFRLEdBQVIsVUFBUyxLQUFXO1NBQXBCLGlCQUlDO1NBRkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2NBQ2hDLElBQUksQ0FBQyxhQUFHLElBQUUsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztLQUMxQyxDQUFDO0tBRUwsMkJBQUM7QUFBRCxFQUFDO0FBZGE7S0FBVCxhQUFNLEVBQUU7O3lEQUF3QztBQUZ4QyxxQkFBb0I7S0FOaEMsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBQyxjQUFjO1NBQ3ZCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQStCLENBQUM7U0FDbEQsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztNQUM1QixDQUFDO3NDQU0yQiw0QkFBWTtJQUo1QixvQkFBb0IsQ0FnQmhDO0FBaEJZLHFEQUFvQjs7Ozs7Ozs7QUNWakM7S0FBQTtLQUtBLENBQUM7S0FBRCxZQUFDO0FBQUQsRUFBQztBQUxZLHVCQUFLOzs7Ozs7O0FDQWxCLHF5Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHFDQUE4QztBQUM5QywrQ0FBNEM7QUFFNUMsdUNBQW9EO0FBT3BELEtBQWEsb0JBQW9CO0tBRTdCLDhCQUNZLFlBQXlCLEVBQ3pCLEtBQW9CO1NBRHBCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1NBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWU7S0FFL0IsQ0FBQztLQUVGLDZDQUFjLEdBQWQsVUFBZSxFQUFTO1NBQXhCLGlCQUtDO1NBSkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2NBQ25DLElBQUksQ0FBQyxlQUFLLElBQUksWUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLEVBQWhCLENBQWdCLENBQUM7Y0FDL0IsSUFBSSxDQUFDLGNBQUksY0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztLQUV0QyxDQUFDO0tBQ0QsdUNBQVEsR0FBUjtTQUFBLGlCQU1DO1NBTEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2NBQ2hCLFNBQVMsQ0FBQyxVQUFDLE1BQWE7YUFDekIsWUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFsQyxDQUFrQyxDQUFDLENBQUM7S0FHeEMsQ0FBQztLQUVMLDJCQUFDO0FBQUQsRUFBQztBQXRCWSxxQkFBb0I7S0FOaEMsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxjQUFjO1NBQ3hCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQStCLENBQUM7U0FDbEQsU0FBUyxFQUFDLENBQUMsNEJBQVksQ0FBQztNQUMzQixDQUFDO3NDQUsyQiw0QkFBWTtTQUNuQix1QkFBYztJQUp2QixvQkFBb0IsQ0FzQmhDO0FBdEJZLHFEQUFvQjs7Ozs7OztBQ1ZqQyx1RUFBc0UsaUJBQWlCLHFCQUFxQixnQkFBZ0IscUJBQXFCLGdCQUFnQiwwQjs7Ozs7O0FDQWpLLGtDOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsNkhBQTRILGFBQWEsMEJBQTBCLFlBQVksZ2FBQWdhLGlCQUFpQixJQUFJLGdCQUFnQix5QiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFlYWU4ODI5ZmQyMmIwNzk3YzFjIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICd6b25lLmpzJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtOb3Rlc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tm90ZUNyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW92aWVzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vdmllRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdG9yc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RvckNyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RvckRldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgQ291bnRlckNvbXBvbmVudCxcclxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBOb3Rlc0NvbXBvbmVudCxcclxuICAgICAgICBOb3RlQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIE1vdmllc0NvbXBvbmVudCxcclxuICAgICAgICBNb3ZpZURldGFpbENvbXBvbmVudCxcclxuICAgICAgICBBY3RvcnNDb21wb25lbnQsXHJcbiAgICAgICAgQWN0b3JDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgICAgQWN0b3JEZXRhaWxDb21wb25lbnQsXHJcblxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZmV0Y2gtZGF0YScsIGNvbXBvbmVudDogRmV0Y2hEYXRhQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ25vdGVzJyxjb21wb25lbnQ6Tm90ZXNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdub3RlLWNyZWF0ZScsY29tcG9uZW50Ok5vdGVDcmVhdGVDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdtb3ZpZXMnLGNvbXBvbmVudDpNb3ZpZXNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdtb3ZpZS1kZXRhaWwvOmlkJyxjb21wb25lbnQ6TW92aWVEZXRhaWxDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3RvcnMnLGNvbXBvbmVudDpBY3RvcnNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3RvcnMtY3JlYXRlJyxjb21wb25lbnQ6QWN0b3JDcmVhdGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWN0b3ItZGV0YWlsLzppZCcsY29tcG9uZW50OkFjdG9yRGV0YWlsQ29tcG9uZW50fSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXHJcXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXHJcXG4gICAgLmJvZHktY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPk15TW92aWVzPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jb3VudGVyJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWVkdWNhdGlvbic+PC9zcGFuPiBDb3VudGVyXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2ZldGNoLWRhdGEnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBGZXRjaCBkYXRhXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tb3ZpZXMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBGaWxteVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hY3RvcnMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBBa3Rvcnp5XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxyXFxubGkubGluay1hY3RpdmUgYSxcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxyXFxuICAgIC5tYWluLW5hdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB1bCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGxpIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGEge1xcclxcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxcclxcbjxwPldlbGNvbWUgdG8geW91ciBuZXcgc2luZ2xlLXBhZ2UgYXBwbGljYXRpb24sIGJ1aWx0IHdpdGg6PC9wPlxcclxcbjx1bD5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2FuZ3VsYXIuaW8vJz5Bbmd1bGFyIDI8L2E+IGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nPkJvb3RzdHJhcDwvYT4gZm9yIGxheW91dCBhbmQgc3R5bGluZzwvbGk+XFxyXFxuICAgIDwhLS08bm90ZXM+PC9ub3Rlcz4tLT5cXHJcXG48L3VsPlxcclxcbjxwPlRvIGhlbHAgeW91IGdldCBzdGFydGVkLCB3ZSd2ZSBhbHNvIHNldCB1cDo8L3A+XFxyXFxuPHVsPlxcclxcbiAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBGb3IgZmFzdGVyIGluaXRpYWwgbG9hZGluZyBhbmQgaW1wcm92ZWQgU0VPLCB5b3VyIEFuZ3VsYXIgMiBhcHAgaXMgcHJlcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIHJlc3VsdGluZyBIVE1MIGlzIHRoZW4gdHJhbnNmZXJyZWQgdG8gdGhlIGJyb3dzZXIgd2hlcmUgYSBjbGllbnQtc2lkZSBjb3B5IG9mIHRoZSBhcHAgdGFrZXMgb3Zlci48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5XZWJwYWNrIGRldiBtaWRkbGV3YXJlPC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcnVuIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sLiBZb3VyIGNsaWVudC1zaWRlIHJlc291cmNlcyBhcmUgZHluYW1pY2FsbHkgYnVpbHQgb24gZGVtYW5kLiBVcGRhdGVzIGFyZSBhdmFpbGFibGUgYXMgc29vbiBhcyB5b3UgbW9kaWZ5IGFueSBmaWxlLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCB5b3VyIEFuZ3VsYXIgMiBhcHAgd2lsbCBiZSByZWJ1aWx0IGFuZCBhIG5ldyBpbnN0YW5jZSBpbmplY3RlZCBpcyBpbnRvIHRoZSBwYWdlLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPkVmZmljaWVudCBwcm9kdWN0aW9uIGJ1aWxkczwvc3Ryb25nPi4gSW4gcHJvZHVjdGlvbiBtb2RlLCBkZXZlbG9wbWVudC10aW1lIGZlYXR1cmVzIGFyZSBkaXNhYmxlZCwgYW5kIHRoZSA8Y29kZT53ZWJwYWNrPC9jb2RlPiBidWlsZCB0b29sIHByb2R1Y2VzIG1pbmlmaWVkIHN0YXRpYyBDU1MgYW5kIEphdmFTY3JpcHQgZmlsZXMuPC9saT5cXHJcXG48L3VsPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZldGNoZGF0YScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmV0Y2hEYXRhQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgICAgICBodHRwLmdldCgnL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHMnKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3JlY2FzdHMgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcclxuICAgIGRhdGVGb3JtYXR0ZWQ6IHN0cmluZztcclxuICAgIHRlbXBlcmF0dXJlQzogbnVtYmVyO1xyXG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XHJcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cXHJcXG5cXHJcXG48cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuPC9wPlxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhZm9yZWNhc3RzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcblxcclxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJmb3JlY2FzdHNcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmb3JlY2FzdCBvZiBmb3JlY2FzdHNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3Quc3VtbWFyeSB9fTwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY3VycmVudENvdW50ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudCsrO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5Db3VudGVyPC9oMj5cXHJcXG5cXHJcXG48cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYW4gQW5ndWxhciAyIGNvbXBvbmVudC48L3A+XFxyXFxuXFxyXFxuPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57eyBjdXJyZW50Q291bnQgfX08L3N0cm9uZz48L3A+XFxyXFxuXFxyXFxuPGJ1dHRvbiAoY2xpY2spPVxcXCJpbmNyZW1lbnRDb3VudGVyKClcXFwiPkluY3JlbWVudDwvYnV0dG9uPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuaW1wb3J0IHtOb3RlU2VydmljZX0gZnJvbSAnLi9ub3RlLnNlcnZpY2UnO1xyXG5pbXBvcnQge05vdGV9IGZyb20gJy4vbm90ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25vdGVzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25vdGVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25vdGVzLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6W05vdGVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBOb3Rlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtb3ZpZUlkOyBcclxuICAgIG5vdGVzOk5vdGVbXT1uZXcgQXJyYXk8Tm90ZT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5vdGVTZXJ2aWNlOk5vdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOlJvdXRlcixcclxuICAgICl7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm90ZXMoKTp2b2lke1xyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2UuZ2V0Tm90ZXModGhpcy5tb3ZpZUlkKVxyXG4gICAgICAgICAudGhlbihub3RlcyA9PiB0aGlzLm5vdGVzPW5vdGVzKVxyXG4gICAgICAgIC8vIC5jYXRjaCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIGdvdG9Ob3RlQ3JlYXRlKCk6dm9pZHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25vdGUtY3JlYXRlLyddKVxyXG4gICAgfTtcclxuICAgIG9uTm90ZUFkZChub3RlOk5vdGUpe1xyXG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb21tZW50KG5vdGU6Tm90ZSl7XHJcbiAgICAgICAgdGhpcy5ub3RlU2VydmljZS5kZWxldGVDb21tZW50KHRoaXMubW92aWVJZCxub3RlLmlkKVxyXG4gICAgICAgIC50aGVuKCgpPT50aGlzLm5vdGVzPXRoaXMubm90ZXMuZmlsdGVyKG4gPT4gbiAhPSBub3RlKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICBuZ09uSW5pdCgpOnZvaWR7XHJcbiAgICAgICAgIHRoaXMuZ2V0Tm90ZXMoKTtcclxuICAgICB9XHJcbiAgXHJcblxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlLE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Tm90ZX0gZnJvbSAnLi9ub3RlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTm90ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBub3Rlc1VSTCA9ICdyZXZpZXcvJztcclxuICAgIHByaXZhdGUgaGVhZGVyPW5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICBwdWJsaWMgbm90ZXNTb3VyY2UgPSBuZXcgU3ViamVjdDxOb3RlPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAgfTtcclxuXHJcbiAgICBnZXROb3Rlcyhtb3ZpZUlkOm51bWJlcik6IFByb21pc2U8Tm90ZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ub3Rlc1VSTCtgJHttb3ZpZUlkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTsgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBhZGROb3RlKG5vdGU6Tm90ZSxtb3ZpZUlkOm51bWJlcik6UHJvbWlzZTxOb3RlPnsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2RhbmllIG5vdGtpXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucG9zdCh0aGlzLm5vdGVzVVJMK2Ake21vdmllSWR9YFxyXG4gICAgICAgICAgICAsSlNPTi5zdHJpbmdpZnkobm90ZSlcclxuICAgICAgICAgICAgLHtoZWFkZXJzOnRoaXMuaGVhZGVyfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSk7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuIGhhbmRsZUVycm9yKGVycm9yOmFueSk6UHJvbWlzZTxhbnk+e1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJibGFkIHd5c3RhcGlsXCIsZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlQ29tbWVudChtb3ZpZUlkOm51bWJlcixjb21tZW50SWQ6bnVtYmVyKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAuZGVsZXRlKHRoaXMubm90ZXNVUkwrYCR7bW92aWVJZH0vJHtjb21tZW50SWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbigoKT0+bnVsbClcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCk6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5pZSBtYSBtbmllXCIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5NeSBOb3RlcyA8L2gxPlxcclxcblxcclxcbjwhLS08bGkgKm5nRm9yPSdsZXQgbm90ZSBvZiBub3Rlcyc+XFxyXFxuICAgIDxzcGFuPiB7e25vdGUudGl0bGV9fSA8L3NwYW4+XFxyXFxuPC9saT4tLT5cXHJcXG5cXHJcXG48IS0tPHA+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZ290b05vdGVDcmVhdGUoKVxcXCI+ICBDcmVhdGUgTmV3ICA8L2J1dHRvbj5cXHJcXG48L3A+LS0+XFxyXFxuPHAgKm5nSWY9XFxcIiFub3Rlc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2std3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZGVja1xcXCI+XFxyXFxuICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0Zvcj1cXFwibGV0IG5vdGUgb2Ygbm90ZXNcXFwiPlxcclxcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVxcXCI2MCVcXFwiPjxhIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57e25vdGUuY29tbWVudH19PC9hPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGJ1dHRvbiAoY2xpY2spPSdkZWxldGVDb21tZW50KG5vdGUpJz5Vc3XFhCA8L2J1dHRvbj48L3RoPlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3tub3RlLnJhdGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj48c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPjwvc21hbGw+PC9wPlxcclxcbiAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPG5vdGUtY3JlYXRlIChvbk5vdGVBZGQpPVxcXCJvbk5vdGVBZGQoJGV2ZW50KVxcXCIgW21vdmllSWRdPVxcXCJtb3ZpZUlkXFxcIj48L25vdGUtY3JlYXRlPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vdGVzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuICAgIC5jYXJkIHtcXHJcXG4gICAgICAgIGJyZWFrLWluc2lkZTphdm9pZDtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZC1kZWNre1xcclxcbiAgICAgICAgIGNvbHVtbi1jb3VudDozO1xcclxcbiAgICAgICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDsgICBcXHJcXG4gICAgfVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LElucHV0LEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1BhcmFtcyxBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXHJcblxyXG5pbXBvcnQge05vdGVTZXJ2aWNlfSBmcm9tICcuL25vdGUuc2VydmljZSc7XHJcbmltcG9ydCB7Tm90ZSxNb2NrZWROb3RlfSBmcm9tICcuL25vdGUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibm90ZS1jcmVhdGVcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25vdGUtY3JlYXRlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtOb3RlU2VydmljZV0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVDcmVhdGVDb21wb25lbnR7XHJcbiAgICBub3RlOk5vdGU7XHJcbiAgICBAT3V0cHV0KCkgb25Ob3RlQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RlPigpXHJcbiAgICBASW5wdXQoKSBtb3ZpZUlkPTA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBub3RlU2VydmljZTpOb3RlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMubm90ZT1uZXcgTm90ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5vdGUoKTp2b2lkeyAgICAgICBcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLmFkZE5vdGUodGhpcy5ub3RlLHRoaXMubW92aWVJZClcclxuICAgICAgICAudGhlbihyZXM9PnRoaXMub25Ob3RlQWRkLmVtaXQocmVzKSlcclxuICAgICAgIC8vIC50aGVuKCgpPT50aGlzLmdvQmFjaygpKTtcclxuICAgIH1cclxuICAgIGdvQmFjaygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbiAgICB0ZXN0KCl7XHJcbiAgICAgICAgdGhpcy5vbk5vdGVBZGQuZW1pdChuZXcgTW9ja2VkTm90ZSgpLm5vdGUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgTm90ZSB7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICByYXRlOiBudW1iZXI7XHJcbiAgICBjb21tZW50OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnJhdGU9MDtcclxuICAgICAgICB0aGlzLmNvbW1lbnQ9XCJcIjtcclxuICAgIH1cclxufSAgIFxyXG5cclxuZXhwb3J0IGNsYXNzIE1vY2tlZE5vdGV7XHJcbiAgICBub3RlOk5vdGU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubm90ZT1uZXcgTm90ZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB0aGlzLm5vdGUuaWQ9MTAwO1xyXG4gICAgICAgIHRoaXMubm90ZS5jb21tZW50PVwiTklrdXNpb3dlXCI7XHJcbiAgICAgICAgdGhpcy5ub3RlLnJhdGU9NTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3RlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj4gTm93YSBub3RhdGthIDwvaDI+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICA8bGk+PGxhYmVsPlR5dHXFgjwvbGFiZWw+PGlucHV0IFsobmdNb2RlbCldPVxcXCJub3RlLmNvbW1lbnRcXFwiLz48L2xpPlxcclxcbiAgICA8bGk+PGxhYmVsPlRyZcWbxIc8L2xhYmVsPjxpbnB1dCBbKG5nTW9kZWwpXT0nbm90ZS5yYXRlJy8+PC9saT5cXHJcXG4gICAgPGxpPjxidXR0b24gKGNsaWNrKT0nYWRkTm90ZSgpJz4gRG9kYWogPC9idXR0b24+XFxyXFxuICAgIDxsaT48YnV0dG9uIChjbGljayk9J3Rlc3QoKSc+IEVNSVRVSiA8L2J1dHRvbj5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNb3ZpZX0gZnJvbSAnLi9tb3ZpZSc7XHJcbmltcG9ydCB7TW92aWVTZXJ2aWNlfSBmcm9tICcuL21vdmllLnNlcnZpY2UnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtb3ZpZXMnLFxyXG4gICAgdGVtcGxhdGU6ICByZXF1aXJlKCcuL21vdmllcy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9tb3ZpZXMuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW01vdmllU2VydmljZV0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG1vdmllczpNb3ZpZVtdO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICBwcml2YXRlIG1vdmllU2VydmljZTpNb3ZpZVNlcnZpY2UsXHJcbiAgICApe31cclxuICAgIGFkZE1vdmllKCk6dm9pZHtcclxuICAgICAgICB2YXIgbW92aWUgPSBuZXcgTW92aWUoICAgICAgICBcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZS50aXRsZVwiKSkudmFsdWUsXHJcbiAgICAgICAgcGFyc2VGbG9hdCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZS55ZWFyXCIpKS52YWx1ZSlcclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2VcclxuICAgICAgICAuYWRkTW92aWUobW92aWUpXHJcbiAgICAgICAgLnRoZW4obW92aWUgPT50aGlzLm1vdmllcy5wdXNoKG1vdmllKSk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5nZXRNb3ZpZXMoKTtcclxuICAgIH1cclxuICAgIGdldE1vdmllcygpOnZvaWR7XHJcbiAgICAgICAgIHRoaXMubW92aWVTZXJ2aWNlXHJcbiAgICAgICAgLmdldE1vdmllcygpXHJcbiAgICAgICAgLnRoZW4obW92aWVzPT50aGlzLm1vdmllcz1tb3ZpZXMpXHJcbiAgICAgICAgLmNhdGNoKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVNb3ZpZShtb3ZpZTpNb3ZpZSk6dm9pZHtcclxuICAgICAgICB0aGlzLm1vdmllU2VydmljZS5kZWxldGVNb3ZpZShtb3ZpZS5pZClcclxuICAgICAgICAudGhlbihtb3ZpZXM9PnRoaXMubW92aWVzPXRoaXMubW92aWVzLmZpbHRlcihtPT4gbSE9PW1vdmllKSk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIE1vdmlle1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgdGl0bGU6c3RyaW5nO1xyXG4gICAgeWVhcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOnN0cmluZyx5ZWFyOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMudGl0bGU9dGl0bGU7XHJcbiAgICAgICAgdGhpcy55ZWFyPXllYXI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLnRzIiwiaW1wb3J0IHsgSHR0cCAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnR7TW92aWV9IGZyb20gJy4vbW92aWUnO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdG9yfSBmcm9tICcuLi9hY3RvcnMvYWN0b3InO1xyXG5pbXBvcnR7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW92aWVTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICAgKSB7IH07XHJcbiAgICBcclxuICAgIGFkZE1vdmllKG1vdmllOk1vdmllKTpQcm9taXNlPE1vdmllPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoJ21vdmllcycsbW92aWUsdGhpcy5oZWFkZXJzKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBnZXRNb3ZpZXMoKTpQcm9taXNlPE1vdmllW10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAuZ2V0KCdtb3ZpZXMnKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZU1vdmllKGlkOm51bWJlcik6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmRlbGV0ZSgnbW92aWVzLycrYCR7aWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbigoKT0+bnVsbCk7XHJcbiAgICB9XHJcbiAgICBnZXRNb3ZpZShpZDpudW1iZXIpOlByb21pc2U8TW92aWU+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtb3ZpZXMvJytgJHtpZH1gKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2goYWN0b3JOYW1lOnN0cmluZyk6T2JzZXJ2YWJsZTxBY3RvcltdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmdldCgnYWN0b3JzLycgKyBgJHthY3Rvck5hbWV9YClcclxuICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhZGRBY3RvclRvTW92aWUobW92aWVJZDpudW1iZXIsYWN0b3JJZDpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KCdtb3ZpZXMvJytgJHttb3ZpZUlkfWAsYWN0b3JJZCx0aGlzLmhlYWRlcnMpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4oKCk9Pm51bGwpXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj4gTm93eSBGaWxtIDwvaDI+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDxsaT48bGFiZWw+VHl0dcWCPC9sYWJlbD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcIm1vdmllLnRpdGxlXFxcIiByZXF1aXJlZC8+PC9saT5cXHJcXG4gICAgPGxpPjxsYWJlbD5Sb2s8L2xhYmVsPjxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGlkPSdtb3ZpZS55ZWFyJyBtYXg9XFxcIjIwMTdcXFwiIG1pbj1cXFwiMTkwMFxcXCIgdmFsdWU9XFxcIjIwMDBcXFwiLz48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiAoY2xpY2spPSdhZGRNb3ZpZSgpJz4gRG9kYWogPC9idXR0b24+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGgxPk15IE1vdmllcyA8L2gxPlxcclxcblxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhbW92aWVzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQtZGVjay13cmFwcGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrXFxcIj5cXHJcXG4gICAgICAgXFxyXFxuICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0Zvcj1cXFwibGV0IG1vdmllIG9mIG1vdmllc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVxcXCI2MCVcXFwiPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbW92aWUtZGV0YWlsJyxtb3ZpZS5pZF1cXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57e21vdmllLnRpdGxlfX0gPC9hPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9J2RlbGV0ZU1vdmllKG1vdmllKSc+IERlbGV0ZSA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPnt7bW92aWUueWVhcn19PC9wPlxcclxcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPjxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+PC9zbWFsbD48L3A+XFxyXFxuICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vdmllcy5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuICAgIC8qLmNhcmQge1xcclxcbiAgICAgICAgYnJlYWstaW5zaWRlOmF2b2lkO1xcclxcbiAgICAgICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkLWRlY2t7XFxyXFxuICAgICAgICAgY29sdW1uLWNvdW50OjM7XFxyXFxuICAgICAgICAgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkOyAgIFxcclxcbiAgICB9Ki9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TW92aWV9IGZyb20gXCIuL21vdmllXCI7XHJcbmltcG9ydCB7QWN0b3J9IGZyb20gXCIuLi9hY3RvcnMvYWN0b3JcIjtcclxuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1BhcmFtcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSxTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbW92aWUtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltNb3ZpZVNlcnZpY2VdLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG1vdmllOk1vdmllO1xyXG4gICAgYWN0b3JzOk9ic2VydmFibGU8QWN0b3JbXT47XHJcbiAgICBwcml2YXRlIHNlYXJjaFRlcm0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBtb3ZpZVNlcnZpY2U6TW92aWVTZXJ2aWNlLFxyXG5cclxuICAgICl7fTtcclxuXHJcbiAgICBnb0JhY2soKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92aWUpXHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTp2b2lke1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zIFxyXG4gICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczpQYXJhbXMpPT50aGlzXHJcbiAgICAgICAgLm1vdmllU2VydmljZS5nZXRNb3ZpZSgrcGFyYW1zWydpZCddKSlcclxuICAgICAgICAuc3Vic2NyaWJlKG1vdmllID0+IHRoaXMubW92aWU9bW92aWUpICBcclxuXHJcbiAgICAgICAgdGhpcy5hY3RvcnMgPSB0aGlzLnNlYXJjaFRlcm1cclxuICAgICAgICAuZGVib3VuY2VUaW1lKDYwMClcclxuICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgIC5zd2l0Y2hNYXAodGVybT0+IHRlcm1cclxuICAgICAgICA/IHRoaXMubW92aWVTZXJ2aWNlLnNlYXJjaCh0ZXJtKVxyXG4gICAgICAgIDogT2JzZXJ2YWJsZS5vZjxBY3RvcltdPihbXSlcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBhZGRBY3RvclRvTW92aWUoYWN0b3I6QWN0b3Ipe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW92aWVTZXJ2aWNlLmFkZEFjdG9yVG9Nb3ZpZSh0aGlzLm1vdmllLmlkICxhY3Rvci5pZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzZWFyY2goYWN0b3JOYW1lOnN0cmluZyk6dm9pZHtcclxuICAgICAgICB0aGlzLnNlYXJjaFRlcm0ubmV4dChhY3Rvck5hbWUpXHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0b3JTZXJ2aWNlfSBmcm9tICcuL2FjdG9yLnNlcnZpY2UnXG5pbXBvcnR7QWN0b3J9IGZyb20gJy4vYWN0b3InO1xuaW1wb3J0e0FjdG9yQ3JlYXRlQ29tcG9uZW50fSBmcm9tICcuL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidhY3RvcnMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9ycy5jb21wb25lbnQuaHRtbCcpLFxuICAgIHByb3ZpZGVyczogW0FjdG9yU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgQWN0b3JzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGFjdG9yczpBY3RvcltdO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsXG4gICAgKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmdldEFjdG9ycygpO1xuICAgIH1cblxuICAgIGdldEFjdG9ycygpOnZvaWR7XG4gICAgICAgIHRoaXMuYWN0b3JTZXJ2aWNlXG4gICAgICAgIC5nZXRBbGxBY3RvcnMoKVxuICAgICAgICAudGhlbihhY3RvcnM9PnRoaXMuYWN0b3JzPWFjdG9ycyk7XG4gICAgfVxuICAgIG9uQWN0b3JBZGQoYWN0b3I6QWN0b3Ipe1xuICAgICAgICB0aGlzLmFjdG9ycy5wdXNoKGFjdG9yKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0e0h0dHAsSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0e0FjdG9yfSBmcm9tIFwiLi9hY3RvclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0b3JTZXJ2aWNle1xuICAgIHByaXZhdGUgYWN0b3JVUkw9XCJhY3RvcnMvXCI7XG4gICAgcHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6SHR0cFxuICAgICAgICApe31cbiAgICAgICAgXG4gICAgYWRkQWN0b3IoYWN0b3I6QWN0b3IpOlByb21pc2U8QWN0b3I+e1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5wb3N0KHRoaXMuYWN0b3JVUkwsYWN0b3IsdGhpcy5oZWFkZXJzKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcblxuICAgIH1cblxuICAgIGdldEFsbEFjdG9ycygpOlByb21pc2U8QWN0b3JbXT57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldCh0aGlzLmFjdG9yVVJMKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZ2V0QWN0b3JEZXRhaWwoaWQ6bnVtYmVyKTpQcm9taXNlPEFjdG9yPntcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3RvclVSTCArIGAke2lkfWApXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGFjdG9yLWNyZWF0ZSAob25BY3RvckFkZCk9J29uQWN0b3JBZGQoJGV2ZW50KSc+PC9hY3Rvci1jcmVhdGU+XFxyXFxuXFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCBhY3RvciBvZiBhY3RvcnNcXFwiPlxcclxcbiAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hY3Rvci1kZXRhaWwnLGFjdG9yLmlkXVxcXCI+ICB7e2FjdG9yLmZpcnN0TmFtZX19IHt7YWN0b3IubGFzdE5hbWV9fSA8L2E+PC9saT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdG9yfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHtBY3RvclNlcnZpY2V9IGZyb20gJy4vYWN0b3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidhY3Rvci1jcmVhdGUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWN0b3ItY3JlYXRlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yQ3JlYXRlQ29tcG9uZW50e1xyXG4gICAgYWN0b3I6QWN0b3I7XHJcbiAgICBAT3V0cHV0KCkgb25BY3RvckFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWN0b3I+KCk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsXHJcbiAgICAgICBcclxuICAgICl7XHJcbiAgICAgICAgIHRoaXMuYWN0b3I9bmV3IEFjdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0b3IoYWN0b3I6QWN0b3IpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hY3RvclNlcnZpY2UuYWRkQWN0b3IoYWN0b3IpXHJcbiAgICAgICAgLnRoZW4ocmVzPT50aGlzLm9uQWN0b3JBZGQuZW1pdChyZXMpKTtcclxuICAgIH1cclxuICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIEFjdG9ye1xuICAgIGlkOm51bWJlcjtcbiAgICBmaXJzdE5hbWU6c3RyaW5nO1xuICAgIGxhc3ROYW1lOnN0cmluZztcbiAgICBiaXJ0aGRheTpEYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICA8ZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcIkZpcnN0TmFtZVxcXCI+SW1pZSA8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImFjdG9yLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJGaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdE5hbWVcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwiTGFzdE5hbWVcXFwiPk5hendpc2tvIDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWN0b3IubGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJMYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3ROYW1lXFxcIj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJCaXJ0aGRheVxcXCI+RGF0YSBVcm9kemVuaWEgPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIFsobmdNb2RlbCldPVxcXCJhY3Rvci5iaXJ0aGRheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIkJpcnRoZGF5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQmlydGhkYXlcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8YnV0dG9uIChjbGljayk9J2FkZEFjdG9yKGFjdG9yKScgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RG9kYWogPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBY3RvclNlcnZpY2V9IGZyb20gJy4vYWN0b3Iuc2VydmljZSdcclxuaW1wb3J0IHtBY3Rvcn0gZnJvbSAnLi9hY3RvcidcclxuaW1wb3J0e0FjdGl2YXRlZFJvdXRlLFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWN0b3ItZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgYWN0b3I6QWN0b3I7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApXHJcbiAgICB7fVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcil7XHJcbiAgICAgICB0aGlzLmFjdG9yU2VydmljZS5nZXRBY3RvckRldGFpbChpZClcclxuICAgICAgIC50aGVuKGFjdG9yID0+IHRoaXMuYWN0b3I9YWN0b3IpXHJcbiAgICAgICAudGhlbigoKT0+Y29uc29sZS5sb2codGhpcy5hY3RvcikpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xyXG4gICAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczpQYXJhbXMpPT5cclxuICAgICAgICB0aGlzLmdldEFjdG9yRGV0YWlsKCtwYXJhbXNbJ2lkJ10pKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj0nYWN0b3IhPW51bGwnPlxcclxcbiAgICA8dWw+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5maXJzdE5hbWV9fSA8L2xpPlxcclxcbiAgICA8bGk+IHt7YWN0b3IubGFzdE5hbWV9fSA8L2xpPlxcclxcbiAgICA8bGk+IHt7YWN0b3IuYmlydGhkYXl9fSA8L2xpPlxcclxcbjwvdWw+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqc1wiXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5TemN6ZWfDs8WCeSBmaWxtdSA8aDI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwibW92aWUtZGV0YWlsXFxcIiAqbmdJZj0nbW92aWUnID5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpPiB7e21vdmllLnRpdGxlfX0gPC9saT5cXHJcXG4gICAgICAgIDxsaT4gIHt7bW92aWUueWVhcn19IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgICA8YnV0dG9uIChjbGljayk9J2dvQmFjaygpJz5iYWNrPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZiA9IFxcXCJ0aGlzLm1vdmllICE9IG51bGxcXFwiPlxcclxcbjxub3RlcyBbbW92aWVJZF0gPSBcXFwidGhpcy5tb3ZpZS5pZFxcXCI+IDwvbm90ZXM+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGg0PkRvZGFqIGFrdG9yw7N3PC9oND5cXHJcXG48ZGl2PlxcclxcbjxpbnB1dCAjc2VhcmNoQm94IGlkPVxcXCJzZWFyY2gtYm94XFxcIiAoa2V5dXApPVxcXCJzZWFyY2goc2VhcmNoQm94LnZhbHVlKVxcXCIvPlxcclxcbjxkaXYgKm5nRm9yPVxcXCJsZXQgYWN0b3Igb2YgYWN0b3JzIHwgYXN5bmMgXFxcIlxcclxcbihjbGljayk9XFxcImFkZEFjdG9yVG9Nb3ZpZShhY3RvcilcXFwiIGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIiA+XFxyXFxue3thY3Rvci5maXJzdE5hbWV9fSAge3thY3Rvci5sYXN0TmFtZX19XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
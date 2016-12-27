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
	var actors_component_1 = __webpack_require__(44);
	var actor_create_component_1 = __webpack_require__(47);
	var actor_detail_component_1 = __webpack_require__(50);
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
	        console.log(movie);
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
	__webpack_require__(42);
	var MovieDetailComponent = (function () {
	    function MovieDetailComponent(location, route, movieService) {
	        this.location = location;
	        this.route = route;
	        this.movieService = movieService;
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
	    };
	    return MovieDetailComponent;
	}());
	MovieDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'movie-detail',
	        template: __webpack_require__(43),
	        providers: [movie_service_1.MovieService],
	    }),
	    __metadata("design:paramtypes", [common_1.Location,
	        router_1.ActivatedRoute,
	        movie_service_1.MovieService])
	], MovieDetailComponent);
	exports.MovieDetailComponent = MovieDetailComponent;


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/switchMap");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<h2>Szczegóły filmu <h2>\r\n\r\n<div class=\"movie-detail\" *ngIf='movie' >\r\n    <ul>\r\n        <li> {{movie.title}} </li>\r\n        <li>  {{movie.year}} </li>\r\n    </ul>\r\n     <button (click)='goBack()'>back</button>\r\n</div>\r\n\r\n<div *ngIf = \"this.movie != null\">\r\n<notes [movieId] = \"this.movie.id\"> </notes>\r\n</div>"

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
	var actor_service_1 = __webpack_require__(45);
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
	        template: __webpack_require__(46),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService])
	], ActorsComponent);
	exports.ActorsComponent = ActorsComponent;


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
/* 46 */
/***/ function(module, exports) {

	module.exports = "<actor-create (onActorAdd)='onActorAdd($event)'></actor-create>\r\n\r\n<div *ngFor=\"let actor of actors\">\r\n    <li><a [routerLink]=\"['/actor-detail',actor.id]\">  {{actor.firstName}} {{actor.lastName}} </a></li>\r\n</div>"

/***/ },
/* 47 */
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
	var actor_1 = __webpack_require__(48);
	var actor_service_1 = __webpack_require__(45);
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
	        template: __webpack_require__(49),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService])
	], ActorCreateComponent);
	exports.ActorCreateComponent = ActorCreateComponent;


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	var Actor = (function () {
	    function Actor() {
	    }
	    return Actor;
	}());
	exports.Actor = Actor;


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div>\r\n  <div class=\"form-group\">\r\n    <label for=\"FirstName\">Imie </label>\r\n    <input type=\"text\" [(ngModel)]=\"actor.firstName\" name=\"first\" class=\"form-control\" id=\"FirstName\" placeholder=\"FirstName\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"LastName\">Nazwisko </label>\r\n    <input type=\"text\" [(ngModel)]=\"actor.lastName\" class=\"form-control\" id=\"LastName\" placeholder=\"LastName\">\r\n  </div>\r\n   <div class=\"form-group\">\r\n    <label for=\"Birthday\">Data Urodzenia </label>\r\n    <input type=\"date\" [(ngModel)]=\"actor.birthday\" class=\"form-control\" id=\"Birthday\" placeholder=\"Birthday\">\r\n  </div>\r\n\r\n  <button (click)='addActor(actor)' class=\"btn btn-default\">Dodaj </button>\r\n  </div>\r\n"

/***/ },
/* 50 */
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
	var actor_service_1 = __webpack_require__(45);
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
	        template: __webpack_require__(51),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService,
	        router_1.ActivatedRoute])
	], ActorDetailComponent);
	exports.ActorDetailComponent = ActorDetailComponent;


/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf='actor!=null'>\r\n    <ul>\r\n    <li> {{actor.firstName}} </li>\r\n    <li> {{actor.lastName}} </li>\r\n    <li> {{actor.birthday}} </li>\r\n</ul>\r\n</div>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTNhNDIyM2IyZWQ5NDcwOTQ3MDEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3M/M2RkZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3RlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3RlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcz83ZmNjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3JzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLG9CQUF5QixNQUFX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QUFDLGVBQUssSUFBSSxZQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssRUFBaEIsQ0FBZ0IsQ0FBQztjQUMvQixJQUFJLENBQUMsY0FBSSxjQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0tBRXRDLENBQUM7S0FDRCx1Q0FBUSxHQUFSO1NBQUEsaUJBTUM7U0FMRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Y0FDaEIsU0FBUyxDQUFDLFVBQUMsTUFBYTthQUN6QixZQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQWxDLENBQWtDLENBQUMsQ0FBQztLQUd4QyxDQUFDO0tBRUwsMkJBQUM7QUFBRCxFQUFDO0FBdEJZLHFCQUFvQjtLQU5oQyxnQkFBUyxDQUFDO1NBQ1AsUUFBUSxFQUFFLGNBQWM7U0FDeEIsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBK0IsQ0FBQztTQUNsRCxTQUFTLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO01BQzNCLENBQUM7c0NBSzJCLDRCQUFZO1NBQ25CLHVCQUFjO0lBSnZCLG9CQUFvQixDQXNCaEM7QUF0QlkscURBQW9COzs7Ozs7O0FDVmpDLHVFQUFzRSxpQkFBaUIscUJBQXFCLGdCQUFnQixxQkFBcUIsZ0JBQWdCLDBCIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTNhNDIyM2IyZWQ5NDcwOTQ3MDEiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge05vdGVzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtOb3RlQ3JlYXRlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtNb3ZpZXNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW92aWVEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWN0b3JzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdG9yQ3JlYXRlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdG9yRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWRldGFpbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcclxuICAgICAgICBDb3VudGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEZldGNoRGF0YUNvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdGVzQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdGVDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgICAgTW92aWVzQ29tcG9uZW50LFxyXG4gICAgICAgIE1vdmllRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEFjdG9yc0NvbXBvbmVudCxcclxuICAgICAgICBBY3RvckNyZWF0ZUNvbXBvbmVudCxcclxuICAgICAgICBBY3RvckRldGFpbENvbXBvbmVudCxcclxuXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY291bnRlcicsIGNvbXBvbmVudDogQ291bnRlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbm90ZXMnLGNvbXBvbmVudDpOb3Rlc0NvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ25vdGUtY3JlYXRlJyxjb21wb25lbnQ6Tm90ZUNyZWF0ZUNvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ21vdmllcycsY29tcG9uZW50Ok1vdmllc0NvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ21vdmllLWRldGFpbC86aWQnLGNvbXBvbmVudDpNb3ZpZURldGFpbENvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FjdG9ycycsY29tcG9uZW50OkFjdG9yc0NvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FjdG9ycy1jcmVhdGUnLGNvbXBvbmVudDpBY3RvckNyZWF0ZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3Rvci1kZXRhaWwvOmlkJyxjb21wb25lbnQ6QWN0b3JEZXRhaWxDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcclxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcclxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcclxcbiAgICAuYm9keS1jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+TXlNb3ZpZXM8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2NvdW50ZXInXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tZWR1Y2F0aW9uJz48L3NwYW4+IENvdW50ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZmV0Y2gtZGF0YSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IEZldGNoIGRhdGFcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL21vdmllcyddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IEZpbG15XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2FjdG9ycyddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IEFrdG9yenlcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXHJcXG5saS5saW5rLWFjdGl2ZSBhLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxyXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXHJcXG4gICAgLm1haW4tbmF2IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhci1oZWFkZXIge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxyXFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIHVsIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgbGkge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDZweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGxpIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgYSB7XFxyXFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SGVsbG8sIHdvcmxkITwvaDE+XFxyXFxuPHA+V2VsY29tZSB0byB5b3VyIG5ldyBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiwgYnVpbHQgd2l0aDo8L3A+XFxyXFxuPHVsPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9nZXQuYXNwLm5ldC8nPkFTUC5ORVQgQ29yZTwvYT4gYW5kIDxhIGhyZWY9J2h0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvNjdlZjhzYmQuYXNweCc+QyM8L2E+IGZvciBjcm9zcy1wbGF0Zm9ybSBzZXJ2ZXItc2lkZSBjb2RlPC9saT5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vYW5ndWxhci5pby8nPkFuZ3VsYXIgMjwvYT4gYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxcclxcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby8nPldlYnBhY2s8L2E+IGZvciBidWlsZGluZyBhbmQgYnVuZGxpbmcgY2xpZW50LXNpZGUgcmVzb3VyY2VzPC9saT5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9nZXRib290c3RyYXAuY29tLyc+Qm9vdHN0cmFwPC9hPiBmb3IgbGF5b3V0IGFuZCBzdHlsaW5nPC9saT5cXHJcXG4gICAgPCEtLTxub3Rlcz48L25vdGVzPi0tPlxcclxcbjwvdWw+XFxyXFxuPHA+VG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQsIHdlJ3ZlIGFsc28gc2V0IHVwOjwvcD5cXHJcXG48dWw+XFxyXFxuICAgIDxsaT48c3Ryb25nPkNsaWVudC1zaWRlIG5hdmlnYXRpb248L3N0cm9uZz4uIEZvciBleGFtcGxlLCBjbGljayA8ZW0+Q291bnRlcjwvZW0+IHRoZW4gPGVtPkJhY2s8L2VtPiB0byByZXR1cm4gaGVyZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5TZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmc8L3N0cm9uZz4uIEZvciBmYXN0ZXIgaW5pdGlhbCBsb2FkaW5nIGFuZCBpbXByb3ZlZCBTRU8sIHlvdXIgQW5ndWxhciAyIGFwcCBpcyBwcmVyZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgcmVzdWx0aW5nIEhUTUwgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3NlciB3aGVyZSBhIGNsaWVudC1zaWRlIGNvcHkgb2YgdGhlIGFwcCB0YWtlcyBvdmVyLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+SG90IG1vZHVsZSByZXBsYWNlbWVudDwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGRvbid0IGV2ZW4gbmVlZCB0byByZWxvYWQgdGhlIHBhZ2UgYWZ0ZXIgbWFraW5nIG1vc3QgY2hhbmdlcy4gV2l0aGluIHNlY29uZHMgb2Ygc2F2aW5nIGNoYW5nZXMgdG8gZmlsZXMsIHlvdXIgQW5ndWxhciAyIGFwcCB3aWxsIGJlIHJlYnVpbHQgYW5kIGEgbmV3IGluc3RhbmNlIGluamVjdGVkIGlzIGludG8gdGhlIHBhZ2UuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxcclxcbjwvdWw+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xyXG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmVjYXN0cyA9IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmNyZW1lbnRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5pbXBvcnQge05vdGVTZXJ2aWNlfSBmcm9tICcuL25vdGUuc2VydmljZSc7XHJcbmltcG9ydCB7Tm90ZX0gZnJvbSAnLi9ub3RlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgLy8gbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbm90ZXMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbm90ZXMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbm90ZXMuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczpbTm90ZVNlcnZpY2VdLFxyXG5cclxufSlcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE5vdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgQElucHV0KCkgcHVibGljIG1vdmllSWQ7IFxyXG4gICAgbm90ZXM6Tm90ZVtdPW5ldyBBcnJheTxOb3RlPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbm90ZVNlcnZpY2U6Tm90ZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxyXG4gICAgKXtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RlcygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5ub3RlU2VydmljZS5nZXROb3Rlcyh0aGlzLm1vdmllSWQpXHJcbiAgICAgICAgIC50aGVuKG5vdGVzID0+IHRoaXMubm90ZXM9bm90ZXMpXHJcbiAgICAgICAgLy8gLmNhdGNoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgZ290b05vdGVDcmVhdGUoKTp2b2lke1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbm90ZS1jcmVhdGUvJ10pXHJcbiAgICB9O1xyXG4gICAgb25Ob3RlQWRkKG5vdGU6Tm90ZSl7XHJcbiAgICAgICAgdGhpcy5ub3Rlcy5wdXNoKG5vdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvbW1lbnQobm90ZTpOb3RlKXtcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLmRlbGV0ZUNvbW1lbnQodGhpcy5tb3ZpZUlkLG5vdGUuaWQpXHJcbiAgICAgICAgLnRoZW4oKCk9PnRoaXMubm90ZXM9dGhpcy5ub3Rlcy5maWx0ZXIobiA9PiBuICE9IG5vdGUpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgIG5nT25Jbml0KCk6dm9pZHtcclxuICAgICAgICAgdGhpcy5nZXROb3RlcygpO1xyXG4gICAgIH1cclxuICBcclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQudHMiLCJpbXBvcnQge0luamVjdGFibGUsT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOb3RlfSBmcm9tICcuL25vdGUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIG5vdGVzVVJMID0gJ3Jldmlldy8nO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXI9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHB1YmxpYyBub3Rlc1NvdXJjZSA9IG5ldyBTdWJqZWN0PE5vdGU+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgICApIHtcclxuICAgICAgICBcclxuICAgICB9O1xyXG5cclxuICAgIGdldE5vdGVzKG1vdmllSWQ6bnVtYmVyKTogUHJvbWlzZTxOb3RlW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLm5vdGVzVVJMK2Ake21vdmllSWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpOyBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGFkZE5vdGUobm90ZTpOb3RlLG1vdmllSWQ6bnVtYmVyKTpQcm9taXNlPE5vdGU+eyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvZGFuaWUgbm90a2lcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KHRoaXMubm90ZXNVUkwrYCR7bW92aWVJZH1gXHJcbiAgICAgICAgICAgICxKU09OLnN0cmluZ2lmeShub3RlKVxyXG4gICAgICAgICAgICAse2hlYWRlcnM6dGhpcy5oZWFkZXJ9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gaGFuZGxlRXJyb3IoZXJyb3I6YW55KTpQcm9taXNlPGFueT57XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImJsYWQgd3lzdGFwaWxcIixlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGVDb21tZW50KG1vdmllSWQ6bnVtYmVyLGNvbW1lbnRJZDpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5kZWxldGUodGhpcy5ub3Rlc1VSTCtgJHttb3ZpZUlkfS8ke2NvbW1lbnRJZH1gKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKCgpPT5udWxsKVxyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmllIG1hIG1uaWVcIik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPk15IE5vdGVzIDwvaDE+XFxyXFxuXFxyXFxuPCEtLTxsaSAqbmdGb3I9J2xldCBub3RlIG9mIG5vdGVzJz5cXHJcXG4gICAgPHNwYW4+IHt7bm90ZS50aXRsZX19IDwvc3Bhbj5cXHJcXG48L2xpPi0tPlxcclxcblxcclxcbjwhLS08cD5cXHJcXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJnb3RvTm90ZUNyZWF0ZSgpXFxcIj4gIENyZWF0ZSBOZXcgIDwvYnV0dG9uPlxcclxcbjwvcD4tLT5cXHJcXG48cCAqbmdJZj1cXFwiIW5vdGVzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQtZGVjay13cmFwcGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrXFxcIj5cXHJcXG4gICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nRm9yPVxcXCJsZXQgbm90ZSBvZiBub3Rlc1xcXCI+XFxyXFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XFxcIjYwJVxcXCI+PGEgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnt7bm90ZS5jb21tZW50fX08L2E+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aD48YnV0dG9uIChjbGljayk9J2RlbGV0ZUNvbW1lbnQobm90ZSknPlVzdcWEIDwvYnV0dG9uPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj57e25vdGUucmF0ZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPjxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+PC9zbWFsbD48L3A+XFxyXFxuICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48bm90ZS1jcmVhdGUgKG9uTm90ZUFkZCk9XFxcIm9uTm90ZUFkZCgkZXZlbnQpXFxcIiBbbW92aWVJZF09XFxcIm1vdmllSWRcXFwiPjwvbm90ZS1jcmVhdGU+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm90ZXMuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4gICAgLmNhcmQge1xcclxcbiAgICAgICAgYnJlYWstaW5zaWRlOmF2b2lkO1xcclxcbiAgICAgICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkLWRlY2t7XFxyXFxuICAgICAgICAgY29sdW1uLWNvdW50OjM7XFxyXFxuICAgICAgICAgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkOyAgIFxcclxcbiAgICB9XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsSW5wdXQsRXZlbnRFbWl0dGVyLE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7UGFyYW1zLEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcclxuXHJcbmltcG9ydCB7Tm90ZVNlcnZpY2V9IGZyb20gJy4vbm90ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtOb3RlLE1vY2tlZE5vdGV9IGZyb20gJy4vbm90ZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJub3RlLWNyZWF0ZVwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW05vdGVTZXJ2aWNlXSxcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZUNyZWF0ZUNvbXBvbmVudHtcclxuICAgIG5vdGU6Tm90ZTtcclxuICAgIEBPdXRwdXQoKSBvbk5vdGVBZGQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGU+KClcclxuICAgIEBJbnB1dCgpIG1vdmllSWQ9MDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5vdGVTZXJ2aWNlOk5vdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246TG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5ub3RlPW5ldyBOb3RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTm90ZSgpOnZvaWR7ICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2UuYWRkTm90ZSh0aGlzLm5vdGUsdGhpcy5tb3ZpZUlkKVxyXG4gICAgICAgIC50aGVuKHJlcz0+dGhpcy5vbk5vdGVBZGQuZW1pdChyZXMpKVxyXG4gICAgICAgLy8gLnRoZW4oKCk9PnRoaXMuZ29CYWNrKCkpO1xyXG4gICAgfVxyXG4gICAgZ29CYWNrKCk6dm9pZHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICAgIHRlc3QoKXtcclxuICAgICAgICB0aGlzLm9uTm90ZUFkZC5lbWl0KG5ldyBNb2NrZWROb3RlKCkubm90ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBOb3RlIHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHJhdGU6IG51bWJlcjtcclxuICAgIGNvbW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmF0ZT0wO1xyXG4gICAgICAgIHRoaXMuY29tbWVudD1cIlwiO1xyXG4gICAgfVxyXG59ICAgXHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja2VkTm90ZXtcclxuICAgIG5vdGU6Tm90ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ub3RlPW5ldyBOb3RlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZS5pZD0xMDA7XHJcbiAgICAgICAgdGhpcy5ub3RlLmNvbW1lbnQ9XCJOSWt1c2lvd2VcIjtcclxuICAgICAgICB0aGlzLm5vdGUucmF0ZT01O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPiBOb3dhIG5vdGF0a2EgPC9oMj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgIDxsaT48bGFiZWw+VHl0dcWCPC9sYWJlbD48aW5wdXQgWyhuZ01vZGVsKV09XFxcIm5vdGUuY29tbWVudFxcXCIvPjwvbGk+XFxyXFxuICAgIDxsaT48bGFiZWw+VHJlxZvEhzwvbGFiZWw+PGlucHV0IFsobmdNb2RlbCldPSdub3RlLnJhdGUnLz48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiAoY2xpY2spPSdhZGROb3RlKCknPiBEb2RhaiA8L2J1dHRvbj5cXHJcXG4gICAgPGxpPjxidXR0b24gKGNsaWNrKT0ndGVzdCgpJz4gRU1JVFVKIDwvYnV0dG9uPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01vdmllfSBmcm9tICcuL21vdmllJztcclxuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSdcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vdmllcycsXHJcbiAgICB0ZW1wbGF0ZTogIHJlcXVpcmUoJy4vbW92aWVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL21vdmllcy5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbTW92aWVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbW92aWVzOk1vdmllW107XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgIHByaXZhdGUgbW92aWVTZXJ2aWNlOk1vdmllU2VydmljZSxcclxuICAgICl7fVxyXG4gICAgYWRkTW92aWUoKTp2b2lke1xyXG4gICAgICAgIHZhciBtb3ZpZSA9IG5ldyBNb3ZpZSggICAgICAgIFxyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmllLnRpdGxlXCIpKS52YWx1ZSxcclxuICAgICAgICBwYXJzZUZsb2F0KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmllLnllYXJcIikpLnZhbHVlKVxyXG4gICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmllU2VydmljZVxyXG4gICAgICAgIC5hZGRNb3ZpZShtb3ZpZSlcclxuICAgICAgICAudGhlbihtb3ZpZSA9PnRoaXMubW92aWVzLnB1c2gobW92aWUpKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6dm9pZHtcclxuICAgICAgICB0aGlzLmdldE1vdmllcygpO1xyXG4gICAgfVxyXG4gICAgZ2V0TW92aWVzKCk6dm9pZHtcclxuICAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2VcclxuICAgICAgICAuZ2V0TW92aWVzKClcclxuICAgICAgICAudGhlbihtb3ZpZXM9PnRoaXMubW92aWVzPW1vdmllcylcclxuICAgICAgICAuY2F0Y2goKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZU1vdmllKG1vdmllOk1vdmllKTp2b2lke1xyXG4gICAgICAgIHRoaXMubW92aWVTZXJ2aWNlLmRlbGV0ZU1vdmllKG1vdmllLmlkKVxyXG4gICAgICAgIC50aGVuKG1vdmllcz0+dGhpcy5tb3ZpZXM9dGhpcy5tb3ZpZXMuZmlsdGVyKG09PiBtIT09bW92aWUpKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgTW92aWV7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6c3RyaW5nLHllYXI6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy50aXRsZT10aXRsZTtcclxuICAgICAgICB0aGlzLnllYXI9eWVhcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUudHMiLCJpbXBvcnQgeyBIdHRwICwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydHtNb3ZpZX0gZnJvbSAnLi9tb3ZpZSc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW92aWVTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICAgKSB7IH07XHJcbiAgICBcclxuICAgIGFkZE1vdmllKG1vdmllOk1vdmllKTpQcm9taXNlPE1vdmllPntcclxuICAgICAgICBjb25zb2xlLmxvZyhtb3ZpZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucG9zdCgnbW92aWVzJyxtb3ZpZSx0aGlzLmhlYWRlcnMpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIGdldE1vdmllcygpOlByb21pc2U8TW92aWVbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5nZXQoJ21vdmllcycpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlTW92aWUoaWQ6bnVtYmVyKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAuZGVsZXRlKCdtb3ZpZXMvJytgJHtpZH1gKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKCgpPT5udWxsKTtcclxuICAgIH1cclxuICAgIGdldE1vdmllKGlkOm51bWJlcik6UHJvbWlzZTxNb3ZpZT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21vdmllcy8nK2Ake2lkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPiBOb3d5IEZpbG0gPC9oMj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICBcXHJcXG4gICAgPGxpPjxsYWJlbD5UeXR1xYI8L2xhYmVsPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibW92aWUudGl0bGVcXFwiIHJlcXVpcmVkLz48L2xpPlxcclxcbiAgICA8bGk+PGxhYmVsPlJvazwvbGFiZWw+PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgaWQ9J21vdmllLnllYXInIG1heD1cXFwiMjAxN1xcXCIgbWluPVxcXCIxOTAwXFxcIiB2YWx1ZT1cXFwiMjAwMFxcXCIvPjwvbGk+XFxyXFxuICAgIDxsaT48YnV0dG9uIChjbGljayk9J2FkZE1vdmllKCknPiBEb2RhaiA8L2J1dHRvbj5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48aDE+TXkgTW92aWVzIDwvaDE+XFxyXFxuXFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFtb3ZpZXNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrLXdyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2tcXFwiPlxcclxcbiAgICAgICBcXHJcXG4gICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nRm9yPVxcXCJsZXQgbW92aWUgb2YgbW92aWVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxyXFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGggd2lkdGg9XFxcIjYwJVxcXCI+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tb3ZpZS1kZXRhaWwnLG1vdmllLmlkXVxcXCIgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnt7bW92aWUudGl0bGV9fSA8L2E+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT0nZGVsZXRlTW92aWUobW92aWUpJz4gRGVsZXRlIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3ttb3ZpZS55ZWFyfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+PHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj48L3NtYWxsPjwvcD5cXHJcXG4gICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW92aWVzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4gICAgLyouY2FyZCB7XFxyXFxuICAgICAgICBicmVhay1pbnNpZGU6YXZvaWQ7XFxyXFxuICAgICAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhcmQtZGVja3tcXHJcXG4gICAgICAgICBjb2x1bW4tY291bnQ6MztcXHJcXG4gICAgICAgICBvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7ICAgXFxyXFxuICAgIH0qL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNb3ZpZX0gZnJvbSBcIi4vbW92aWVcIjtcclxuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1BhcmFtcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbW92aWUtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltNb3ZpZVNlcnZpY2VdLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG1vdmllOk1vdmllO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgbW92aWVTZXJ2aWNlOk1vdmllU2VydmljZSxcclxuXHJcbiAgICApe307XHJcblxyXG4gICAgZ29CYWNrKCk6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmllKVxyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6dm9pZHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xyXG4gICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczpQYXJhbXMpPT50aGlzXHJcbiAgICAgICAgLm1vdmllU2VydmljZS5nZXRNb3ZpZSgrcGFyYW1zWydpZCddKSlcclxuICAgICAgICAuc3Vic2NyaWJlKG1vdmllID0+IHRoaXMubW92aWU9bW92aWUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCJcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+U3pjemVnw7PFgnkgZmlsbXUgPGgyPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIm1vdmllLWRldGFpbFxcXCIgKm5nSWY9J21vdmllJyA+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT4ge3ttb3ZpZS50aXRsZX19IDwvbGk+XFxyXFxuICAgICAgICA8bGk+ICB7e21vdmllLnllYXJ9fSA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICAgPGJ1dHRvbiAoY2xpY2spPSdnb0JhY2soKSc+YmFjazwvYnV0dG9uPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgKm5nSWYgPSBcXFwidGhpcy5tb3ZpZSAhPSBudWxsXFxcIj5cXHJcXG48bm90ZXMgW21vdmllSWRdID0gXFxcInRoaXMubW92aWUuaWRcXFwiPiA8L25vdGVzPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0b3JTZXJ2aWNlfSBmcm9tICcuL2FjdG9yLnNlcnZpY2UnXG5pbXBvcnR7QWN0b3J9IGZyb20gJy4vYWN0b3InO1xuaW1wb3J0e0FjdG9yQ3JlYXRlQ29tcG9uZW50fSBmcm9tICcuL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidhY3RvcnMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9ycy5jb21wb25lbnQuaHRtbCcpLFxuICAgIHByb3ZpZGVyczogW0FjdG9yU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgQWN0b3JzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGFjdG9yczpBY3RvcltdO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsXG4gICAgKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmdldEFjdG9ycygpO1xuICAgIH1cblxuICAgIGdldEFjdG9ycygpOnZvaWR7XG4gICAgICAgIHRoaXMuYWN0b3JTZXJ2aWNlXG4gICAgICAgIC5nZXRBbGxBY3RvcnMoKVxuICAgICAgICAudGhlbihhY3RvcnM9PnRoaXMuYWN0b3JzPWFjdG9ycyk7XG4gICAgfVxuICAgIG9uQWN0b3JBZGQoYWN0b3I6QWN0b3Ipe1xuICAgICAgICB0aGlzLmFjdG9ycy5wdXNoKGFjdG9yKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0e0h0dHAsSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0e0FjdG9yfSBmcm9tIFwiLi9hY3RvclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0b3JTZXJ2aWNle1xuICAgIHByaXZhdGUgYWN0b3JVUkw9XCJhY3RvcnMvXCI7XG4gICAgcHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6SHR0cFxuICAgICAgICApe31cbiAgICAgICAgXG4gICAgYWRkQWN0b3IoYWN0b3I6QWN0b3IpOlByb21pc2U8QWN0b3I+e1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5wb3N0KHRoaXMuYWN0b3JVUkwsYWN0b3IsdGhpcy5oZWFkZXJzKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcblxuICAgIH1cblxuICAgIGdldEFsbEFjdG9ycygpOlByb21pc2U8QWN0b3JbXT57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldCh0aGlzLmFjdG9yVVJMKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZ2V0QWN0b3JEZXRhaWwoaWQ6bnVtYmVyKTpQcm9taXNlPEFjdG9yPntcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3RvclVSTCArIGAke2lkfWApXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGFjdG9yLWNyZWF0ZSAob25BY3RvckFkZCk9J29uQWN0b3JBZGQoJGV2ZW50KSc+PC9hY3Rvci1jcmVhdGU+XFxyXFxuXFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCBhY3RvciBvZiBhY3RvcnNcXFwiPlxcclxcbiAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hY3Rvci1kZXRhaWwnLGFjdG9yLmlkXVxcXCI+ICB7e2FjdG9yLmZpcnN0TmFtZX19IHt7YWN0b3IubGFzdE5hbWV9fSA8L2E+PC9saT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdG9yfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHtBY3RvclNlcnZpY2V9IGZyb20gJy4vYWN0b3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidhY3Rvci1jcmVhdGUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWN0b3ItY3JlYXRlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yQ3JlYXRlQ29tcG9uZW50e1xyXG4gICAgYWN0b3I6QWN0b3I7XHJcbiAgICBAT3V0cHV0KCkgb25BY3RvckFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWN0b3I+KCk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsXHJcbiAgICAgICBcclxuICAgICl7XHJcbiAgICAgICAgIHRoaXMuYWN0b3I9bmV3IEFjdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0b3IoYWN0b3I6QWN0b3IpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hY3RvclNlcnZpY2UuYWRkQWN0b3IoYWN0b3IpXHJcbiAgICAgICAgLnRoZW4ocmVzPT50aGlzLm9uQWN0b3JBZGQuZW1pdChyZXMpKTtcclxuICAgIH1cclxuICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIEFjdG9ye1xuICAgIGlkOm51bWJlcjtcbiAgICBmaXJzdE5hbWU6c3RyaW5nO1xuICAgIGxhc3ROYW1lOnN0cmluZztcbiAgICBiaXJ0aGRheTpEYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICA8ZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcIkZpcnN0TmFtZVxcXCI+SW1pZSA8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImFjdG9yLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJGaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdE5hbWVcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwiTGFzdE5hbWVcXFwiPk5hendpc2tvIDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWN0b3IubGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJMYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3ROYW1lXFxcIj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJCaXJ0aGRheVxcXCI+RGF0YSBVcm9kemVuaWEgPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIFsobmdNb2RlbCldPVxcXCJhY3Rvci5iaXJ0aGRheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIkJpcnRoZGF5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQmlydGhkYXlcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8YnV0dG9uIChjbGljayk9J2FkZEFjdG9yKGFjdG9yKScgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RG9kYWogPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBY3RvclNlcnZpY2V9IGZyb20gJy4vYWN0b3Iuc2VydmljZSdcclxuaW1wb3J0IHtBY3Rvcn0gZnJvbSAnLi9hY3RvcidcclxuaW1wb3J0e0FjdGl2YXRlZFJvdXRlLFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWN0b3ItZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgYWN0b3I6QWN0b3I7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApXHJcbiAgICB7fVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcil7XHJcbiAgICAgICB0aGlzLmFjdG9yU2VydmljZS5nZXRBY3RvckRldGFpbChpZClcclxuICAgICAgIC50aGVuKGFjdG9yID0+IHRoaXMuYWN0b3I9YWN0b3IpXHJcbiAgICAgICAudGhlbigoKT0+Y29uc29sZS5sb2codGhpcy5hY3RvcikpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xyXG4gICAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczpQYXJhbXMpPT5cclxuICAgICAgICB0aGlzLmdldEFjdG9yRGV0YWlsKCtwYXJhbXNbJ2lkJ10pKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj0nYWN0b3IhPW51bGwnPlxcclxcbiAgICA8dWw+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5maXJzdE5hbWV9fSA8L2xpPlxcclxcbiAgICA8bGk+IHt7YWN0b3IubGFzdE5hbWV9fSA8L2xpPlxcclxcbiAgICA8bGk+IHt7YWN0b3IuYmlydGhkYXl9fSA8L2xpPlxcclxcbjwvdWw+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
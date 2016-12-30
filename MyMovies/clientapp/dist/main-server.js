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
	var notes_component_1 = __webpack_require__(22);
	var note_create_component_1 = __webpack_require__(30);
	var movies_component_1 = __webpack_require__(34);
	var movie_detail_component_1 = __webpack_require__(40);
	var actors_component_1 = __webpack_require__(45);
	var actor_create_component_1 = __webpack_require__(48);
	var actor_detail_component_1 = __webpack_require__(50);
	var material_1 = __webpack_require__(52);
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
	            material_1.MaterialModule.forRoot(),
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
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

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n              \r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">MyMovies</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                 <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/movies']\">\r\n                        <span class='glyphicon glyphicon-th-film'></span> Filmy\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/actors']\">\r\n                        <span class='glyphicon glyphicon-th-user'></span> Aktorzy\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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

	module.exports = "\r\n\r\n<movies> </movies>"

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
	var router_1 = __webpack_require__(10);
	var note_service_1 = __webpack_require__(23);
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
	        template: __webpack_require__(27),
	        styles: [__webpack_require__(28)],
	        providers: [note_service_1.NoteService],
	    }),
	    __metadata("design:paramtypes", [note_service_1.NoteService,
	        router_1.Router])
	], NotesComponent);
	exports.NotesComponent = NotesComponent;


/***/ },
/* 23 */
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
	var http_1 = __webpack_require__(24);
	var Subject_1 = __webpack_require__(25);
	__webpack_require__(26);
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
	    return NoteService;
	}());
	NoteService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], NoteService);
	exports.NoteService = NoteService;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Subject");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<h1>My Notes </h1>\r\n\r\n<!--<li *ngFor='let note of notes'>\r\n    <span> {{note.title}} </span>\r\n</li>-->\r\n\r\n<!--<p>\r\n    <button (click)=\"gotoNoteCreate()\">  Create New  </button>\r\n</p>-->\r\n<p *ngIf=\"!notes\"><em>Loading...</em></p>\r\n<div class=\"card-deck-wrapper\">\r\n    <div class=\"card-deck\">\r\n       <div class=\"card\" *ngFor=\"let note of notes\">\r\n           <div class=\"card-block\">\r\n               <table style=\"width:100%\">\r\n                   <tr>\r\n                       <th width=\"60%\"><a class=\"card-title\">{{note.comment}}</a></th>\r\n                       <th>Edit</th>\r\n                       <th><button (click)='deleteComment(note)'>Usuń </button></th>\r\n               </table>\r\n               <p class=\"card-text\">{{note.rate}}</p>\r\n               <p class=\"card-text\"><small class=\"text-muted\"></small></p>\r\n           </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<note-create (onNoteAdd)=\"onNoteAdd($event)\" [movieId]=\"movieId\"></note-create>"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(29);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n    .card {\r\n        break-inside:avoid;\r\n        border-style: ridge;\r\n        border-width: 3px;\r\n    }\r\n    .card-deck{\r\n         column-count:3;\r\n         overflow-wrap:break-word;   \r\n    }\r\n", ""]);
	
	// exports


/***/ },
/* 30 */
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
	var common_1 = __webpack_require__(31);
	var router_1 = __webpack_require__(10);
	var note_service_1 = __webpack_require__(23);
	var note_1 = __webpack_require__(32);
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
	        template: __webpack_require__(33),
	        providers: [note_service_1.NoteService],
	    }),
	    __metadata("design:paramtypes", [note_service_1.NoteService,
	        common_1.Location,
	        router_1.ActivatedRoute])
	], NoteCreateComponent);
	exports.NoteCreateComponent = NoteCreateComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports) {

	module.exports = "<h2> Nowa notatka </h2>\r\n\r\n<div>\r\n    <ul>\r\n    <li><label>Tytuł</label><input [(ngModel)]=\"note.comment\"/></li>\r\n    <li><label>Treść</label><input [(ngModel)]='note.rate'/></li>\r\n    <li><button (click)='addNote()'> Dodaj </button>\r\n  \r\n    </ul>\r\n</div>\r\n"

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
	var movie_1 = __webpack_require__(35);
	var movie_service_1 = __webpack_require__(36);
	var MoviesComponent = (function () {
	    function MoviesComponent(movieService) {
	        this.movieService = movieService;
	        this.movie = new movie_1.Movie();
	    }
	    MoviesComponent.prototype.addMovie = function () {
	        var _this = this;
	        this.movieService
	            .addMovie(this.movie)
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
	        template: __webpack_require__(37),
	        styles: [__webpack_require__(38)],
	        providers: [movie_service_1.MovieService],
	    }),
	    __metadata("design:paramtypes", [movie_service_1.MovieService])
	], MoviesComponent);
	exports.MoviesComponent = MoviesComponent;


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	var Movie = (function () {
	    function Movie() {
	    }
	    return Movie;
	}());
	exports.Movie = Movie;
	var MovieDetailsResponse = (function () {
	    function MovieDetailsResponse() {
	    }
	    return MovieDetailsResponse;
	}());
	exports.MovieDetailsResponse = MovieDetailsResponse;


/***/ },
/* 36 */
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
	var http_1 = __webpack_require__(24);
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
	    MovieService.prototype.addActorToMovie = function (movieId, actorId, role) {
	        var data = { "actorId": actorId, "role": role };
	        var body = JSON.stringify(data);
	        return this.http
	            .post('movies/' + ("" + movieId), body, { headers: this.headers })
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
/* 37 */
/***/ function(module, exports) {

	module.exports = "<h2> Nowy Film </h2>\r\n\r\n<div>\r\n    <ul>\r\n        \r\n    <li><label>Tytuł</label><input type=\"text\" [(ngModel)]=\"movie.title\" required/></li>\r\n    <li><label>Rok</label><input type=\"number\" [(ngModel)]=\"movie.year\" max=\"2017\" min=\"1900\" value=\"2000\"/></li>\r\n    <li><button (click)='addMovie()'> Dodaj </button>\r\n    </ul>\r\n</div>\r\n\r\n<h1>My Movies </h1>\r\n\r\n\r\n<p *ngIf=\"!movies\"><em>Loading...</em></p>\r\n\r\n<div class=\"card-deck-wrapper\">\r\n    <div class=\"row\">\r\n    <div class=\"card-deck\">\r\n       \r\n       <div class=\"card\" *ngFor=\"let movie of movies\">\r\n            <div class=\"col-md-4\">\r\n           <div class=\"card-block\">\r\n               <table style=\"width:100%\">\r\n                   <tr>\r\n                       <th width=\"60%\"><a [routerLink]=\"['/movie-detail',movie.id]\" class=\"card-title\">{{movie.title}} </a></th>\r\n                       <!--<th>Edit</th>-->\r\n                       <button (click)='deleteMovie(movie)'> Delete </button>\r\n               </table>\r\n               <p class=\"card-text\">{{movie.year}}</p>\r\n               <p class=\"card-text\"><small class=\"text-muted\"></small></p>\r\n           </div>\r\n           </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(39);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n    /*.card {\r\n        break-inside:avoid;\r\n        border-style: ridge;\r\n        border-width: 3px;\r\n    }\r\n    .card-deck{\r\n         column-count:3;\r\n         overflow-wrap:break-word;   \r\n    }*/\r\n", ""]);
	
	// exports


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
	var core_1 = __webpack_require__(3);
	var movie_1 = __webpack_require__(35);
	var actor_1 = __webpack_require__(41);
	var common_1 = __webpack_require__(31);
	var router_1 = __webpack_require__(10);
	var movie_service_1 = __webpack_require__(36);
	var rxjs_1 = __webpack_require__(42);
	__webpack_require__(43);
	var MovieDetailComponent = (function () {
	    function MovieDetailComponent(location, route, movieService) {
	        this.location = location;
	        this.route = route;
	        this.movieService = movieService;
	        this.searchTerm = new rxjs_1.Subject();
	    }
	    ;
	    MovieDetailComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    MovieDetailComponent.prototype.getMovieDetails = function (id) {
	        var _this = this;
	        this.movieService.getMovie(id)
	            .then(function (res) { return _this.movieDetailsResponse = res; })
	            .then(function (det) {
	            _this.actorsInMovie = det.actors,
	                _this.movie = new movie_1.Movie(),
	                _this.movie.id = det.id,
	                _this.movie.title = det.title,
	                _this.movie.year = det.year;
	        });
	    };
	    MovieDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params
	            .subscribe(function (params) {
	            return _this.getMovieDetails(params['id']);
	        });
	        this.actors = this.searchTerm
	            .debounceTime(600)
	            .distinctUntilChanged()
	            .switchMap(function (term) { return term
	            ? _this.movieService.search(term)
	            : rxjs_1.Observable.of([]); });
	    };
	    MovieDetailComponent.prototype.addActorToMovie = function (actor, role) {
	        var _this = this;
	        var newActor = new actor_1.ActorInMovie();
	        newActor.firstName = actor.firstName;
	        newActor.id = actor.id;
	        newActor.lastName = actor.lastName;
	        newActor.role = role;
	        this.movieService.addActorToMovie(this.movie.id, actor.id, role)
	            .then(function () { return _this.actorsInMovie.push(newActor); });
	    };
	    MovieDetailComponent.prototype.search = function (actorName) {
	        this.searchTerm.next(actorName);
	    };
	    return MovieDetailComponent;
	}());
	MovieDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'movie-detail',
	        template: __webpack_require__(44),
	        providers: [movie_service_1.MovieService],
	    }),
	    __metadata("design:paramtypes", [common_1.Location,
	        router_1.ActivatedRoute,
	        movie_service_1.MovieService])
	], MovieDetailComponent);
	exports.MovieDetailComponent = MovieDetailComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	var Actor = (function () {
	    function Actor() {
	    }
	    return Actor;
	}());
	exports.Actor = Actor;
	var ActorInMovie = (function () {
	    function ActorInMovie() {
	    }
	    return ActorInMovie;
	}());
	exports.ActorInMovie = ActorInMovie;
	var Role = (function () {
	    function Role() {
	    }
	    return Role;
	}());
	exports.Role = Role;


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/switchMap");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<h2>Szczegóły filmu</h2>\r\n\r\n<p *ngIf=\"!movie\"><em>loading...</em></p>\r\n<div class=\"movie-detail\" *ngIf='movie'>\r\n    <ul>\r\n        <li> {{movie.title}} </li>\r\n        <li> {{movie.year}} </li>\r\n    </ul>\r\n    <button (click)='goBack()'>back</button>\r\n</div>\r\n\r\n<div *ngIf=\"actorsInMovie\" >\r\n    <div *ngFor=\"let actor of actorsInMovie\">\r\n       <a [routerLink]=\"['/actor-detail',actor.id]\"> {{actor.firstName}} {{actor.lastName}} </a> {{actor.role}}\r\n    </div>\r\n</div>\r\n\r\n<h4>Dodaj aktorów</h4>\r\n<div>\r\n    <input #role>\r\n    <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\r\n <div *ngIf=\"actors\">   \r\n    <ul>\r\n    <li *ngFor=\"let actor of actors | async \" (click)=\"addActorToMovie(actor,role.value)\" class=\"search-result\">\r\n        {{actor.firstName}} {{actor.lastName}}\r\n    </li>\r\n    </ul>\r\n </div>\r\n</div>\r\n\r\n\r\n\r\n<div *ngIf=\"this.movie != null\">\r\n    <notes [movieId]=\"this.movie.id\"> </notes>\r\n</div>"

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
	var actor_service_1 = __webpack_require__(46);
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
	        template: __webpack_require__(47),
	        providers: [actor_service_1.ActorService],
	    }),
	    __metadata("design:paramtypes", [actor_service_1.ActorService])
	], ActorsComponent);
	exports.ActorsComponent = ActorsComponent;


/***/ },
/* 46 */
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
	var http_1 = __webpack_require__(24);
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
/* 47 */
/***/ function(module, exports) {

	module.exports = "<actor-create (onActorAdd)='onActorAdd($event)'></actor-create>\r\n\r\n<div *ngFor=\"let actor of actors\">\r\n    <li><a [routerLink]=\"['/actor-detail',actor.id]\">  {{actor.firstName}} {{actor.lastName}} </a></li>\r\n</div>"

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
	var actor_1 = __webpack_require__(41);
	var actor_service_1 = __webpack_require__(46);
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
	var actor_service_1 = __webpack_require__(46);
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

	module.exports = "<p *ngIf=\"!actor\"><em>Loading...</em></p>\r\n<div *ngIf=\"actor\"> \r\n    <ul>\r\n    <li> {{actor.firstName}} </li>\r\n    <li> {{actor.lastName}} </li>\r\n    <li> {{actor.birthday}} </li>\r\n</ul>\r\n<div *ngFor=\"let role of actor.roles\">\r\n  <a [routerLink]=\"['/movie-detail',role.movieId]\">{{role.movieTitle}} </a>\r\n    {{role.roleName}} {{role.year}}\r\n</div>\r\n</div>\r\n"

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("@angular/material");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGFjMTBhZDg0MWQ3MzkxOGI5YzEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpvbmUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9TdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzPzNkZGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3M/N2ZjYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3JzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItY3JlYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQThCO0FBQzlCLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FB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c0hBQXNILGlCQUFpQixlQUFlLGVBQWUsR0FBRyxXQUFXLHlCOzs7Ozs7QUNBaFksK0MiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YWMxMGFkODQxZDczOTE4YjljMSIsImltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQnO1xyXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIlxuLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXyA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBfX2NvcmVfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5sZXQgcGF0Y2ggPSBmYWxzZTtcbmlmICghX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG59XG5cblxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuaWYgKHBhdGNoKSB7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7Tm90ZXNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge05vdGVDcmVhdGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9ub3Rlcy9ub3RlLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vdmllc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtNb3ZpZURldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RvcnNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hY3RvcnMvYWN0b3JzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWN0b3JDcmVhdGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItY3JlYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWN0b3JEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudCc7XHJcblxyXG5cclxuaW1wb3J0IHtNYXRlcmlhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuLy9pbXBvcnQge2NhcmQgYXMgTUNEY2FyZH0gZnJvbSAnQG1hdGVyaWFsL2NhcmQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdGVzQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdGVDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgICAgTW92aWVzQ29tcG9uZW50LFxyXG4gICAgICAgIE1vdmllRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEFjdG9yc0NvbXBvbmVudCxcclxuICAgICAgICBBY3RvckNyZWF0ZUNvbXBvbmVudCxcclxuICAgICAgICBBY3RvckRldGFpbENvbXBvbmVudCxcclxuXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ25vdGVzJyxjb21wb25lbnQ6Tm90ZXNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdub3RlLWNyZWF0ZScsY29tcG9uZW50Ok5vdGVDcmVhdGVDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdtb3ZpZXMnLGNvbXBvbmVudDpNb3ZpZXNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdtb3ZpZS1kZXRhaWwvOmlkJyxjb21wb25lbnQ6TW92aWVEZXRhaWxDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3RvcnMnLGNvbXBvbmVudDpBY3RvcnNDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3RvcnMtY3JlYXRlJyxjb21wb25lbnQ6QWN0b3JDcmVhdGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWN0b3ItZGV0YWlsLzppZCcsY29tcG9uZW50OkFjdG9yRGV0YWlsQ29tcG9uZW50fSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgIF0pLFxyXG5cclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG4gICAgLy8gc3R5bGVzOiBbcmVxdWlyZSgnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViLnNjc3MnKV0sXHJcbiAgICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxyXFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcclxcbiAgICAuYm9keS1jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPk15TW92aWVzPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcclxcbiAgICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbW92aWVzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWZpbG0nPjwvc3Bhbj4gRmlsbXlcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYWN0b3JzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLXVzZXInPjwvc3Bhbj4gQWt0b3J6eVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcclxcbmxpLmxpbmstYWN0aXZlIGEsXFxyXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcclxcbi5tYWluLW5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcclxcbiAgICAubWFpbi1uYXYge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgdWwge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBhIHtcXHJcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcblxcclxcbjxtb3ZpZXM+IDwvbW92aWVzPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuaW1wb3J0IHtOb3RlU2VydmljZX0gZnJvbSAnLi9ub3RlLnNlcnZpY2UnO1xyXG5pbXBvcnQge05vdGV9IGZyb20gJy4vbm90ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25vdGVzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25vdGVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25vdGVzLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6W05vdGVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBOb3Rlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtb3ZpZUlkOyBcclxuICAgIG5vdGVzOk5vdGVbXT1uZXcgQXJyYXk8Tm90ZT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5vdGVTZXJ2aWNlOk5vdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOlJvdXRlcixcclxuICAgICl7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm90ZXMoKTp2b2lke1xyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2UuZ2V0Tm90ZXModGhpcy5tb3ZpZUlkKVxyXG4gICAgICAgICAudGhlbihub3RlcyA9PiB0aGlzLm5vdGVzPW5vdGVzKVxyXG4gICAgICAgIC8vIC5jYXRjaCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIGdvdG9Ob3RlQ3JlYXRlKCk6dm9pZHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25vdGUtY3JlYXRlLyddKVxyXG4gICAgfTtcclxuICAgIG9uTm90ZUFkZChub3RlOk5vdGUpe1xyXG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb21tZW50KG5vdGU6Tm90ZSl7XHJcbiAgICAgICAgdGhpcy5ub3RlU2VydmljZS5kZWxldGVDb21tZW50KHRoaXMubW92aWVJZCxub3RlLmlkKVxyXG4gICAgICAgIC50aGVuKCgpPT50aGlzLm5vdGVzPXRoaXMubm90ZXMuZmlsdGVyKG4gPT4gbiAhPSBub3RlKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICBuZ09uSW5pdCgpOnZvaWR7XHJcbiAgICAgICAgIHRoaXMuZ2V0Tm90ZXMoKTtcclxuICAgICB9XHJcbiAgXHJcblxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOb3RlfSBmcm9tICcuL25vdGUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG5vdGVzVVJMID0gJ3Jldmlldy8nO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXI9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHB1YmxpYyBub3Rlc1NvdXJjZSA9IG5ldyBTdWJqZWN0PE5vdGU+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgICApIHtcclxuICAgICAgICBcclxuICAgICB9O1xyXG5cclxuICAgIGdldE5vdGVzKG1vdmllSWQ6bnVtYmVyKTogUHJvbWlzZTxOb3RlW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLm5vdGVzVVJMK2Ake21vdmllSWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpOyBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGFkZE5vdGUobm90ZTpOb3RlLG1vdmllSWQ6bnVtYmVyKTpQcm9taXNlPE5vdGU+eyBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QodGhpcy5ub3Rlc1VSTCtgJHttb3ZpZUlkfWBcclxuICAgICAgICAgICAgLEpTT04uc3RyaW5naWZ5KG5vdGUpXHJcbiAgICAgICAgICAgICx7aGVhZGVyczp0aGlzLmhlYWRlcn0pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiBoYW5kbGVFcnJvcihlcnJvcjphbnkpOlByb21pc2U8YW55PntcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiYmxhZCB3eXN0YXBpbFwiLGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZUNvbW1lbnQobW92aWVJZDpudW1iZXIsY29tbWVudElkOm51bWJlcik6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmRlbGV0ZSh0aGlzLm5vdGVzVVJMK2Ake21vdmllSWR9LyR7Y29tbWVudElkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4oKCk9Pm51bGwpXHJcbiAgICB9XHJcbiAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5NeSBOb3RlcyA8L2gxPlxcclxcblxcclxcbjwhLS08bGkgKm5nRm9yPSdsZXQgbm90ZSBvZiBub3Rlcyc+XFxyXFxuICAgIDxzcGFuPiB7e25vdGUudGl0bGV9fSA8L3NwYW4+XFxyXFxuPC9saT4tLT5cXHJcXG5cXHJcXG48IS0tPHA+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZ290b05vdGVDcmVhdGUoKVxcXCI+ICBDcmVhdGUgTmV3ICA8L2J1dHRvbj5cXHJcXG48L3A+LS0+XFxyXFxuPHAgKm5nSWY9XFxcIiFub3Rlc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2std3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZGVja1xcXCI+XFxyXFxuICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0Zvcj1cXFwibGV0IG5vdGUgb2Ygbm90ZXNcXFwiPlxcclxcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVxcXCI2MCVcXFwiPjxhIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57e25vdGUuY29tbWVudH19PC9hPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGJ1dHRvbiAoY2xpY2spPSdkZWxldGVDb21tZW50KG5vdGUpJz5Vc3XFhCA8L2J1dHRvbj48L3RoPlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3tub3RlLnJhdGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj48c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPjwvc21hbGw+PC9wPlxcclxcbiAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPG5vdGUtY3JlYXRlIChvbk5vdGVBZGQpPVxcXCJvbk5vdGVBZGQoJGV2ZW50KVxcXCIgW21vdmllSWRdPVxcXCJtb3ZpZUlkXFxcIj48L25vdGUtY3JlYXRlPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vdGVzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuICAgIC5jYXJkIHtcXHJcXG4gICAgICAgIGJyZWFrLWluc2lkZTphdm9pZDtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZC1kZWNre1xcclxcbiAgICAgICAgIGNvbHVtbi1jb3VudDozO1xcclxcbiAgICAgICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDsgICBcXHJcXG4gICAgfVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LElucHV0LEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1BhcmFtcyxBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXHJcblxyXG5pbXBvcnQge05vdGVTZXJ2aWNlfSBmcm9tICcuL25vdGUuc2VydmljZSc7XHJcbmltcG9ydCB7Tm90ZSxNb2NrZWROb3RlfSBmcm9tICcuL25vdGUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibm90ZS1jcmVhdGVcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25vdGUtY3JlYXRlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtOb3RlU2VydmljZV0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVDcmVhdGVDb21wb25lbnR7XHJcbiAgICBub3RlOk5vdGU7XHJcbiAgICBAT3V0cHV0KCkgb25Ob3RlQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RlPigpXHJcbiAgICBASW5wdXQoKSBtb3ZpZUlkPTA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBub3RlU2VydmljZTpOb3RlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMubm90ZT1uZXcgTm90ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5vdGUoKTp2b2lkeyAgICAgICBcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLmFkZE5vdGUodGhpcy5ub3RlLHRoaXMubW92aWVJZClcclxuICAgICAgICAudGhlbihyZXM9PnRoaXMub25Ob3RlQWRkLmVtaXQocmVzKSlcclxuICAgICAgIC8vIC50aGVuKCgpPT50aGlzLmdvQmFjaygpKTtcclxuICAgIH1cclxuICAgIGdvQmFjaygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBOb3RlIHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHJhdGU6IG51bWJlcjtcclxuICAgIGNvbW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmF0ZT0wO1xyXG4gICAgICAgIHRoaXMuY29tbWVudD1cIlwiO1xyXG4gICAgfVxyXG59ICAgXHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja2VkTm90ZXtcclxuICAgIG5vdGU6Tm90ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ub3RlPW5ldyBOb3RlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZS5pZD0xMDA7XHJcbiAgICAgICAgdGhpcy5ub3RlLmNvbW1lbnQ9XCJOSWt1c2lvd2VcIjtcclxuICAgICAgICB0aGlzLm5vdGUucmF0ZT01O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPiBOb3dhIG5vdGF0a2EgPC9oMj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgIDxsaT48bGFiZWw+VHl0dcWCPC9sYWJlbD48aW5wdXQgWyhuZ01vZGVsKV09XFxcIm5vdGUuY29tbWVudFxcXCIvPjwvbGk+XFxyXFxuICAgIDxsaT48bGFiZWw+VHJlxZvEhzwvbGFiZWw+PGlucHV0IFsobmdNb2RlbCldPSdub3RlLnJhdGUnLz48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiAoY2xpY2spPSdhZGROb3RlKCknPiBEb2RhaiA8L2J1dHRvbj5cXHJcXG4gIFxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01vdmllfSBmcm9tICcuL21vdmllJztcclxuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSdcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vdmllcycsXHJcbiAgICB0ZW1wbGF0ZTogIHJlcXVpcmUoJy4vbW92aWVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL21vdmllcy5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbTW92aWVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbW92aWVzOk1vdmllW107XHJcbiAgICBtb3ZpZTogTW92aWU7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgIHByaXZhdGUgbW92aWVTZXJ2aWNlOk1vdmllU2VydmljZSxcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5tb3ZpZT1uZXcgTW92aWUoKTtcclxuICAgIH1cclxuICAgIGFkZE1vdmllKCk6dm9pZHtcclxuICAgICAgICB0aGlzLm1vdmllU2VydmljZVxyXG4gICAgICAgIC5hZGRNb3ZpZSh0aGlzLm1vdmllKVxyXG4gICAgICAgIC50aGVuKG1vdmllID0+dGhpcy5tb3ZpZXMucHVzaChtb3ZpZSkpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuZ2V0TW92aWVzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRNb3ZpZXMoKTp2b2lke1xyXG4gICAgICAgICB0aGlzLm1vdmllU2VydmljZVxyXG4gICAgICAgIC5nZXRNb3ZpZXMoKVxyXG4gICAgICAgIC50aGVuKG1vdmllcz0+dGhpcy5tb3ZpZXM9bW92aWVzKVxyXG4gICAgICAgIC5jYXRjaCgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlTW92aWUobW92aWU6TW92aWUpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2UuZGVsZXRlTW92aWUobW92aWUuaWQpXHJcbiAgICAgICAgLnRoZW4obW92aWVzPT50aGlzLm1vdmllcz10aGlzLm1vdmllcy5maWx0ZXIobT0+IG0hPT1tb3ZpZSkpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC50cyIsImltcG9ydHtBY3RvcixBY3RvckluTW92aWV9IGZyb20gJy4uL2FjdG9ycy9hY3Rvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWV7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3IodGl0bGU6c3RyaW5nLHllYXI6IG51bWJlcil7XHJcbiAgICAvLyAgICAgdGhpcy50aXRsZT10aXRsZTtcclxuICAgIC8vICAgICB0aGlzLnllYXI9eWVhcjtcclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllRGV0YWlsc1Jlc3BvbnNlXHJcbntcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHRpdGxlOnN0cmluZztcclxuICAgIHllYXI6IG51bWJlcjtcclxuXHJcbiAgICBhY3RvcnM6QWN0b3JJbk1vdmllW107XHJcbiAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLnRzIiwiaW1wb3J0IHsgSHR0cCAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnR7TW92aWUsTW92aWVEZXRhaWxzUmVzcG9uc2V9IGZyb20gJy4vbW92aWUnO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdG9yLEFjdG9ySW5Nb3ZpZX0gZnJvbSAnLi4vYWN0b3JzL2FjdG9yJztcclxuaW1wb3J0e09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vdmllU2VydmljZXtcclxuICAgIHByaXZhdGUgaGVhZGVyczpIZWFkZXJzID0gbmV3IEhlYWRlcnMoeydjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIFxyXG4gICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICAgKSB7IH07XHJcbiAgICBcclxuICAgIGFkZE1vdmllKG1vdmllOk1vdmllKTpQcm9taXNlPE1vdmllPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoJ21vdmllcycsbW92aWUsdGhpcy5oZWFkZXJzKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBnZXRNb3ZpZXMoKTpQcm9taXNlPE1vdmllW10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAuZ2V0KCdtb3ZpZXMnKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZU1vdmllKGlkOm51bWJlcik6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmRlbGV0ZSgnbW92aWVzLycrYCR7aWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbigoKT0+bnVsbCk7XHJcbiAgICB9XHJcbiAgICBnZXRNb3ZpZShpZDpudW1iZXIpOlByb21pc2U8TW92aWVEZXRhaWxzUmVzcG9uc2U+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtb3ZpZXMvJytgJHtpZH1gKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2goYWN0b3JOYW1lOnN0cmluZyk6T2JzZXJ2YWJsZTxBY3RvcltdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmdldCgnYWN0b3JzLycgK2Ake2FjdG9yTmFtZX1gKVxyXG4gICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGFkZEFjdG9yVG9Nb3ZpZShtb3ZpZUlkOm51bWJlcixhY3RvcklkOm51bWJlcixyb2xlOnN0cmluZyk6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICBsZXQgZGF0YSA9IHtcImFjdG9ySWRcIjogYWN0b3JJZCxcInJvbGVcIjpyb2xlfTtcclxuICAgICAgICBsZXQgYm9keT1KU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoJ21vdmllcy8nK2Ake21vdmllSWR9YCxib2R5LHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKCgpPT5udWxsKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+IE5vd3kgRmlsbSA8L2gyPlxcclxcblxcclxcbjxkaXY+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIFxcclxcbiAgICA8bGk+PGxhYmVsPlR5dHXFgjwvbGFiZWw+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJtb3ZpZS50aXRsZVxcXCIgcmVxdWlyZWQvPjwvbGk+XFxyXFxuICAgIDxsaT48bGFiZWw+Um9rPC9sYWJlbD48aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwibW92aWUueWVhclxcXCIgbWF4PVxcXCIyMDE3XFxcIiBtaW49XFxcIjE5MDBcXFwiIHZhbHVlPVxcXCIyMDAwXFxcIi8+PC9saT5cXHJcXG4gICAgPGxpPjxidXR0b24gKGNsaWNrKT0nYWRkTW92aWUoKSc+IERvZGFqIDwvYnV0dG9uPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxoMT5NeSBNb3ZpZXMgPC9oMT5cXHJcXG5cXHJcXG5cXHJcXG48cCAqbmdJZj1cXFwiIW1vdmllc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2std3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZGVja1xcXCI+XFxyXFxuICAgICAgIFxcclxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiAqbmdGb3I9XFxcImxldCBtb3ZpZSBvZiBtb3ZpZXNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cXFwiNjAlXFxcIj48YSBbcm91dGVyTGlua109XFxcIlsnL21vdmllLWRldGFpbCcsbW92aWUuaWRdXFxcIiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+e3ttb3ZpZS50aXRsZX19IDwvYT48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aD5FZGl0PC90aD4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT0nZGVsZXRlTW92aWUobW92aWUpJz4gRGVsZXRlIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3ttb3ZpZS55ZWFyfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+PHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj48L3NtYWxsPjwvcD5cXHJcXG4gICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW92aWVzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4gICAgLyouY2FyZCB7XFxyXFxuICAgICAgICBicmVhay1pbnNpZGU6YXZvaWQ7XFxyXFxuICAgICAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhcmQtZGVja3tcXHJcXG4gICAgICAgICBjb2x1bW4tY291bnQ6MztcXHJcXG4gICAgICAgICBvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7ICAgXFxyXFxuICAgIH0qL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNb3ZpZSwgTW92aWVEZXRhaWxzUmVzcG9uc2V9IGZyb20gXCIuL21vdmllXCI7XHJcbmltcG9ydCB7QWN0b3IsQWN0b3JJbk1vdmllfSBmcm9tIFwiLi4vYWN0b3JzL2FjdG9yXCI7XHJcbmltcG9ydCB7TG9jYXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtQYXJhbXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7TW92aWVTZXJ2aWNlfSBmcm9tICcuL21vdmllLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGUsU3ViamVjdH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vdmllLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tb3ZpZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczpbTW92aWVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBtb3ZpZTpNb3ZpZTtcclxuICAgIGFjdG9yc0luTW92aWU6QWN0b3JJbk1vdmllW107XHJcbiAgICBhY3RvcnM6T2JzZXJ2YWJsZTxBY3RvcltdPjtcclxuICAgIG1vdmllRGV0YWlsc1Jlc3BvbnNlOk1vdmllRGV0YWlsc1Jlc3BvbnNlO1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hUZXJtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgbW92aWVTZXJ2aWNlOk1vdmllU2VydmljZSxcclxuXHJcbiAgICApe307XHJcblxyXG4gICAgZ29CYWNrKCk6dm9pZHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb3ZpZURldGFpbHMoaWQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLm1vdmllU2VydmljZS5nZXRNb3ZpZShpZClcclxuICAgICAgICAudGhlbihyZXM9PnRoaXMubW92aWVEZXRhaWxzUmVzcG9uc2U9cmVzKVxyXG4gICAgICAgIC50aGVuKGRldCA9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0b3JzSW5Nb3ZpZT1kZXQuYWN0b3JzLFxyXG4gICAgICAgICAgICB0aGlzLm1vdmllPW5ldyBNb3ZpZSgpLFxyXG4gICAgICAgICAgICB0aGlzLm1vdmllLmlkPWRldC5pZCxcclxuICAgICAgICAgICAgdGhpcy5tb3ZpZS50aXRsZT1kZXQudGl0bGUsXHJcbiAgICAgICAgICAgIHRoaXMubW92aWUueWVhcj1kZXQueWVhclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTp2b2lke1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgLnN1YnNjcmliZSgocGFyYW1zOlBhcmFtcyk9PlxyXG4gICAgICAgIHRoaXMuZ2V0TW92aWVEZXRhaWxzKHBhcmFtc1snaWQnXSkpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmFjdG9ycyA9IHRoaXMuc2VhcmNoVGVybVxyXG4gICAgICAgIC5kZWJvdW5jZVRpbWUoNjAwKVxyXG4gICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgLnN3aXRjaE1hcCh0ZXJtPT4gdGVybVxyXG4gICAgICAgID8gdGhpcy5tb3ZpZVNlcnZpY2Uuc2VhcmNoKHRlcm0pXHJcbiAgICAgICAgOiBPYnNlcnZhYmxlLm9mPEFjdG9yW10+KFtdKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGFkZEFjdG9yVG9Nb3ZpZShhY3RvcjpBY3Rvcixyb2xlOnN0cmluZyl7XHJcbiAgICAgICAgdmFyIG5ld0FjdG9yID0gbmV3IEFjdG9ySW5Nb3ZpZSgpO1xyXG4gICAgICAgIG5ld0FjdG9yLmZpcnN0TmFtZSA9IGFjdG9yLmZpcnN0TmFtZTtcclxuICAgICAgICBuZXdBY3Rvci5pZCA9IGFjdG9yLmlkO1xyXG4gICAgICAgIG5ld0FjdG9yLmxhc3ROYW1lID0gYWN0b3IubGFzdE5hbWU7XHJcbiAgICAgICAgbmV3QWN0b3Iucm9sZSA9IHJvbGU7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB0aGlzLm1vdmllU2VydmljZS5hZGRBY3RvclRvTW92aWUodGhpcy5tb3ZpZS5pZCAsYWN0b3IuaWQscm9sZSlcclxuICAgICAgICAudGhlbigoKT0+dGhpcy5hY3RvcnNJbk1vdmllLnB1c2gobmV3QWN0b3IpKVxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHNlYXJjaChhY3Rvck5hbWU6c3RyaW5nKTp2b2lke1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGVybS5uZXh0KGFjdG9yTmFtZSlcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgQWN0b3J7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICBmaXJzdE5hbWU6c3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6c3RyaW5nO1xyXG4gICAgYmlydGhkYXk6RGF0ZTtcclxuICAgIHJvbGVzOlJvbGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9ySW5Nb3ZpZXtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIGZpcnN0TmFtZTpzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTpzdHJpbmc7XHJcbiAgICByb2xlOnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvbGV7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICB5ZWFyOm51bWJlcjtcclxuICAgIHJvbGVOYW1lOnN0cmluZztcclxuICAgIG1vdmllVGl0bGU6c3RyaW5nO1xyXG4gICAgbW92aWVJZDpudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anNcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCJcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+U3pjemVnw7PFgnkgZmlsbXU8L2gyPlxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhbW92aWVcXFwiPjxlbT5sb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuPGRpdiBjbGFzcz1cXFwibW92aWUtZGV0YWlsXFxcIiAqbmdJZj0nbW92aWUnPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGk+IHt7bW92aWUudGl0bGV9fSA8L2xpPlxcclxcbiAgICAgICAgPGxpPiB7e21vdmllLnllYXJ9fSA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8YnV0dG9uIChjbGljayk9J2dvQmFjaygpJz5iYWNrPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwiYWN0b3JzSW5Nb3ZpZVxcXCIgPlxcclxcbiAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGFjdG9yIG9mIGFjdG9yc0luTW92aWVcXFwiPlxcclxcbiAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2FjdG9yLWRldGFpbCcsYWN0b3IuaWRdXFxcIj4ge3thY3Rvci5maXJzdE5hbWV9fSB7e2FjdG9yLmxhc3ROYW1lfX0gPC9hPiB7e2FjdG9yLnJvbGV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48aDQ+RG9kYWogYWt0b3LDs3c8L2g0PlxcclxcbjxkaXY+XFxyXFxuICAgIDxpbnB1dCAjcm9sZT5cXHJcXG4gICAgPGlucHV0ICNzZWFyY2hCb3ggaWQ9XFxcInNlYXJjaC1ib3hcXFwiIChrZXl1cCk9XFxcInNlYXJjaChzZWFyY2hCb3gudmFsdWUpXFxcIiAvPlxcclxcbiA8ZGl2ICpuZ0lmPVxcXCJhY3RvcnNcXFwiPiAgIFxcclxcbiAgICA8dWw+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBhY3RvciBvZiBhY3RvcnMgfCBhc3luYyBcXFwiIChjbGljayk9XFxcImFkZEFjdG9yVG9Nb3ZpZShhY3Rvcixyb2xlLnZhbHVlKVxcXCIgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlxcclxcbiAgICAgICAge3thY3Rvci5maXJzdE5hbWV9fSB7e2FjdG9yLmxhc3ROYW1lfX1cXHJcXG4gICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwidGhpcy5tb3ZpZSAhPSBudWxsXFxcIj5cXHJcXG4gICAgPG5vdGVzIFttb3ZpZUlkXT1cXFwidGhpcy5tb3ZpZS5pZFxcXCI+IDwvbm90ZXM+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdG9yU2VydmljZX0gZnJvbSAnLi9hY3Rvci5zZXJ2aWNlJ1xyXG5pbXBvcnR7QWN0b3J9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnR7QWN0b3JDcmVhdGVDb21wb25lbnR9IGZyb20gJy4vYWN0b3ItY3JlYXRlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYWN0b3JzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9ycy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbQWN0b3JTZXJ2aWNlXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3RvcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBhY3RvcnM6QWN0b3JbXTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0b3JTZXJ2aWNlOkFjdG9yU2VydmljZSxcclxuICAgICl7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5nZXRBY3RvcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RvcnMoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuYWN0b3JTZXJ2aWNlXHJcbiAgICAgICAgLmdldEFsbEFjdG9ycygpXHJcbiAgICAgICAgLnRoZW4oYWN0b3JzPT50aGlzLmFjdG9ycz1hY3RvcnMpO1xyXG4gICAgfVxyXG4gICAgb25BY3RvckFkZChhY3RvcjpBY3Rvcil7XHJcbiAgICAgICAgdGhpcy5hY3RvcnMucHVzaChhY3Rvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQudHMiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydHtIdHRwLEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnR7QWN0b3J9IGZyb20gXCIuL2FjdG9yXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3RvclNlcnZpY2V7XHJcbiAgICBwcml2YXRlIGFjdG9yVVJMPVwiYWN0b3JzL1wiO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOkh0dHBcclxuICAgICAgICApe31cclxuICAgICAgICBcclxuICAgIGFkZEFjdG9yKGFjdG9yOkFjdG9yKTpQcm9taXNlPEFjdG9yPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QodGhpcy5hY3RvclVSTCxhY3Rvcix0aGlzLmhlYWRlcnMpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQWN0b3JzKCk6UHJvbWlzZTxBY3RvcltdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmdldCh0aGlzLmFjdG9yVVJMKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcik6UHJvbWlzZTxBY3Rvcj57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3RvclVSTCArIGAke2lkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3Iuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YWN0b3ItY3JlYXRlIChvbkFjdG9yQWRkKT0nb25BY3RvckFkZCgkZXZlbnQpJz48L2FjdG9yLWNyZWF0ZT5cXHJcXG5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IGFjdG9yIG9mIGFjdG9yc1xcXCI+XFxyXFxuICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnL2FjdG9yLWRldGFpbCcsYWN0b3IuaWRdXFxcIj4gIHt7YWN0b3IuZmlyc3ROYW1lfX0ge3thY3Rvci5sYXN0TmFtZX19IDwvYT48L2xpPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyLE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0b3J9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQge0FjdG9yU2VydmljZX0gZnJvbSAnLi9hY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2FjdG9yLWNyZWF0ZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0FjdG9yU2VydmljZV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JDcmVhdGVDb21wb25lbnR7XHJcbiAgICBhY3RvcjpBY3RvcjtcclxuICAgIEBPdXRwdXQoKSBvbkFjdG9yQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxBY3Rvcj4oKTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0b3JTZXJ2aWNlOkFjdG9yU2VydmljZSxcclxuICAgICAgIFxyXG4gICAgKXtcclxuICAgICAgICAgdGhpcy5hY3Rvcj1uZXcgQWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3RvcihhY3RvcjpBY3RvcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFjdG9yU2VydmljZS5hZGRBY3RvcihhY3RvcilcclxuICAgICAgICAudGhlbihyZXM9PnRoaXMub25BY3RvckFkZC5lbWl0KHJlcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICA8ZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcIkZpcnN0TmFtZVxcXCI+SW1pZSA8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImFjdG9yLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJGaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdE5hbWVcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwiTGFzdE5hbWVcXFwiPk5hendpc2tvIDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWN0b3IubGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJMYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3ROYW1lXFxcIj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJCaXJ0aGRheVxcXCI+RGF0YSBVcm9kemVuaWEgPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIFsobmdNb2RlbCldPVxcXCJhY3Rvci5iaXJ0aGRheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIkJpcnRoZGF5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQmlydGhkYXlcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8YnV0dG9uIChjbGljayk9J2FkZEFjdG9yKGFjdG9yKScgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RG9kYWogPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBY3RvclNlcnZpY2V9IGZyb20gJy4vYWN0b3Iuc2VydmljZSdcclxuaW1wb3J0IHtBY3Rvcn0gZnJvbSAnLi9hY3RvcidcclxuaW1wb3J0e0FjdGl2YXRlZFJvdXRlLFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWN0b3ItZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgYWN0b3I6QWN0b3I7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApXHJcbiAgICB7fVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcil7XHJcbiAgICAgICB0aGlzLmFjdG9yU2VydmljZS5nZXRBY3RvckRldGFpbChpZClcclxuICAgICAgIC50aGVuKGFjdG9yID0+IHRoaXMuYWN0b3I9YWN0b3IpXHJcbiAgIC8vICAgIC50aGVuKCgpPT5jb25zb2xlLmxvZyh0aGlzLmFjdG9yKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgLnN1YnNjcmliZSgocGFyYW1zOlBhcmFtcyk9PlxyXG4gICAgICAgIHRoaXMuZ2V0QWN0b3JEZXRhaWwoK3BhcmFtc1snaWQnXSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCAqbmdJZj1cXFwiIWFjdG9yXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcbjxkaXYgKm5nSWY9XFxcImFjdG9yXFxcIj4gXFxyXFxuICAgIDx1bD5cXHJcXG4gICAgPGxpPiB7e2FjdG9yLmZpcnN0TmFtZX19IDwvbGk+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5sYXN0TmFtZX19IDwvbGk+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5iaXJ0aGRheX19IDwvbGk+XFxyXFxuPC91bD5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IHJvbGUgb2YgYWN0b3Iucm9sZXNcXFwiPlxcclxcbiAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tb3ZpZS1kZXRhaWwnLHJvbGUubW92aWVJZF1cXFwiPnt7cm9sZS5tb3ZpZVRpdGxlfX0gPC9hPlxcclxcbiAgICB7e3JvbGUucm9sZU5hbWV9fSB7e3JvbGUueWVhcn19XFxyXFxuPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9tYXRlcmlhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL21hdGVyaWFsXCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
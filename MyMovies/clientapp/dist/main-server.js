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

	module.exports = "\r\n\r\n<h1>Hello<h1>"

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
	        this.apiAdress = "api/movies/";
	    }
	    ;
	    MovieService.prototype.addMovie = function (movie) {
	        return this.http
	            .post(this.apiAdress, movie, this.headers)
	            .toPromise()
	            .then(function (res) { return res.json(); });
	    };
	    MovieService.prototype.getMovies = function () {
	        return this.http
	            .get(this.apiAdress)
	            .toPromise()
	            .then(function (result) { return result.json(); });
	    };
	    MovieService.prototype.deleteMovie = function (id) {
	        return this.http
	            .delete(this.apiAdress + ("" + id))
	            .toPromise()
	            .then(function () { return null; });
	    };
	    MovieService.prototype.getMovie = function (id) {
	        return this.http.get(this.apiAdress + ("" + id))
	            .toPromise()
	            .then(function (response) { return response.json(); });
	    };
	    MovieService.prototype.search = function (actorName) {
	        return this.http
	            .get('api/actors/' + ("" + actorName))
	            .map(function (res) { return res.json(); });
	    };
	    MovieService.prototype.addActorToMovie = function (movieId, actorId, role) {
	        var data = { "actorId": actorId, "role": role };
	        var body = JSON.stringify(data);
	        return this.http
	            .post(this.apiAdress + ("" + movieId), body, { headers: this.headers })
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
	        this.actorURL = "api/actors/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmU0N2U0Y2MwMTRiZWJlODhmMDUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpvbmUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9TdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzPzNkZGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3M/N2ZjYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3JzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItY3JlYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQThCO0FBQzlCLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FB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b0IsQ0FzQmhDO0FBdEJZLHFEQUFvQjs7Ozs7OztBQ1ZqQyxtSEFBa0gsaUJBQWlCLHFCQUFxQixnQkFBZ0IscUJBQXFCLGdCQUFnQixzSEFBc0gsaUJBQWlCLGVBQWUsZUFBZSxHQUFHLFdBQVcseUI7Ozs7OztBQ0FoWSwrQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZlNDdlNGNjMDE0YmViZTg4ZjA1IiwiaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZCc7XHJcbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwiXG4vKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IF9fY29yZV9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmxldCBwYXRjaCA9IGZhbHNlO1xuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSkge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICBfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbn1cblxuXG5cbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbnZhciBfX3VuaXZlcnNhbF9fID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG5pZiAocGF0Y2gpIHtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tcGlsZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtOb3Rlc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tm90ZUNyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGVzL25vdGUtY3JlYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW92aWVzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vdmllRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdG9yc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3RvcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RvckNyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RvckRldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcblxyXG5pbXBvcnQge01hdGVyaWFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG4vL2ltcG9ydCB7Y2FyZCBhcyBNQ0RjYXJkfSBmcm9tICdAbWF0ZXJpYWwvY2FyZCc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgTm90ZXNDb21wb25lbnQsXHJcbiAgICAgICAgTm90ZUNyZWF0ZUNvbXBvbmVudCxcclxuICAgICAgICBNb3ZpZXNDb21wb25lbnQsXHJcbiAgICAgICAgTW92aWVEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgQWN0b3JzQ29tcG9uZW50LFxyXG4gICAgICAgIEFjdG9yQ3JlYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIEFjdG9yRGV0YWlsQ29tcG9uZW50LFxyXG5cclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbm90ZXMnLGNvbXBvbmVudDpOb3Rlc0NvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ25vdGUtY3JlYXRlJyxjb21wb25lbnQ6Tm90ZUNyZWF0ZUNvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ21vdmllcycsY29tcG9uZW50Ok1vdmllc0NvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ21vdmllLWRldGFpbC86aWQnLGNvbXBvbmVudDpNb3ZpZURldGFpbENvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FjdG9ycycsY29tcG9uZW50OkFjdG9yc0NvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FjdG9ycy1jcmVhdGUnLGNvbXBvbmVudDpBY3RvckNyZWF0ZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhY3Rvci1kZXRhaWwvOmlkJyxjb21wb25lbnQ6QWN0b3JEZXRhaWxDb21wb25lbnR9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgXSksXHJcblxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAvLyBzdHlsZXM6IFtyZXF1aXJlKCcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIuc2NzcycpXSxcclxuICAgIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXHJcXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxyXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+TXlNb3ZpZXM8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tb3ZpZXMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtZmlsbSc+PC9zcGFuPiBGaWxteVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hY3RvcnMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtdXNlcic+PC9zcGFuPiBBa3Rvcnp5XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxyXFxubGkubGluay1hY3RpdmUgYSxcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxyXFxuICAgIC5tYWluLW5hdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB1bCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGxpIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGEge1xcclxcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuXFxyXFxuPGgxPkhlbGxvPGgxPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuaW1wb3J0IHtOb3RlU2VydmljZX0gZnJvbSAnLi9ub3RlLnNlcnZpY2UnO1xyXG5pbXBvcnQge05vdGV9IGZyb20gJy4vbm90ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25vdGVzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25vdGVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25vdGVzLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6W05vdGVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBOb3Rlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtb3ZpZUlkOyBcclxuICAgIG5vdGVzOk5vdGVbXT1uZXcgQXJyYXk8Tm90ZT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5vdGVTZXJ2aWNlOk5vdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOlJvdXRlcixcclxuICAgICl7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm90ZXMoKTp2b2lke1xyXG4gICAgICAgIHRoaXMubm90ZVNlcnZpY2UuZ2V0Tm90ZXModGhpcy5tb3ZpZUlkKVxyXG4gICAgICAgICAudGhlbihub3RlcyA9PiB0aGlzLm5vdGVzPW5vdGVzKVxyXG4gICAgICAgIC8vIC5jYXRjaCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIGdvdG9Ob3RlQ3JlYXRlKCk6dm9pZHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25vdGUtY3JlYXRlLyddKVxyXG4gICAgfTtcclxuICAgIG9uTm90ZUFkZChub3RlOk5vdGUpe1xyXG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb21tZW50KG5vdGU6Tm90ZSl7XHJcbiAgICAgICAgdGhpcy5ub3RlU2VydmljZS5kZWxldGVDb21tZW50KHRoaXMubW92aWVJZCxub3RlLmlkKVxyXG4gICAgICAgIC50aGVuKCgpPT50aGlzLm5vdGVzPXRoaXMubm90ZXMuZmlsdGVyKG4gPT4gbiAhPSBub3RlKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICBuZ09uSW5pdCgpOnZvaWR7XHJcbiAgICAgICAgIHRoaXMuZ2V0Tm90ZXMoKTtcclxuICAgICB9XHJcbiAgXHJcblxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOb3RlfSBmcm9tICcuL25vdGUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG5vdGVzVVJMID0gJ3Jldmlldy8nO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXI9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHB1YmxpYyBub3Rlc1NvdXJjZSA9IG5ldyBTdWJqZWN0PE5vdGU+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgICApIHtcclxuICAgICAgICBcclxuICAgICB9O1xyXG5cclxuICAgIGdldE5vdGVzKG1vdmllSWQ6bnVtYmVyKTogUHJvbWlzZTxOb3RlW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLm5vdGVzVVJMK2Ake21vdmllSWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpOyBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGFkZE5vdGUobm90ZTpOb3RlLG1vdmllSWQ6bnVtYmVyKTpQcm9taXNlPE5vdGU+eyBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QodGhpcy5ub3Rlc1VSTCtgJHttb3ZpZUlkfWBcclxuICAgICAgICAgICAgLEpTT04uc3RyaW5naWZ5KG5vdGUpXHJcbiAgICAgICAgICAgICx7aGVhZGVyczp0aGlzLmhlYWRlcn0pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiBoYW5kbGVFcnJvcihlcnJvcjphbnkpOlByb21pc2U8YW55PntcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiYmxhZCB3eXN0YXBpbFwiLGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZUNvbW1lbnQobW92aWVJZDpudW1iZXIsY29tbWVudElkOm51bWJlcik6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmRlbGV0ZSh0aGlzLm5vdGVzVVJMK2Ake21vdmllSWR9LyR7Y29tbWVudElkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4oKCk9Pm51bGwpXHJcbiAgICB9XHJcbiAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5NeSBOb3RlcyA8L2gxPlxcclxcblxcclxcbjwhLS08bGkgKm5nRm9yPSdsZXQgbm90ZSBvZiBub3Rlcyc+XFxyXFxuICAgIDxzcGFuPiB7e25vdGUudGl0bGV9fSA8L3NwYW4+XFxyXFxuPC9saT4tLT5cXHJcXG5cXHJcXG48IS0tPHA+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZ290b05vdGVDcmVhdGUoKVxcXCI+ICBDcmVhdGUgTmV3ICA8L2J1dHRvbj5cXHJcXG48L3A+LS0+XFxyXFxuPHAgKm5nSWY9XFxcIiFub3Rlc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2std3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZGVja1xcXCI+XFxyXFxuICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0Zvcj1cXFwibGV0IG5vdGUgb2Ygbm90ZXNcXFwiPlxcclxcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVxcXCI2MCVcXFwiPjxhIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57e25vdGUuY29tbWVudH19PC9hPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGJ1dHRvbiAoY2xpY2spPSdkZWxldGVDb21tZW50KG5vdGUpJz5Vc3XFhCA8L2J1dHRvbj48L3RoPlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3tub3RlLnJhdGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj48c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPjwvc21hbGw+PC9wPlxcclxcbiAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPG5vdGUtY3JlYXRlIChvbk5vdGVBZGQpPVxcXCJvbk5vdGVBZGQoJGV2ZW50KVxcXCIgW21vdmllSWRdPVxcXCJtb3ZpZUlkXFxcIj48L25vdGUtY3JlYXRlPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vdGVzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuICAgIC5jYXJkIHtcXHJcXG4gICAgICAgIGJyZWFrLWluc2lkZTphdm9pZDtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZC1kZWNre1xcclxcbiAgICAgICAgIGNvbHVtbi1jb3VudDozO1xcclxcbiAgICAgICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDsgICBcXHJcXG4gICAgfVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LElucHV0LEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1BhcmFtcyxBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXHJcblxyXG5pbXBvcnQge05vdGVTZXJ2aWNlfSBmcm9tICcuL25vdGUuc2VydmljZSc7XHJcbmltcG9ydCB7Tm90ZSxNb2NrZWROb3RlfSBmcm9tICcuL25vdGUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibm90ZS1jcmVhdGVcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25vdGUtY3JlYXRlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtOb3RlU2VydmljZV0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVDcmVhdGVDb21wb25lbnR7XHJcbiAgICBub3RlOk5vdGU7XHJcbiAgICBAT3V0cHV0KCkgb25Ob3RlQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RlPigpXHJcbiAgICBASW5wdXQoKSBtb3ZpZUlkPTA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBub3RlU2VydmljZTpOb3RlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMubm90ZT1uZXcgTm90ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5vdGUoKTp2b2lkeyAgICAgICBcclxuICAgICAgICB0aGlzLm5vdGVTZXJ2aWNlLmFkZE5vdGUodGhpcy5ub3RlLHRoaXMubW92aWVJZClcclxuICAgICAgICAudGhlbihyZXM9PnRoaXMub25Ob3RlQWRkLmVtaXQocmVzKSlcclxuICAgICAgIC8vIC50aGVuKCgpPT50aGlzLmdvQmFjaygpKTtcclxuICAgIH1cclxuICAgIGdvQmFjaygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBOb3RlIHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHJhdGU6IG51bWJlcjtcclxuICAgIGNvbW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmF0ZT0wO1xyXG4gICAgICAgIHRoaXMuY29tbWVudD1cIlwiO1xyXG4gICAgfVxyXG59ICAgXHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja2VkTm90ZXtcclxuICAgIG5vdGU6Tm90ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ub3RlPW5ldyBOb3RlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm90ZS5pZD0xMDA7XHJcbiAgICAgICAgdGhpcy5ub3RlLmNvbW1lbnQ9XCJOSWt1c2lvd2VcIjtcclxuICAgICAgICB0aGlzLm5vdGUucmF0ZT01O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25vdGVzL25vdGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPiBOb3dhIG5vdGF0a2EgPC9oMj5cXHJcXG5cXHJcXG48ZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgIDxsaT48bGFiZWw+VHl0dcWCPC9sYWJlbD48aW5wdXQgWyhuZ01vZGVsKV09XFxcIm5vdGUuY29tbWVudFxcXCIvPjwvbGk+XFxyXFxuICAgIDxsaT48bGFiZWw+VHJlxZvEhzwvbGFiZWw+PGlucHV0IFsobmdNb2RlbCldPSdub3RlLnJhdGUnLz48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiAoY2xpY2spPSdhZGROb3RlKCknPiBEb2RhaiA8L2J1dHRvbj5cXHJcXG4gIFxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbm90ZXMvbm90ZS1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01vdmllfSBmcm9tICcuL21vdmllJztcclxuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSdcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vdmllcycsXHJcbiAgICB0ZW1wbGF0ZTogIHJlcXVpcmUoJy4vbW92aWVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL21vdmllcy5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbTW92aWVTZXJ2aWNlXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbW92aWVzOk1vdmllW107XHJcbiAgICBtb3ZpZTogTW92aWU7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgIHByaXZhdGUgbW92aWVTZXJ2aWNlOk1vdmllU2VydmljZSxcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5tb3ZpZT1uZXcgTW92aWUoKTtcclxuICAgIH1cclxuICAgIGFkZE1vdmllKCk6dm9pZHtcclxuICAgICAgICB0aGlzLm1vdmllU2VydmljZVxyXG4gICAgICAgIC5hZGRNb3ZpZSh0aGlzLm1vdmllKVxyXG4gICAgICAgIC50aGVuKG1vdmllID0+dGhpcy5tb3ZpZXMucHVzaChtb3ZpZSkpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuZ2V0TW92aWVzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRNb3ZpZXMoKTp2b2lke1xyXG4gICAgICAgICB0aGlzLm1vdmllU2VydmljZVxyXG4gICAgICAgIC5nZXRNb3ZpZXMoKVxyXG4gICAgICAgIC50aGVuKG1vdmllcz0+dGhpcy5tb3ZpZXM9bW92aWVzKVxyXG4gICAgICAgIC5jYXRjaCgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlTW92aWUobW92aWU6TW92aWUpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2UuZGVsZXRlTW92aWUobW92aWUuaWQpXHJcbiAgICAgICAgLnRoZW4obW92aWVzPT50aGlzLm1vdmllcz10aGlzLm1vdmllcy5maWx0ZXIobT0+IG0hPT1tb3ZpZSkpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC50cyIsImltcG9ydHtBY3RvcixBY3RvckluTW92aWV9IGZyb20gJy4uL2FjdG9ycy9hY3Rvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWV7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3IodGl0bGU6c3RyaW5nLHllYXI6IG51bWJlcil7XHJcbiAgICAvLyAgICAgdGhpcy50aXRsZT10aXRsZTtcclxuICAgIC8vICAgICB0aGlzLnllYXI9eWVhcjtcclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllRGV0YWlsc1Jlc3BvbnNlXHJcbntcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHRpdGxlOnN0cmluZztcclxuICAgIHllYXI6IG51bWJlcjtcclxuXHJcbiAgICBhY3RvcnM6QWN0b3JJbk1vdmllW107XHJcbiAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLnRzIiwiaW1wb3J0IHsgSHR0cCAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnR7TW92aWUsTW92aWVEZXRhaWxzUmVzcG9uc2V9IGZyb20gJy4vbW92aWUnO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdG9yLEFjdG9ySW5Nb3ZpZX0gZnJvbSAnLi4vYWN0b3JzL2FjdG9yJztcclxuaW1wb3J0e09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vdmllU2VydmljZXtcclxuICAgIHByaXZhdGUgaGVhZGVyczpIZWFkZXJzID0gbmV3IEhlYWRlcnMoeydjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHByaXZhdGUgYXBpQWRyZXNzOnN0cmluZyA9IFwiYXBpL21vdmllcy9cIjtcclxuICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBcclxuICAgICkgeyB9O1xyXG4gICAgXHJcbiAgICBhZGRNb3ZpZShtb3ZpZTpNb3ZpZSk6UHJvbWlzZTxNb3ZpZT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KHRoaXMuYXBpQWRyZXNzLG1vdmllLHRoaXMuaGVhZGVycylcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0TW92aWVzKCk6UHJvbWlzZTxNb3ZpZVtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmdldCh0aGlzLmFwaUFkcmVzcylcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVNb3ZpZShpZDpudW1iZXIpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5kZWxldGUodGhpcy5hcGlBZHJlc3MgK2Ake2lkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4oKCk9Pm51bGwpO1xyXG4gICAgfVxyXG4gICAgZ2V0TW92aWUoaWQ6bnVtYmVyKTpQcm9taXNlPE1vdmllRGV0YWlsc1Jlc3BvbnNlPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaUFkcmVzcyArYCR7aWR9YClcclxuICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoKGFjdG9yTmFtZTpzdHJpbmcpOk9ic2VydmFibGU8QWN0b3JbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5nZXQoJ2FwaS9hY3RvcnMvJyArYCR7YWN0b3JOYW1lfWApXHJcbiAgICAgICAgLm1hcChyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYWRkQWN0b3JUb01vdmllKG1vdmllSWQ6bnVtYmVyLGFjdG9ySWQ6bnVtYmVyLHJvbGU6c3RyaW5nKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGxldCBkYXRhID0ge1wiYWN0b3JJZFwiOiBhY3RvcklkLFwicm9sZVwiOnJvbGV9O1xyXG4gICAgICAgIGxldCBib2R5PUpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucG9zdCh0aGlzLmFwaUFkcmVzcyArYCR7bW92aWVJZH1gLGJvZHkse2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4oKCk9Pm51bGwpXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj4gTm93eSBGaWxtIDwvaDI+XFxyXFxuXFxyXFxuPGRpdj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgXFxyXFxuICAgIDxsaT48bGFiZWw+VHl0dcWCPC9sYWJlbD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmllLnRpdGxlXFxcIiByZXF1aXJlZC8+PC9saT5cXHJcXG4gICAgPGxpPjxsYWJlbD5Sb2s8L2xhYmVsPjxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJtb3ZpZS55ZWFyXFxcIiBtYXg9XFxcIjIwMTdcXFwiIG1pbj1cXFwiMTkwMFxcXCIgdmFsdWU9XFxcIjIwMDBcXFwiLz48L2xpPlxcclxcbiAgICA8bGk+PGJ1dHRvbiAoY2xpY2spPSdhZGRNb3ZpZSgpJz4gRG9kYWogPC9idXR0b24+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGgxPk15IE1vdmllcyA8L2gxPlxcclxcblxcclxcblxcclxcbjxwICpuZ0lmPVxcXCIhbW92aWVzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQtZGVjay13cmFwcGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrXFxcIj5cXHJcXG4gICAgICAgXFxyXFxuICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0Zvcj1cXFwibGV0IG1vdmllIG9mIG1vdmllc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcclxcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoIHdpZHRoPVxcXCI2MCVcXFwiPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbW92aWUtZGV0YWlsJyxtb3ZpZS5pZF1cXFwiIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57e21vdmllLnRpdGxlfX0gPC9hPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoPkVkaXQ8L3RoPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPSdkZWxldGVNb3ZpZShtb3ZpZSknPiBEZWxldGUgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj57e21vdmllLnllYXJ9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj48c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPjwvc21hbGw+PC9wPlxcclxcbiAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb3ZpZXMuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbiAgICAvKi5jYXJkIHtcXHJcXG4gICAgICAgIGJyZWFrLWluc2lkZTphdm9pZDtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZC1kZWNre1xcclxcbiAgICAgICAgIGNvbHVtbi1jb3VudDozO1xcclxcbiAgICAgICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDsgICBcXHJcXG4gICAgfSovXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge01vdmllLCBNb3ZpZURldGFpbHNSZXNwb25zZX0gZnJvbSBcIi4vbW92aWVcIjtcclxuaW1wb3J0IHtBY3RvcixBY3RvckluTW92aWV9IGZyb20gXCIuLi9hY3RvcnMvYWN0b3JcIjtcclxuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1BhcmFtcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSxTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbW92aWUtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltNb3ZpZVNlcnZpY2VdLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG1vdmllOk1vdmllO1xyXG4gICAgYWN0b3JzSW5Nb3ZpZTpBY3RvckluTW92aWVbXTtcclxuICAgIGFjdG9yczpPYnNlcnZhYmxlPEFjdG9yW10+O1xyXG4gICAgbW92aWVEZXRhaWxzUmVzcG9uc2U6TW92aWVEZXRhaWxzUmVzcG9uc2U7XHJcbiAgICBwcml2YXRlIHNlYXJjaFRlcm0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBtb3ZpZVNlcnZpY2U6TW92aWVTZXJ2aWNlLFxyXG5cclxuICAgICl7fTtcclxuXHJcbiAgICBnb0JhY2soKTp2b2lke1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmllRGV0YWlscyhpZDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubW92aWVTZXJ2aWNlLmdldE1vdmllKGlkKVxyXG4gICAgICAgIC50aGVuKHJlcz0+dGhpcy5tb3ZpZURldGFpbHNSZXNwb25zZT1yZXMpXHJcbiAgICAgICAgLnRoZW4oZGV0ID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RvcnNJbk1vdmllPWRldC5hY3RvcnMsXHJcbiAgICAgICAgICAgIHRoaXMubW92aWU9bmV3IE1vdmllKCksXHJcbiAgICAgICAgICAgIHRoaXMubW92aWUuaWQ9ZGV0LmlkLFxyXG4gICAgICAgICAgICB0aGlzLm1vdmllLnRpdGxlPWRldC50aXRsZSxcclxuICAgICAgICAgICAgdGhpcy5tb3ZpZS55ZWFyPWRldC55ZWFyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOnZvaWR7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgICAuc3Vic2NyaWJlKChwYXJhbXM6UGFyYW1zKT0+XHJcbiAgICAgICAgdGhpcy5nZXRNb3ZpZURldGFpbHMocGFyYW1zWydpZCddKSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMuYWN0b3JzID0gdGhpcy5zZWFyY2hUZXJtXHJcbiAgICAgICAgLmRlYm91bmNlVGltZSg2MDApXHJcbiAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICAuc3dpdGNoTWFwKHRlcm09PiB0ZXJtXHJcbiAgICAgICAgPyB0aGlzLm1vdmllU2VydmljZS5zZWFyY2godGVybSlcclxuICAgICAgICA6IE9ic2VydmFibGUub2Y8QWN0b3JbXT4oW10pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgYWRkQWN0b3JUb01vdmllKGFjdG9yOkFjdG9yLHJvbGU6c3RyaW5nKXtcclxuICAgICAgICB2YXIgbmV3QWN0b3IgPSBuZXcgQWN0b3JJbk1vdmllKCk7XHJcbiAgICAgICAgbmV3QWN0b3IuZmlyc3ROYW1lID0gYWN0b3IuZmlyc3ROYW1lO1xyXG4gICAgICAgIG5ld0FjdG9yLmlkID0gYWN0b3IuaWQ7XHJcbiAgICAgICAgbmV3QWN0b3IubGFzdE5hbWUgPSBhY3Rvci5sYXN0TmFtZTtcclxuICAgICAgICBuZXdBY3Rvci5yb2xlID0gcm9sZTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHRoaXMubW92aWVTZXJ2aWNlLmFkZEFjdG9yVG9Nb3ZpZSh0aGlzLm1vdmllLmlkICxhY3Rvci5pZCxyb2xlKVxyXG4gICAgICAgIC50aGVuKCgpPT50aGlzLmFjdG9yc0luTW92aWUucHVzaChuZXdBY3RvcikpXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2VhcmNoKGFjdG9yTmFtZTpzdHJpbmcpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtLm5leHQoYWN0b3JOYW1lKVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBBY3RvcntcclxuICAgIGlkOm51bWJlcjtcclxuICAgIGZpcnN0TmFtZTpzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTpzdHJpbmc7XHJcbiAgICBiaXJ0aGRheTpEYXRlO1xyXG4gICAgcm9sZXM6Um9sZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JJbk1vdmlle1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgZmlyc3ROYW1lOnN0cmluZztcclxuICAgIGxhc3ROYW1lOnN0cmluZztcclxuICAgIHJvbGU6c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9sZXtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHllYXI6bnVtYmVyO1xyXG4gICAgcm9sZU5hbWU6c3RyaW5nO1xyXG4gICAgbW92aWVUaXRsZTpzdHJpbmc7XHJcbiAgICBtb3ZpZUlkOm51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqc1wiXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5TemN6ZWfDs8WCeSBmaWxtdTwvaDI+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFtb3ZpZVxcXCI+PGVtPmxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJtb3ZpZS1kZXRhaWxcXFwiICpuZ0lmPSdtb3ZpZSc+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT4ge3ttb3ZpZS50aXRsZX19IDwvbGk+XFxyXFxuICAgICAgICA8bGk+IHt7bW92aWUueWVhcn19IDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT0nZ29CYWNrKCknPmJhY2s8L2J1dHRvbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJhY3RvcnNJbk1vdmllXFxcIiA+XFxyXFxuICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgYWN0b3Igb2YgYWN0b3JzSW5Nb3ZpZVxcXCI+XFxyXFxuICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYWN0b3ItZGV0YWlsJyxhY3Rvci5pZF1cXFwiPiB7e2FjdG9yLmZpcnN0TmFtZX19IHt7YWN0b3IubGFzdE5hbWV9fSA8L2E+IHt7YWN0b3Iucm9sZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxoND5Eb2RhaiBha3RvcsOzdzwvaDQ+XFxyXFxuPGRpdj5cXHJcXG4gICAgPGlucHV0ICNyb2xlPlxcclxcbiAgICA8aW5wdXQgI3NlYXJjaEJveCBpZD1cXFwic2VhcmNoLWJveFxcXCIgKGtleXVwKT1cXFwic2VhcmNoKHNlYXJjaEJveC52YWx1ZSlcXFwiIC8+XFxyXFxuIDxkaXYgKm5nSWY9XFxcImFjdG9yc1xcXCI+ICAgXFxyXFxuICAgIDx1bD5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IGFjdG9yIG9mIGFjdG9ycyB8IGFzeW5jIFxcXCIgKGNsaWNrKT1cXFwiYWRkQWN0b3JUb01vdmllKGFjdG9yLHJvbGUudmFsdWUpXFxcIiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XFxyXFxuICAgICAgICB7e2FjdG9yLmZpcnN0TmFtZX19IHt7YWN0b3IubGFzdE5hbWV9fVxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJ0aGlzLm1vdmllICE9IG51bGxcXFwiPlxcclxcbiAgICA8bm90ZXMgW21vdmllSWRdPVxcXCJ0aGlzLm1vdmllLmlkXFxcIj4gPC9ub3Rlcz5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0b3JTZXJ2aWNlfSBmcm9tICcuL2FjdG9yLnNlcnZpY2UnXHJcbmltcG9ydHtBY3Rvcn0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydHtBY3RvckNyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9hY3Rvci1jcmVhdGUuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidhY3RvcnMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWN0b3JzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGFjdG9yczpBY3RvcltdO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhY3RvclNlcnZpY2U6QWN0b3JTZXJ2aWNlLFxyXG4gICAgKXt9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmdldEFjdG9ycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdG9ycygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5hY3RvclNlcnZpY2VcclxuICAgICAgICAuZ2V0QWxsQWN0b3JzKClcclxuICAgICAgICAudGhlbihhY3RvcnM9PnRoaXMuYWN0b3JzPWFjdG9ycyk7XHJcbiAgICB9XHJcbiAgICBvbkFjdG9yQWRkKGFjdG9yOkFjdG9yKXtcclxuICAgICAgICB0aGlzLmFjdG9ycy5wdXNoKGFjdG9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3JzLmNvbXBvbmVudC50cyIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0e0h0dHAsSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydHtBY3Rvcn0gZnJvbSBcIi4vYWN0b3JcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjdG9yU2VydmljZXtcclxuICAgIHByaXZhdGUgYWN0b3JVUkw9XCJhcGkvYWN0b3JzL1wiO1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOkh0dHBcclxuICAgICAgICApe31cclxuICAgICAgICBcclxuICAgIGFkZEFjdG9yKGFjdG9yOkFjdG9yKTpQcm9taXNlPEFjdG9yPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QodGhpcy5hY3RvclVSTCxhY3Rvcix0aGlzLmhlYWRlcnMpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQWN0b3JzKCk6UHJvbWlzZTxBY3RvcltdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLmdldCh0aGlzLmFjdG9yVVJMKVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcik6UHJvbWlzZTxBY3Rvcj57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hY3RvclVSTCArIGAke2lkfWApXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3Iuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YWN0b3ItY3JlYXRlIChvbkFjdG9yQWRkKT0nb25BY3RvckFkZCgkZXZlbnQpJz48L2FjdG9yLWNyZWF0ZT5cXHJcXG5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IGFjdG9yIG9mIGFjdG9yc1xcXCI+XFxyXFxuICAgIDxsaT48YSBbcm91dGVyTGlua109XFxcIlsnL2FjdG9yLWRldGFpbCcsYWN0b3IuaWRdXFxcIj4gIHt7YWN0b3IuZmlyc3ROYW1lfX0ge3thY3Rvci5sYXN0TmFtZX19IDwvYT48L2xpPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9ycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyLE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0b3J9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQge0FjdG9yU2VydmljZX0gZnJvbSAnLi9hY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2FjdG9yLWNyZWF0ZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0FjdG9yU2VydmljZV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3JDcmVhdGVDb21wb25lbnR7XHJcbiAgICBhY3RvcjpBY3RvcjtcclxuICAgIEBPdXRwdXQoKSBvbkFjdG9yQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxBY3Rvcj4oKTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0b3JTZXJ2aWNlOkFjdG9yU2VydmljZSxcclxuICAgICAgIFxyXG4gICAgKXtcclxuICAgICAgICAgdGhpcy5hY3Rvcj1uZXcgQWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3RvcihhY3RvcjpBY3RvcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFjdG9yU2VydmljZS5hZGRBY3RvcihhY3RvcilcclxuICAgICAgICAudGhlbihyZXM9PnRoaXMub25BY3RvckFkZC5lbWl0KHJlcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3JzL2FjdG9yLWNyZWF0ZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICA8ZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgIDxsYWJlbCBmb3I9XFxcIkZpcnN0TmFtZVxcXCI+SW1pZSA8L2xhYmVsPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImFjdG9yLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJGaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdE5hbWVcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwiTGFzdE5hbWVcXFwiPk5hendpc2tvIDwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWN0b3IubGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJMYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3ROYW1lXFxcIj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICA8bGFiZWwgZm9yPVxcXCJCaXJ0aGRheVxcXCI+RGF0YSBVcm9kemVuaWEgPC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIFsobmdNb2RlbCldPVxcXCJhY3Rvci5iaXJ0aGRheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIkJpcnRoZGF5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQmlydGhkYXlcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8YnV0dG9uIChjbGljayk9J2FkZEFjdG9yKGFjdG9yKScgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RG9kYWogPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FjdG9ycy9hY3Rvci1jcmVhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBY3RvclNlcnZpY2V9IGZyb20gJy4vYWN0b3Iuc2VydmljZSdcclxuaW1wb3J0IHtBY3Rvcn0gZnJvbSAnLi9hY3RvcidcclxuaW1wb3J0e0FjdGl2YXRlZFJvdXRlLFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWN0b3ItZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjdG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOltBY3RvclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgYWN0b3I6QWN0b3I7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdG9yU2VydmljZTpBY3RvclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApXHJcbiAgICB7fVxyXG5cclxuICAgIGdldEFjdG9yRGV0YWlsKGlkOm51bWJlcil7XHJcbiAgICAgICB0aGlzLmFjdG9yU2VydmljZS5nZXRBY3RvckRldGFpbChpZClcclxuICAgICAgIC50aGVuKGFjdG9yID0+IHRoaXMuYWN0b3I9YWN0b3IpXHJcbiAgIC8vICAgIC50aGVuKCgpPT5jb25zb2xlLmxvZyh0aGlzLmFjdG9yKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgLnN1YnNjcmliZSgocGFyYW1zOlBhcmFtcyk9PlxyXG4gICAgICAgIHRoaXMuZ2V0QWN0b3JEZXRhaWwoK3BhcmFtc1snaWQnXSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8cCAqbmdJZj1cXFwiIWFjdG9yXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcclxcbjxkaXYgKm5nSWY9XFxcImFjdG9yXFxcIj4gXFxyXFxuICAgIDx1bD5cXHJcXG4gICAgPGxpPiB7e2FjdG9yLmZpcnN0TmFtZX19IDwvbGk+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5sYXN0TmFtZX19IDwvbGk+XFxyXFxuICAgIDxsaT4ge3thY3Rvci5iaXJ0aGRheX19IDwvbGk+XFxyXFxuPC91bD5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IHJvbGUgb2YgYWN0b3Iucm9sZXNcXFwiPlxcclxcbiAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9tb3ZpZS1kZXRhaWwnLHJvbGUubW92aWVJZF1cXFwiPnt7cm9sZS5tb3ZpZVRpdGxlfX0gPC9hPlxcclxcbiAgICB7e3JvbGUucm9sZU5hbWV9fSB7e3JvbGUueWVhcn19XFxyXFxuPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hY3RvcnMvYWN0b3ItZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9tYXRlcmlhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL21hdGVyaWFsXCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
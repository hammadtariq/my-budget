webpackJsonp([0,3],{

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_main_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddBudgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBudgetComponent = (function () {
    function AddBudgetComponent(fb, route, mainService) {
        this.route = route;
        this.mainService = mainService;
        this.oldIncome = '';
        this.btnLabel = 'Add';
        this.dataRecieved = false;
        this.myForm = fb.group({
            'income': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required])],
            'saving': '',
        });
        // setValue: set values of all property
        // patchValue: change values of specific property
        this.myForm.patchValue({ saving: 0 });
    }
    AddBudgetComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.params;
        params['username'] === 'edit' && (this.editFlag = true, this.getIncome());
        this.username = params['username'] !== 'edit' ?
            params['username'] : localStorage['username'];
        this.placeholderText = 'Your total income of ' + this.getCurrentMonth();
        this.dataRecieved = false;
    };
    AddBudgetComponent.prototype.getIncome = function () {
        var _this = this;
        this.mainService.getIncome()
            .then(function (res) {
            _this.dataRecieved = true;
            console.log('old income: ', res);
            _this.oldIncome = res;
        }, function (err) {
            _this.dataRecieved = true;
            console.log(err);
        });
    };
    AddBudgetComponent.prototype.totalIncome = function (form) {
        console.log('total Income: ', form);
        form.saving === '' && (form.saving = 0);
        this.mainService.calculateBudget(this.username, form.income, form.saving);
        this.dataRecieved = true;
    };
    AddBudgetComponent.prototype.editIncome = function (form) {
        form.saving === '' && (form.saving = 0);
        this.mainService.editIncome(this.username, form.income, form.saving, this.oldIncome);
        this.dataRecieved = true;
    };
    AddBudgetComponent.prototype.cancelEdit = function () {
        this.mainService.cancelEdit();
    };
    AddBudgetComponent.prototype.getCurrentMonth = function () {
        var date = new Date();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[date.getMonth()];
    };
    AddBudgetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-add-budget',
            template: __webpack_require__(754),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_main_service__["a" /* MainService */]) === 'function' && _c) || Object])
    ], AddBudgetComponent);
    return AddBudgetComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/add-budget.component.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(755),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/app.component.js.map

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_main_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BudgetHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BudgetHistoryComponent = (function () {
    function BudgetHistoryComponent(mainService) {
        this.mainService = mainService;
        this.count = 0;
        this.toggle = false;
        this.dataRecieved = false;
    }
    BudgetHistoryComponent.prototype.ngOnInit = function () {
        this.getHistory();
    };
    BudgetHistoryComponent.prototype.getHistory = function () {
        var _this = this;
        this.mainService.getHistory()
            .then(function (snapshot) {
            if (!snapshot.val()) {
                throw new Error('No history available yet.');
            }
            else {
                _this.history = snapshot.val();
                console.log('history obj : ', _this.history);
                _this.dataRecieved = true;
            }
        })
            .catch(function (err) {
            _this.message = err;
            _this.dataRecieved = true;
            console.log('error:', err);
        });
    };
    BudgetHistoryComponent.prototype.toggleMe = function (id) {
        if (this.count % 2 === 0) {
            this.toggle = id;
        }
        else {
            this.toggle = id;
        }
        this.count++;
    };
    BudgetHistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-budget-history',
            template: __webpack_require__(756),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_main_service__["a" /* MainService */]) === 'function' && _a) || Object])
    ], BudgetHistoryComponent);
    return BudgetHistoryComponent;
    var _a;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/budget-history.component.js.map

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_main_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = (function () {
    function LandingPageComponent(mainService) {
        this.mainService = mainService;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.mainService.isLoggedIn();
    };
    LandingPageComponent.prototype.getStarted = function (username) {
        this.mainService.getStarted(username);
    };
    LandingPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__(757),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_main_service__["a" /* MainService */]) === 'function' && _a) || Object])
    ], LandingPageComponent);
    return LandingPageComponent;
    var _a;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/landing-page.component.js.map

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CanActivateViaAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(mainService) {
        this.mainService = mainService;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function () {
        return this.mainService.isLoggedIn();
    };
    CanActivateViaAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === 'function' && _a) || Object])
    ], CanActivateViaAuthGuard);
    return CanActivateViaAuthGuard;
    var _a;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/auth-guard.service.js.map

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_main_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_form_validators__ = __webpack_require__(587);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodayBudgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodayBudgetComponent = (function () {
    function TodayBudgetComponent(fb, route, mainService) {
        this.route = route;
        this.mainService = mainService;
        this.budgetInfo = { income: '', budget: '', spend: '', update: '' };
        this.message = '';
        this.dataRecieved = false;
        this.categories = ['Travel', 'Food', 'Medical', 'Other'];
        this.units = ['kg', 'dozen', 'item', 'other'];
        this.counter = 0;
        this.myForm = fb.group({
            'quantity': [''],
            'unit': [''],
            'category': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'itemName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_form_validators__["a" /* itemNameValidator */]])],
            'amount': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_form_validators__["b" /* amountValidator */]])],
        });
    }
    ;
    TodayBudgetComponent.prototype.ngOnInit = function () {
        var budgetRef = this.route.snapshot.params.budgetRef;
        this.days = this.mainService.leftDays();
        this.budgetRef = budgetRef !== 'back' ? budgetRef : localStorage['budgetRef'];
    };
    TodayBudgetComponent.prototype.ngAfterViewInit = function () {
    };
    TodayBudgetComponent.prototype.getBudgetInfo = function () {
        var _this = this;
        // if (this.counter >= 1) { return; }else {
        this.mainService.moneyToSpend(this.budgetRef)
            .then(function (snapshot) {
            console.log('snap : ', snapshot.val());
            var _a = snapshot.val(), totalIncome = _a.totalIncome, totalBudget = _a.totalBudget, spendPerDay = _a.spendPerDay, totalSaving = _a.totalSaving, updatedBudget = _a.updatedBudget;
            _this.budgetInfo = Object.assign({}, _this.budgetInfo, {
                income: totalIncome, budget: totalBudget, saving: totalSaving, spend: spendPerDay, update: updatedBudget
            });
            _this.dataRecieved = true;
            // this.counter++;
        })
            .catch(function (err) { return console.log('err from budget : ', err); });
        // }
    };
    TodayBudgetComponent.prototype.budgetCheck = function () {
        return this.budgetInfo.update === '' ? this.budgetInfo.budget : this.budgetInfo.update;
    };
    TodayBudgetComponent.prototype.totalSpended = function (data) {
        var _this = this;
        data = data.value;
        if (data.amount > this.budgetCheck()) {
            return false;
        }
        ;
        console.log('todaySpended: ', data);
        data.quantity && (data.quantity = data.quantity + ' ' + data.unit);
        this.dataRecieved = false;
        this.mainService.todaySpended(this.budgetRef, data.category, data.itemName, data.amount, data.quantity)
            .then(function (res) {
            console.log('today: ', res);
            _this.myForm.reset();
            _this.dataRecieved = true;
            _this.message = 'Item successfully added';
            setTimeout(function () {
                _this.message = '';
            }, 4000);
            _this.updateBudget(data.amount);
        }, function (err) {
            console.log('today: ', err);
            _this.dataRecieved = true;
            _this.message = err || 'Sorry! some problem occured while adding the item, please try again';
            setTimeout(function () {
                _this.message = '';
            }, 4000);
        });
    };
    // update spend per day amount after adding info of item 
    TodayBudgetComponent.prototype.updateBudget = function (todaySpended) {
        var _a = this.budgetInfo, budget = _a.budget, update = _a.update;
        var updatedBudget = update === '' ? (budget - todaySpended) : (update - todaySpended);
        this.mainService.updatedBudget(this.budgetRef, updatedBudget);
        this.getBudgetInfo();
    };
    TodayBudgetComponent.prototype.logout = function () {
        this.mainService.logout();
    };
    TodayBudgetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-today-budget',
            template: __webpack_require__(758),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_main_service__["a" /* MainService */]) === 'function' && _c) || Object])
    ], TodayBudgetComponent);
    return TodayBudgetComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/today-budget.component.js.map

/***/ },

/***/ 432:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 432;


/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(586);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_30" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/main.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_guard_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_iteratableObject_pipe__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_main_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_budget_add_budget_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__today_budget_today_budget_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__budget_history_budget_history_component__ = __webpack_require__(377);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__add_budget_add_budget_component__["a" /* AddBudgetComponent */],
                __WEBPACK_IMPORTED_MODULE_12__today_budget_today_budget_component__["a" /* TodayBudgetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__budget_history_budget_history_component__["a" /* BudgetHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_iteratableObject_pipe__["a" /* IteratableObjectPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__app_routing__["b" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_8__shared_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_6__shared_auth_guard_service__["a" /* CanActivateViaAuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/app.module.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_budget_add_budget_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__today_budget_today_budget_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__budget_history_budget_history_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_guard_service__ = __webpack_require__(379);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });






var appRoutes = [
    { path: 'add-budget/:username', component: __WEBPACK_IMPORTED_MODULE_2__add_budget_add_budget_component__["a" /* AddBudgetComponent */] },
    { path: 'today-budget/:budgetRef', component: __WEBPACK_IMPORTED_MODULE_3__today_budget_today_budget_component__["a" /* TodayBudgetComponent */] },
    { path: 'budget-history', component: __WEBPACK_IMPORTED_MODULE_4__budget_history_budget_history_component__["a" /* BudgetHistoryComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_component__["a" /* LandingPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_guard_service__["a" /* CanActivateViaAuthGuard */]], },
    { path: 'my-budget', component: __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_component__["a" /* LandingPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_guard_service__["a" /* CanActivateViaAuthGuard */]], },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/app.routing.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(584);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/hammad/Projects/my-budget/src/index.js.map

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return itemNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return amountValidator; });
function itemNameValidator(control) {
    if (control.value && !control.value.match(/[A-Z | a-z]/g)) {
        return { invaliditemName: true };
    }
}
function amountValidator(control) {
    if (control.value && !control.value.match(/[0-9]/g)) {
        return { invalidAmount: true };
    }
}

//# sourceMappingURL=/home/hammad/Projects/my-budget/src/form.validators.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IteratableObjectPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
var IteratableObjectPipe = (function () {
    function IteratableObjectPipe() {
    }
    IteratableObjectPipe.prototype.transform = function (value, args) {
        var keyArr = Object.keys(value), dataArr = [], keyName = args[0];
        keyArr.forEach(function (key) {
            value[key][keyName] = key;
            dataArr.push(value[key]);
        });
        if (args[1]) {
            dataArr.sort(function (a, b) {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }
        return dataArr;
    };
    IteratableObjectPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({ name: 'iterateObject' }), 
        __metadata('design:paramtypes', [])
    ], IteratableObjectPipe);
    return IteratableObjectPipe;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/iteratableObject.pipe.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/environment.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/hammad/Projects/my-budget/src/polyfills.js.map

/***/ },

/***/ 749:
/***/ function(module, exports) {

module.exports = ".budget-input{\n    width: 90%;\n}\n"

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 751:
/***/ function(module, exports) {

module.exports = ".historyTable{\n    width: 100%;\n    padding: 20px;\n    \n}\n\n.tRow{\n    padding: 20px;\n    border: 1px solid lightslategray;\n}\n\n.saving{\n\tfloat: right;\n\tfont-weight: normal;\n\tfont-size: 16px;\n}\n\n.historyCard{\n\toverflow: auto;\n\tmax-height:400px;\n}\n\n.monthText{\n\ttext-align:left;\n}\n\n.mainCard{\n\tmargin-top: 4vh;\n}\n\n.spinner{\n\tmargin-left:44%;\n\tmargin-top:5vh\n}\n\n.backBtn{\n\ttext-align: left\n}"

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = ".username-input{\n    padding: 10px;\n    width: 90%;\n}\n\n"

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = ".budget-input{\n    width: 96%;\n}\n\n.amount{\n    font-weight: 20px;\n    color: slateblue\n}\n\n.mainCard{\n    margin-top: 10px;\n}\n\n.btn{\n    margin: 2px;\n}\n\n.example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.selectBox{\n    width: 96%;\n    margin: 15px 0 15px 0;\n    padding: 5px;\n    border-radius: 2px;\n    background: #FFFAD3;\n}\n\ntable{\n    width: 98%;\n    margin-left: 0.8%;\n}\n\n@media \nonly screen and (max-width: 760px),\n(min-device-width: 768px) and (max-device-width: 1024px)  {\n\ntable{\n    width: 100%;\n    margin: 0 auto;\n}\n\t\n}\n"

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "<md-toolbar class=\"toolbar\">\n  <span><img class=\"logoImg\" src=\"../../images/wallet2.png\" alt=\"\"></span>\n  <span style=\"font-family:cursive;\">My Budget</span>\n</md-toolbar>\n<md-progress-bar *ngIf=\"editFlag && !dataRecieved\" mode=\"indeterminate\" color=\"warn\"></md-progress-bar>\n\n<div class=\"main\">\n\n  <md-card style=\"margin-top: 20vh;\">\n    <md-card-content>\n          \n          <form *ngIf=\"!editFlag\" [formGroup]=\"myForm\"  (ngSubmit)=\"totalIncome(myForm.value);\">\n            <div>\n              <md-input class=\"budget-input\" [placeholder]=\"placeholderText\" type=\"text\" formControlName=\"income\" [class.error]=\"myForm.controls['income'].touched\">\n                <span md-suffix>&nbsp;Rs</span>\n              </md-input>\n              <md-input class=\"budget-input\" placeholder=\"Amount you want to save(optional)\" type=\"text\" formControlName=\"saving\" [class.error]=\"myForm.controls['saving'].touched\">\n                <span md-suffix>&nbsp;Rs</span>\n              </md-input>\n              <div class=\"err\" *ngIf=\"myForm.controls['saving'].value > myForm.controls['income'].value\">you can't save more than provided income</div>\n              <div class=\"err\" *ngIf=\"myForm.controls['income'].hasError('required') && myForm.controls['income'].touched\">income is required</div>\n              <div class=\"err\" *ngIf=\"myForm.controls['saving'].hasError('required') && myForm.controls['saving'].touched\">saving is required</div>\n            </div>\n            <div *ngIf=\"!myForm.valid && myForm.dirty\" class=\"err\">Some form field values are invalid</div>\n            <button md-raised-button color=\"warn\" type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\n          </form>\n\n          <form *ngIf=\"editFlag\" [formGroup]=\"myForm\" (ngSubmit)=\"editIncome(myForm.value);\">\n            <div>\n              <md-input [value]=\"oldIncome.totalIncome\" class=\"budget-input\" [placeholder]=\"placeholderText\" type=\"text\" formControlName=\"income\" [class.error]=\"myForm.controls['income'].touched\">\n                <span md-suffix>&nbsp;Rs</span>\n              </md-input>\n              <md-input [value]=\"oldIncome.totalSaving\" class=\"budget-input\" placeholder=\"Amount you want to save(optional)\" type=\"text\" formControlName=\"saving\" >\n                <span md-suffix>&nbsp;Rs</span>\n              </md-input>\n              <div class=\"err\" *ngIf=\"myForm.controls['saving'].value > myForm.controls['income'].value\">you can't save more than provided income</div>\n              <div class=\"err\" *ngIf=\"myForm.controls['income'].hasError('required') && myForm.controls['income'].touched\">income is required</div>\n              <!--<div class=\"err\" *ngIf=\"myForm.controls['saving'].hasError('required') && myForm.controls['saving'].touched\">saving is required</div>-->\n            </div>\n            <div *ngIf=\"!myForm.valid && myForm.dirty\" class=\"err\">Some form field values are invalid</div>\n            <div>\n              <button md-raised-button color=\"warn\" type=\"submit\" [disabled]=\"!myForm.valid\">Save</button>\n              <button md-raised-button color=\"warn\" type=\"button\" (click)=\"cancelEdit();\">Cancel</button>  \n            </div>\n          </form>\n    </md-card-content>\n  </md-card>\n\n</div>\n\n\n"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = "<md-toolbar class=\"toolbar\">\n  <span><img class=\"logoImg\" src=\"../../images/wallet2.png\" alt=\"logo\"></span>\n  <span style=\"font-family:cursive;\">My Budget</span>\n</md-toolbar>\n<md-progress-bar *ngIf=\"!dataRecieved\" mode=\"indeterminate\" color=\"warn\"></md-progress-bar>\n\n<div class=\"main\">\n  \n  <div class=\"backBtn\">\n    <button flex md-raised-button color=\"warn\" routerLink='/today-budget/back'>Back</button>\n  </div>\n  <!--<div class=\"spinner\" *ngIf=\"!dataRecieved\"><md-spinner color=\"warn\"></md-spinner></div>-->\n  <div *ngIf=\"dataRecieved\" #modal>\n    <md-card class=\"mainCard\" *ngFor='let month of history | iterateObject:\"key\":true; let id=index' >\n      <p class=\"display-2\" *ngIf=\"!month.Days\">{{message || \"Currently no history available to show\"}} </p>\n      <md-card-content class=\"historyCard\" *ngIf=\"month.Days\" layout=\"row\" >\n          <h3 (click)=\"toggleMe(id)\" class=\"monthText\">{{month.k}} <span class=\"saving\">saved: {{month.updatedBudget}} Rs</span></h3>\n          <table *ngIf=\"toggle == id\" class=\"historyTable\" layout=\"row\" flex>\n            <tr>\n              <th class=\"tRow\">Day</th>\n              <th class=\"tRow\">Category</th>\n              <th class=\"tRow\">Item</th>\n              <th class=\"tRow\">Quantity</th>\n              <th class=\"tRow\">Amount</th>\n            </tr>\n            <tr *ngFor=\"let item of month.Days | iterateObject:'key':true\">\n              <td class=\"tRow\">{{item.k | date:\"shortDate\"}} {{item.k | date:\"HH:mm\"}}</td>\n              <td class=\"tRow\">{{item.category}}</td>\n              <td class=\"tRow\">{{item.item}}</td>\n              <td class=\"tRow\">{{item.quantity || \"not defined\"}}</td>\n              <td class=\"tRow\">{{item.money}}</td>\n            </tr>\n          </table>\n      </md-card-content>\n    </md-card>\n  </div>\n  \n</div>\n\n"

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = "<md-toolbar class=\"toolbar\">\n  <span><img class=\"logoImg\" src=\"../../images/wallet2.png\" alt=\"\"></span>\n  <span style=\"font-family:cursive;\">My Budget</span>\n</md-toolbar>\n\n<div layout=\"row\" layout-padding layout-margin layout-fill style=\"min-height: 224px; margin-top: 20vh;\">\n  <md-card flex>\n    <md-card-header>\n        <md-card-title>Manage your monthly budget easily</md-card-title>\n    </md-card-header>\n    <md-card-content>\n          <md-input class=\"username-input\" type=\"text\" name=\"username\" #username (keyup.enter)=\"getStarted(username.value)\" placeholder=\"Enter your name\">\n          </md-input>\n          <button md-raised-button color=\"warn\" *ngIf=\"username.value !== ''\" (click)=\"getStarted(username.value)\">Get Started</button>\n    </md-card-content>\n  </md-card>\n  \n</div>\n\n"

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = "<md-toolbar class=\"toolbar\">\n  <span><img class=\"logoImg\" src=\"../../images/wallet2.png\" alt=\"\"></span>\n  <span style=\"font-family:cursive;\">My Budget</span>\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <span><button flex=\"auto\" md-raised-button color=\"warn\" (click)=\"logout()\">Logout</button></span>\n</md-toolbar>\n<md-progress-bar *ngIf=\"!dataRecieved\" mode=\"indeterminate\" color=\"warn\"></md-progress-bar>\n\n\n<div layout=\"row\" style=\"margin-top: 4vh;\">\n  <div layout=\"row\">\n    <button flex=\"auto\" md-raised-button color=\"warn\" class=\"btn\" routerLink='/add-budget/edit'>Update Budget</button>\n    <button flex=\"auto\" md-raised-button color=\"warn\" class=\"btn\" routerLink='/budget-history'>Budget History</button>\n  </div>\n  {{getBudgetInfo() | async}}\n  <md-card layout=\"row\" style=\"margin-top: 4vh; margin:4vh 10px 0 10px;\" layout-align=\"center center\">\n    <!--<div style=\"margin-left:40%\" *ngIf=\"!dataRecieved\"><md-spinner color=\"warn\"></md-spinner></div>-->\n    <md-card-content *ngIf=\"dataRecieved\">\n      <p align='right'>{{days}} days left</p>\n      <p></p>\n      <p class=\"md-body-2\">Total Budget: <span class=\"amount\">{{budgetInfo.budget}} Rs</span></p>\n      <p class=\"md-body-2\" *ngIf=\"budgetInfo.update != '' \">Total Budget Left: <span style=\"color:red\">{{budgetInfo.update}} Rs</span></p>\n      <h3 class=\"md-display-2\">Amount you can spend per day: <span style=\"color:green\">{{budgetInfo.spend}} Rs</span></h3>\n      <p class=\"md-body-2\" style=\"color:green;margin:3px;\">{{message}}</p>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"totalSpended(myForm);\">\n          <div>\n            <select class=\"selectBox\" [formControl]=\"myForm.controls['category']\">\n              <option selected disabled>Choose category</option>\n              <option *ngFor=\"let category of categories;\" [value]=\"category\">\n                {{category}}\n              </option>\n            </select>  \n          </div>\n          <div>\n            <md-input class=\"budget-input\" [formControl]=\"myForm.controls['itemName']\" [class.error]=\"myForm.controls['itemName'].touched && myForm.controls['itemName'].hasError('invaliditemName')\" type=\"text\" placeholder=\"Item Name\">\n            </md-input>\n            <div class=\"err\" *ngIf=\"myForm.controls['itemName'].hasError('required') && myForm.controls['itemName'].touched\">item name is required</div>\n            <div class=\"err\" *ngIf=\"myForm.controls['itemName'].hasError('invaliditemName') && myForm.controls['itemName'].dirty\">item name should be a text value</div>  \n          </div>\n          <table cellspacing=\"0\">\n            <tr>\n              <td>\n                <md-input class=\"budget-input\" [formControl]=\"myForm.controls['quantity']\" type=\"number\" placeholder=\"Quantity (optional)\"></md-input>\n              </td>\n              <td>\n                <select class=\"selectBox\" [formControl]=\"myForm.controls['unit']\">\n                  <option selected disabled>Choose unit</option>\n                  <option *ngFor=\"let unit of units;\" [value]=\"unit\">\n                    {{unit}}\n                  </option>\n                </select>\n              </td>\n            </tr>\n          </table>\n          <div>\n            <md-input class=\"budget-input\" [formControl]=\"myForm.controls['amount']\" [class.error]=\"myForm.controls['amount'].touched && myForm.controls['amount'].hasError('invalidAmount')\" type=\"text\" placeholder=\"Amount\">\n              <span md-suffix>&nbsp;Rs</span>\n            </md-input>\n            <div class=\"err\" *ngIf=\"myForm.controls['amount'].value > budgetCheck()\">you are out of your budget for this amount, please update your budget</div>\n            <div class=\"err\" *ngIf=\"myForm.controls['amount'].hasError('required') && myForm.controls['amount'].touched\">amount is required</div>\n            <div class=\"err\" *ngIf=\"myForm.controls['amount'].hasError('invalidAmount') && myForm.controls['amount'].dirty\">amount should be a numeric value</div>\n          </div>\n          <div *ngIf=\"!myForm.valid && myForm.dirty\" class=\"err\">Some form field values are invalid</div>\n          <button md-raised-button color=\"warn\" type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\n      </form>\n    </md-card-content>\n  </md-card>\n\n</div>"

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* unused harmony export firebaseConfig */
/* unused harmony export database */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Must export the config
var firebaseConfig = {
    apiKey: 'AIzaSyAZB2a7SEmbQQd4r236nQNrRtiBnuhF5hk',
    authDomain: 'todo-list-8f989.firebaseapp.com',
    databaseURL: 'https://todo-list-8f989.firebaseio.com',
    storageBucket: 'todo-list-8f989.appspot.com'
};
__WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"](firebaseConfig);
var database = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]();
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
var MainService = (function () {
    function MainService(router) {
        this.router = router;
    }
    MainService.prototype.getStarted = function (username) {
        var _this = this;
        var vm = this;
        database.ref('users/' + username).once('value', function (snapshot) {
            var data = snapshot.val();
            if (data) {
                var budgetRef = 'budgetHistory/' + username + '' + _this.currentYear + '/' + _this.currentMonth;
                var budgetRefYearly = 'budgetHistory/' + username + '' + _this.currentYear;
                window.localStorage['username'] = username;
                window.localStorage['budgetRef'] = budgetRef;
                window.localStorage['budgetRefYearly'] = budgetRefYearly;
                vm.router.navigate(['/today-budget', budgetRef]);
            }
            else {
                database.ref('users/' + username).set({
                    username: username,
                });
                window.localStorage['username'] = username;
                vm.router.navigate(['/add-budget', username]);
            }
        });
    };
    MainService.prototype.calculateBudget = function (username, income, saving) {
        var userBudgetRef = 'budgetHistory/' + username + '' + this.currentYear + '/' + this.currentMonth;
        var budget = Math.abs(income - saving);
        var spendPerDay = Math.floor(budget / this.leftDays());
        database.ref(userBudgetRef).update({
            totalIncome: income,
            totalSaving: saving,
            totalBudget: budget,
            spendPerDay: spendPerDay,
            updatedBudget: ''
        });
        window.localStorage['budgetRef'] = userBudgetRef;
        var budgetRefYearly = 'budgetHistory/' + username + '' + this.currentYear;
        window.localStorage['budgetRefYearly'] = budgetRefYearly;
        this.router.navigate(['/today-budget', userBudgetRef]);
    };
    MainService.prototype.daysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };
    MainService.prototype.moneyToSpend = function (budgetRef) {
        return database.ref(budgetRef).once('value');
        // return new Observable((observer) => {
        //     let d = database.ref(budgetRef).once('value')
        //     observer.next(d);
        // });
    };
    MainService.prototype.todaySpended = function (budgetRef, category, item, todaySpended, quantity) {
        var date = new Date();
        return database.ref(budgetRef + '/Days/' + date).set({
            category: category, item: item, quantity: quantity, money: todaySpended });
    };
    MainService.prototype.updatedBudget = function (budgetRef, updatedBudget) {
        var spendPerDay = Math.floor(updatedBudget / this.leftDays());
        console.log('spend per days: ', spendPerDay);
        database.ref(budgetRef).update({
            updatedBudget: updatedBudget,
            spendPerDay: spendPerDay
        });
    };
    MainService.prototype.editIncome = function (username, newIncome, newSaving, oldIncome) {
        if (newSaving === void 0) { newSaving = 0; }
        if (newIncome === oldIncome.totalIncome && newSaving === oldIncome.totalSaving) {
            this.router.navigate(['/today-budget', this.budgetRef]);
            return false;
        }
        var newBudget = Math.abs(newIncome - newSaving);
        var updatedBudget = oldIncome.updatedBudget ?
            oldIncome.totalBudget > newBudget ?
                oldIncome.updatedBudget - Math.abs(newBudget - oldIncome.totalBudget)
                : oldIncome.updatedBudget + Math.abs(newBudget - oldIncome.totalBudget) : '';
        // : Math.abs(newBudget - oldIncome.totalBudget);
        if (updatedBudget) {
            var spendPerDay = Math.floor(updatedBudget / this.leftDays());
            database.ref(this.budgetRef).update({
                totalIncome: newIncome,
                totalSaving: newSaving,
                spendPerDay: spendPerDay,
                totalBudget: newBudget,
                updatedBudget: updatedBudget
            });
        }
        else {
            database.ref(this.budgetRef).update({
                totalIncome: newIncome,
                totalSaving: newSaving,
                spendPerDay: oldIncome.spendPerDay,
                totalBudget: newBudget,
                updatedBudget: oldIncome.updatedBudget
            });
        }
        this.router.navigate(['/today-budget', this.budgetRef]);
    };
    MainService.prototype.cancelEdit = function () {
        this.router.navigate(['/today-budget', this.budgetRef]);
    };
    MainService.prototype.getIncome = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            database.ref(_this.budgetRef).once('value', function (snapshot) {
                console.log('Income obj: ', snapshot.val());
                snapshot.val() ? resolve(snapshot.val()) : reject('error in getting Income');
            });
        });
    };
    MainService.prototype.logout = function () {
        window.localStorage.clear();
        this.router.navigate(['/']);
    };
    MainService.prototype.leftDays = function () {
        var date = new Date();
        var totalDays = this.daysInMonth(date.getMonth() + 1, date.getFullYear());
        return (totalDays - date.getDate());
    };
    MainService.prototype.getHistory = function () {
        return database.ref(this.budgetRefYearly).once('value');
    };
    MainService.prototype.isLoggedIn = function () {
        var _this = this;
        if (this.budgetRef) {
            database.ref(this.budgetRefYearly + '/' + this.currentMonth).once('value', function (snapshot) {
                snapshot.val() ? _this.router.navigate(['/today-budget', _this.budgetRef]) :
                    _this.router.navigate(['/add-budget', _this.username]);
            });
            return false;
        }
        else {
            return true;
        }
    };
    Object.defineProperty(MainService.prototype, "budgetRef", {
        get: function () {
            return window.localStorage['budgetRef'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainService.prototype, "budgetRefYearly", {
        get: function () {
            return window.localStorage['budgetRefYearly'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainService.prototype, "username", {
        get: function () {
            return window.localStorage['username'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainService.prototype, "currentMonth", {
        get: function () {
            var date = new Date();
            return monthNames[date.getMonth()];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainService.prototype, "currentYear", {
        get: function () {
            var date = new Date();
            return date.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    MainService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], MainService);
    return MainService;
    var _a;
}());
//# sourceMappingURL=/home/hammad/Projects/my-budget/src/main.service.js.map

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(433);


/***/ }

},[791]);
//# sourceMappingURL=main.bundle.map
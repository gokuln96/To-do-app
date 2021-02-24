(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/next/Documents/To-do-app/src/main.ts */"zUnb");


/***/ }),

/***/ "2cxV":
/*!***************************************!*\
  !*** ./src/app/checkbox.directive.ts ***!
  \***************************************/
/*! exports provided: CheckboxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDirective", function() { return CheckboxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CheckboxDirective {
    constructor(el) {
        this.el = el;
        this.isCompleted = false;
    }
    set setCompletedStatus(itemCompleted) {
        this.update(itemCompleted);
    }
    onClick() {
        this.update(null);
    }
    update(isAlreadyCompleted) {
        this.isCompleted = !this.isCompleted;
        this.isChecked = isAlreadyCompleted != null ? isAlreadyCompleted : this.isCompleted;
        if (this.isChecked)
            this.el.nativeElement.childNodes[0].classList.add('checked');
        else
            this.el.nativeElement.childNodes[0].classList.remove('checked');
    }
}
CheckboxDirective.ɵfac = function CheckboxDirective_Factory(t) { return new (t || CheckboxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CheckboxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CheckboxDirective, selectors: [["", "appCheckbox", ""]], hostVars: 2, hostBindings: function CheckboxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckboxDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", ctx.isChecked);
    } }, inputs: { setCompletedStatus: "setCompletedStatus" } });


/***/ }),

/***/ "3r+V":
/*!***************************************!*\
  !*** ./src/app/filter-custom.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterCustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCustomPipe", function() { return FilterCustomPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterCustomPipe {
    transform(itemList, displayState) {
        if (displayState === 'active')
            return itemList.filter(item => item.completed == false);
        else if (displayState === 'completed')
            return itemList.filter(item => item.completed == true);
        else
            return itemList;
    }
}
FilterCustomPipe.ɵfac = function FilterCustomPipe_Factory(t) { return new (t || FilterCustomPipe)(); };
FilterCustomPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterCustom", type: FilterCustomPipe, pure: false });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MUi6":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _checkbox_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkbox.directive */ "2cxV");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _highlight_button_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../highlight-button.directive */ "Y451");
/* harmony import */ var _filter_custom_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter-custom.pipe */ "3r+V");









const _c0 = function (a0) { return { "completed": a0 }; };
const _c1 = function (a0) { return { "show-close-icon": a0 }; };
function TodoListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function TodoListComponent_div_8_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onMouseHover(item_r5); })("mouseleave", function TodoListComponent_div_8_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onMouseLeave(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoListComponent_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.toggleCompleted(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoListComponent_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onDelete(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("setCompletedStatus", item_r5.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "im-", item_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, item_r5.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r5.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, item_r5.isHovering));
} }
function TodoListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoListComponent_div_10_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onTaskbarAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Clear Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.itemsLeft, " items left");
} }
const _c2 = function (a0, a1) { return { "light": a0, "dark": a1 }; };
function TodoListComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoListComponent_span_11_Template_span_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onTaskbarAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c2, ctx_r3.displayMode === "light", ctx_r3.displayMode === "dark"));
} }
function TodoListComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Drag and drop to reorder list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TodoListComponent {
    constructor() {
        this.allItemsList = [];
        this.id = 0;
        this.itemsLeft = 0;
        this.displayState = 'all';
        this.alreadyCompleted = false;
    }
    onEnter(event, input) {
        if (event.which === 13) {
            if (input.value.value.trim().length === 0)
                return;
            let obj = {
                id: this.id,
                completed: this.alreadyCompleted,
                value: input.value.value,
                isHovering: false
            };
            this.allItemsList.push(obj);
            this.id++;
            if (!this.alreadyCompleted)
                this.itemsLeft++;
            input.reset();
        }
    }
    onDelete(itemToBeDeleted) {
        let index = this.allItemsList.findIndex(item => { return item.id === itemToBeDeleted.id; });
        if (!itemToBeDeleted.completed)
            this.itemsLeft--;
        this.allItemsList.splice(index, 1);
    }
    toggleCompleted(selectedItem) {
        let index = this.allItemsList.findIndex(item => {
            return item === selectedItem;
        });
        this.allItemsList[index].completed = !this.allItemsList[index].completed;
        if (selectedItem.completed)
            this.itemsLeft--;
        else
            this.itemsLeft++;
    }
    onTaskbarAction(e) {
        if (e.target.id == 'clear') {
            this.clearCompleted();
            return;
        }
        this.displayState = e.target.id;
    }
    onMouseHover(hoveredItem) {
        let index = this.allItemsList.findIndex(item => {
            return item.id === hoveredItem.id;
        });
        if (index === -1)
            return;
        this.allItemsList[index].isHovering = true;
    }
    onMouseLeave(hoveredItem) {
        let index = this.allItemsList.findIndex(item => {
            return item.id === hoveredItem.id;
        });
        if (index === -1)
            return;
        this.allItemsList[index].isHovering = false;
    }
    clearCompleted() {
        let index;
        while (1) {
            index = this.allItemsList.findIndex(item => {
                return item.completed === true;
            });
            if (index > -1)
                this.onDelete(this.allItemsList[index]);
            else
                break;
        }
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.allItemsList, event.previousIndex, event.currentIndex);
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["todo-list"]], viewQuery: function TodoListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_checkbox_directive__WEBPACK_IMPORTED_MODULE_0__["CheckboxDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.checkbox = _t);
    } }, inputs: { displayMode: "displayMode" }, decls: 13, vars: 15, consts: [["id", "new-item", 1, "new-item", 3, "ngClass"], ["appCheckbox", "", 1, "round", 3, "click"], ["id", "im-new", "src", "../../assets/images/icon-check.svg"], [3, "keydown"], ["inputData", "ngForm"], ["type", "text", "id", "new-todo", "name", "value", "autocomplete", "off", "placeholder", "Create a new todo...", "ngModel", ""], ["cdkDropList", "", 1, "list", 3, "ngClass", "cdkDropListDropped"], ["cdkDrag", "", "class", "items", 3, "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], ["class", "taskbar", 3, "click", 4, "ngIf"], ["class", "taskbar filter-buttons-responsive", 3, "ngClass", 4, "ngIf"], ["style", "text-align: center;color: hsl(233, 6%, 51%) ;", 4, "ngIf"], ["cdkDrag", "", 1, "items", 3, "mouseover", "mouseleave"], ["appCheckbox", "", 1, "round", 3, "setCompletedStatus", "click"], ["src", "../../assets/images/icon-check.svg", 3, "id"], [1, "list-box", 3, "ngClass"], [1, "close", 3, "id", "ngClass", "click"], [1, "taskbar", 3, "click"], ["id", "remaining-items"], ["appHighlightButton", "", 1, "filter-buttons"], ["id", "all"], ["id", "active"], ["id", "completed"], ["id", "clear"], [1, "taskbar", "filter-buttons-responsive", 3, "ngClass"], ["appHighlightButton", "", 1, "filter-buttons-responsive", 3, "click"], [2, "text-align", "center", "color", "hsl(233, 6%, 51%)"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoListComponent_Template_div_click_1_listener() { return ctx.alreadyCompleted = !ctx.alreadyCompleted; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function TodoListComponent_Template_form_keydown_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return ctx.onEnter($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function TodoListComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TodoListComponent_div_8_Template, 6, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "filterCustom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TodoListComponent_div_10_Template, 13, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TodoListComponent_span_11_Template, 8, 4, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TodoListComponent_p_12_Template, 2, 0, "p", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c2, ctx.displayMode === "light", ctx.displayMode === "dark"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c2, ctx.displayMode === "light", ctx.displayMode === "dark"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 6, ctx.allItemsList, (ctx.displayState !== "all" || ctx.allItemsList) && ctx.displayState));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allItemsList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allItemsList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allItemsList.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _checkbox_directive__WEBPACK_IMPORTED_MODULE_0__["CheckboxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _highlight_button_directive__WEBPACK_IMPORTED_MODULE_5__["HighlightButtonDirective"]], pipes: [_filter_custom_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterCustomPipe"]], styles: [".new-item[_ngcontent-%COMP%]{ \n    \n    height:55px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border-radius: 5px;\n    border: 1px solid  black;\n    display: flexbox;\n}\n\n.taskbar[_ngcontent-%COMP%]{\n    \n    border-radius: 5px;\n    padding: 20px;  \n    display: flex;\n  }\n\n.filter-buttons[_ngcontent-%COMP%]{\n    display: none;\n  }\n\n.filter-buttons-responsive[_ngcontent-%COMP%]{\n    width:auto;\n    margin: auto;\n    display:flex;\n  }\n\n@media only screen and (min-width: 1130px){\n    .filter-buttons[_ngcontent-%COMP%]{\n      position: relative;\n     display:flex;\n     width:auto;\n    margin: auto;\n   }\n   .filter-buttons-responsive[_ngcontent-%COMP%]{\n     display:none;\n    \n   }\n  \n }\n\ninput[_ngcontent-%COMP%]{\n    outline: none;\n    border: none;\n    width: 70%;\n    margin-top: 1em;\n    padding-left: 50px;\n    font-size: 18px;\n    background-color: inherit;\n    color:inherit;\n    caret-color: hsl(220, 98%, 61%);\n  }\n\n.list[_ngcontent-%COMP%]{\n    border: 1px solid inherit; \n    border-radius: 5px;\n    \n    \n    \n    margin:0; \n    position: relative;\n    overflow:auto;\n  }\n\n.light[_ngcontent-%COMP%]{\n    background: hsl(0, 0%, 100%); \n    color:sl(235, 24%, 19%);\n  }\n\n.dark[_ngcontent-%COMP%]{\n    background: hsl(235, 24%, 19%);\n    color:hsl(0, 0%, 98%);\n  }\n\n.items[_ngcontent-%COMP%] {\n    display: flex;\n    \n    list-style: none;\n    border-bottom: 0.1px solid hsl(234, 11%, 52%);\n  }\n\n.list-box[_ngcontent-%COMP%]{\n    list-style: none;\n    padding: 17px;\n    margin-left: 30px;\n    font-size: 18px;\n  }\n\n.round[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 22px;\n    height:22px;\n    background-color: inherit;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    left: 2%;\n    margin-top: 1em;\n \n  }\n\n.round.checked[_ngcontent-%COMP%] {\n    background-image: linear-gradient(to right,hsl(192, 100%, 67%), hsl(280, 87%, 65%));\n    border-color: #66bb6a;\n  }\n\n.round[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    display: none;\n    position: absolute;\n    top: 6px;   \n    left:4px\n  }\n\n.round[_ngcontent-%COMP%]   img.checked[_ngcontent-%COMP%]{\n    display: block;\n  }\n\n.completed[_ngcontent-%COMP%] {\n      text-decoration: line-through;\n      color: hsl(234, 11%, 52%) !important;\n  }\n\nbutton[_ngcontent-%COMP%], .taskbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n      background-color: inherit;\n      border: none;\n      outline: none;\n      color: hsl(234, 11%, 52%);     \n      cursor: pointer;   \n      font-size: 14px; \n  }\n\n#clear[_ngcontent-%COMP%]{\n    position: absolute;\n    right:20px;\n    \n  }\n\n#remaining-items[_ngcontent-%COMP%]{\n    position: absolute;\n    left:20px;\n  }\n\n.highlight[_ngcontent-%COMP%]{\n    \n    color:hsl(220, 98%, 61%);;\n  }\n\n.hide[_ngcontent-%COMP%]{\n    visibility: hidden;\n  }\n\n.close[_ngcontent-%COMP%]{\n    position: absolute;\n    right:5%;\n    display: none;\n    background-image: url('icon-cross.svg');\n    outline: none;\n    border: none;\n    width: 17px;\n    height:17px;\n    background-color: inherit;\n  }\n\n.show-close-icon[_ngcontent-%COMP%]{\n    display: inline-block;\n    cursor: pointer;\n  }\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFDQTtJQUNFO01BQ0Usa0JBQWtCO0tBQ25CLFlBQVk7S0FDWixVQUFVO0lBQ1gsWUFBWTtHQUNiO0dBQ0E7S0FDRSxZQUFZOztHQUVkOztDQUVGOztBQUNDO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwrQkFBK0I7RUFDakM7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw2Q0FBNkM7RUFDL0M7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFFBQVE7SUFDUixlQUFlOztFQUVqQjs7QUFFQTtJQUNFLG1GQUFtRjtJQUNuRixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUjtFQUNGOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFHQTtNQUNJLDZCQUE2QjtNQUM3QixvQ0FBb0M7RUFDeEM7O0FBRUE7TUFDSSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGFBQWE7TUFDYix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLGVBQWU7RUFDbkI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVEO0lBQ0csa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsdUNBQXlEO0lBQ3pELGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7QUFLQTtJQUNFLFVBQVU7RUFDWiIsImZpbGUiOiJ0b2RvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubmV3LWl0ZW17IFxuICAgIC8qIHdpZHRoOjYwJTsgKi9cbiAgICBoZWlnaHQ6NTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xufVxuXG4udGFza2JhcntcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweDsgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuZmlsdGVyLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZmlsdGVyLWJ1dHRvbnMtcmVzcG9uc2l2ZXtcbiAgICB3aWR0aDphdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OmZsZXg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTMwcHgpe1xuICAgIC5maWx0ZXItYnV0dG9uc3tcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgZGlzcGxheTpmbGV4O1xuICAgICB3aWR0aDphdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgIH1cbiAgIC5maWx0ZXItYnV0dG9ucy1yZXNwb25zaXZle1xuICAgICBkaXNwbGF5Om5vbmU7XG4gICAgXG4gICB9XG4gIFxuIH1cbiAgaW5wdXR7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGhzbCgyMjAsIDk4JSwgNjElKTtcbiAgfVxuXG4gIC5saXN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGluaGVyaXQ7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiB3aWR0aDo2MCU7ICovXG4gICAgLyogbWF4LWhlaWdodDogMzAwcHg7ICAqL1xuICAgIC8qIHBhZGRpbmc6IDA7ICAqL1xuICAgIG1hcmdpbjowOyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6YXV0bztcbiAgfVxuXG4gIC5saWdodHtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEwMCUpOyBcbiAgICBjb2xvcjpzbCgyMzUsIDI0JSwgMTklKTtcbiAgfVxuXG4gIC5kYXJre1xuICAgIGJhY2tncm91bmQ6IGhzbCgyMzUsIDI0JSwgMTklKTtcbiAgICBjb2xvcjpoc2woMCwgMCUsIDk4JSk7XG4gIH1cblxuICAuaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogbGlzdC1zdHlsZTogbm9uZTsgKi9cbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkIGhzbCgyMzQsIDExJSwgNTIlKTtcbiAgfVxuXG4gIC5saXN0LWJveHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDE3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cblxuICAucm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6MjJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsZWZ0OiAyJTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gXG4gIH1cbiAgXG4gIC5yb3VuZC5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsaHNsKDE5MiwgMTAwJSwgNjclKSwgaHNsKDI4MCwgODclLCA2NSUpKTtcbiAgICBib3JkZXItY29sb3I6ICM2NmJiNmE7XG4gIH1cblxuICAucm91bmQgaW1ne1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNnB4OyAgIFxuICAgIGxlZnQ6NHB4XG4gIH1cbiAgXG4gIC5yb3VuZCBpbWcuY2hlY2tlZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcblxuICAuY29tcGxldGVkIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgY29sb3I6IGhzbCgyMzQsIDExJSwgNTIlKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgYnV0dG9uLCAudGFza2JhciBzcGFue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjb2xvcjogaHNsKDIzNCwgMTElLCA1MiUpOyAgICAgXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7ICAgXG4gICAgICBmb250LXNpemU6IDE0cHg7IFxuICB9XG5cbiAgI2NsZWFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDoyMHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMDBweDsgKi9cbiAgfVxuICAjcmVtYWluaW5nLWl0ZW1ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OjIwcHg7XG4gIH1cblxuICAuaGlnaGxpZ2h0e1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA1ZW07ICovXG4gICAgY29sb3I6aHNsKDIyMCwgOTglLCA2MSUpOztcbiAgfVxuXG4gIC5oaWRle1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gLmNsb3Nle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDo1JTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24tY3Jvc3Muc3ZnKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTdweDtcbiAgICBoZWlnaHQ6MTdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLnNob3ctY2xvc2UtaWNvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuXG4gIFxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "MUi6");




const _c0 = function (a0, a1) { return { "light-mode": a0, "dark-mode": a1 }; };
const _c1 = function (a0, a1) { return { "icon-light": a0, "icon-dark": a1 }; };
class AppComponent {
    constructor(document) {
        this.document = document;
        this.title = 'todoApp';
        this.mode = 'light';
        this.document.body.style.background = this.mode === 'light' ? "hsl(236, 33%, 92%)" : "hsl(235, 21%, 11%)";
    }
    changeMode() {
        this.mode === 'light' ? this.mode = 'dark' : this.mode = 'light';
        this.document.body.style.background = this.mode === 'light' ? "hsl(236, 33%, 92%)" : "hsl(235, 21%, 11%)";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 9, consts: [["id", "header", 3, "ngClass"], [1, "input"], [1, "title"], [1, "heading"], ["id", "mode-icon", 3, "ngClass", "click"], [3, "displayMode"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "T O D O ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.changeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "todo-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx.mode === "light", ctx.mode === "dark"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, ctx.mode === "light", ctx.mode === "dark"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayMode", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]], styles: [".dark-mode[_ngcontent-%COMP%] {\n    position: absolute;\n    width:100%;\n    height:45%;\n    background-color: hsl(235, 21%, 11%);\n    background-image: url('bg-desktop-dark.jpg');\n }\n .light-mode[_ngcontent-%COMP%] {\n    position: absolute;\n    width:100%;\n    height:45%; \n    background-color: hsl(240, 8%, 16%);\n    background-image: url('bg-desktop-light.jpg');\n }\n .input[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 15%;\n    width:90%;\n    left:5%\n }\n @media only screen and (min-width: 650px){\n    .input[_ngcontent-%COMP%]{\n       position: absolute;\n       top: 15%;\n       width:40%;\n       left:30%\n    }\n     \n .dark-mode[_ngcontent-%COMP%] {\n    position: absolute;\n    max-width:100%;\n    height:45%;\n    background-repeat: no-repeat;\n    background-color: hsl(235, 21%, 11%);\n    background-image: url('bg-desktop-dark.jpg');\n }\n .light-mode[_ngcontent-%COMP%] {\n    position: absolute;\n    width:100%;\n    height:45%;\n    background-repeat: no-repeat;\n    background-color: hsl(236, 33%, 92%);\n    background-image: url('bg-desktop-light.jpg');\n }\n}\n .heading[_ngcontent-%COMP%] {\n     font-family:'Josefin Sans';\n     font-size: 28px;\n     color: white;\n     font-weight: 400,600;\n     width:100%;\n }\n .title[_ngcontent-%COMP%] {\n     width:100%;\n     display:flex\n }\n .icon-dark[_ngcontent-%COMP%]{\n     background-image: url('icon-sun.svg');\n     border: none;\n     outline: none;\n     width:25px;\n     height: 25px;\n     background-color: inherit;\n     cursor: pointer;\n }\n .icon-light[_ngcontent-%COMP%]{\n     background-image: url('icon-moon.svg');\n     border: none;\n     outline: none;\n     width:25px;\n     height: 25px;\n     background-color: inherit;\n     cursor: pointer;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztJQUNHLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyw0Q0FBMkQ7Q0FDOUQ7Q0FDQTtJQUNHLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyw2Q0FBNEQ7Q0FDL0Q7Q0FHQTtJQUNHLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNUO0NBQ0g7Q0FFQTtJQUNHO09BQ0csa0JBQWtCO09BQ2xCLFFBQVE7T0FDUixTQUFTO09BQ1Q7SUFDSDs7Q0FFSDtJQUNHLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsNENBQTJEO0NBQzlEO0NBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLDZDQUE0RDtDQUMvRDtBQUNEO0NBQ0M7S0FDSSwwQkFBMEI7S0FDMUIsZUFBZTtLQUNmLFlBQVk7S0FDWixvQkFBb0I7S0FDcEIsVUFBVTtDQUNkO0NBRUE7S0FDSSxVQUFVO0tBQ1Y7Q0FDSjtDQUVBO0tBQ0kscUNBQW9EO0tBQ3BELFlBQVk7S0FDWixhQUFhO0tBQ2IsVUFBVTtLQUNWLFlBQVk7S0FDWix5QkFBeUI7S0FDekIsZUFBZTtDQUNuQjtDQUVBO0tBQ0ksc0NBQXFEO0tBQ3JELFlBQVk7S0FDWixhQUFhO0tBQ2IsVUFBVTtLQUNWLFlBQVk7S0FDWix5QkFBeUI7S0FDekIsZUFBZTtDQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbiAuZGFyay1tb2RlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDIxJSwgMTElKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iZy1kZXNrdG9wLWRhcmsuanBnKTtcbiB9XG4gLmxpZ2h0LW1vZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo0NSU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDglLCAxNiUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLWRlc2t0b3AtbGlnaHQuanBnKTtcbiB9XG4gXG4gXG4gLmlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNSU7XG4gICAgd2lkdGg6OTAlO1xuICAgIGxlZnQ6NSVcbiB9XG5cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KXtcbiAgICAuaW5wdXR7XG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgIHRvcDogMTUlO1xuICAgICAgIHdpZHRoOjQwJTtcbiAgICAgICBsZWZ0OjMwJVxuICAgIH1cbiAgICAgXG4gLmRhcmstbW9kZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDoxMDAlO1xuICAgIGhlaWdodDo0NSU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCAyMSUsIDExJSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmctZGVza3RvcC1kYXJrLmpwZyk7XG4gfVxuIC5saWdodC1tb2RlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NDUlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNiwgMzMlLCA5MiUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLWRlc2t0b3AtbGlnaHQuanBnKTtcbiB9XG59XG4gLmhlYWRpbmcge1xuICAgICBmb250LWZhbWlseTonSm9zZWZpbiBTYW5zJztcbiAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGZvbnQtd2VpZ2h0OiA0MDAsNjAwO1xuICAgICB3aWR0aDoxMDAlO1xuIH1cbiBcbiAudGl0bGUge1xuICAgICB3aWR0aDoxMDAlO1xuICAgICBkaXNwbGF5OmZsZXhcbiB9XG4gXG4gLmljb24tZGFya3tcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1zdW4uc3ZnKTtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBvdXRsaW5lOiBub25lO1xuICAgICB3aWR0aDoyNXB4O1xuICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gXG4gLmljb24tbGlnaHR7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ljb24tbW9vbi5zdmcpO1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIG91dGxpbmU6IG5vbmU7XG4gICAgIHdpZHRoOjI1cHg7XG4gICAgIGhlaWdodDogMjVweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cbiBcbiBcbiBcblxuIFxuIFxuICJdfQ== */"] });


/***/ }),

/***/ "Y451":
/*!***********************************************!*\
  !*** ./src/app/highlight-button.directive.ts ***!
  \***********************************************/
/*! exports provided: HighlightButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightButtonDirective", function() { return HighlightButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HighlightButtonDirective {
    constructor(element) {
        this.element = element;
    }
    handleClick(btn) {
        this.element.nativeElement.childNodes[0].classList = [''];
        this.element.nativeElement.childNodes[1].classList = [''];
        this.element.nativeElement.childNodes[2].classList = [''];
        if (btn.id === 'all') {
            this.element.nativeElement.childNodes[0].classList.add('highlight');
        }
        else if (btn.id === 'active') {
            this.element.nativeElement.childNodes[1].classList.add('highlight');
        }
        else if (btn.id === 'completed') {
            this.element.nativeElement.childNodes[2].classList.add('highlight');
        }
    }
}
HighlightButtonDirective.ɵfac = function HighlightButtonDirective_Factory(t) { return new (t || HighlightButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HighlightButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightButtonDirective, selectors: [["", "appHighlightButton", ""]], hostBindings: function HighlightButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HighlightButtonDirective_click_HostBindingHandler($event) { return ctx.handleClick($event.target); });
    } } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "MUi6");
/* harmony import */ var _filter_custom_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-custom.pipe */ "3r+V");
/* harmony import */ var _checkbox_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox.directive */ "2cxV");
/* harmony import */ var _highlight_button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight-button.directive */ "Y451");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"],
        _filter_custom_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterCustomPipe"],
        _checkbox_directive__WEBPACK_IMPORTED_MODULE_5__["CheckboxDirective"],
        _highlight_button_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightButtonDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
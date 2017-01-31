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
var core_1 = require('@angular/core');
var user_login_service_1 = require('../services/user-login.service');
var UserLoginComponent = (function () {
    function UserLoginComponent(userLoginService) {
        this.userLoginService = userLoginService;
    }
    UserLoginComponent.prototype.authenticateUser = function () {
        var email = "manioannides@gmai.com";
        var password = "password";
        this.userLoginService.authenticateUser(email, password);
        console.log("User Authenticated");
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-login',
            templateUrl: 'user-login.component.html',
            styleUrls: ['user-login.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof user_login_service_1.UserLoginService !== 'undefined' && user_login_service_1.UserLoginService) === 'function' && _a) || Object])
    ], UserLoginComponent);
    return UserLoginComponent;
    var _a;
}());
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map
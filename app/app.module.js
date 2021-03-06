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
// Modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_module_1 = require('./app-routing.module');
var core_module_1 = require('./core/core.module');
var forms_1 = require('@angular/forms');
//Components
var app_component_1 = require('./app.component');
var menu_component_1 = require("./menu/menu.component");
var user_account_component_1 = require("./users/user-account/user-account.component");
var map_component_1 = require("./map/map.component");
var user_authentication_component_1 = require("./users/user-authentication/user-authentication.component");
var my_bookings_component_1 = require("./bookings/my-bookings/my-bookings.component");
var user_billing_component_1 = require("./users/user-billing/user-billing.component");
var currentBooking_component_1 = require("./bookings/currentBooking.component");
//Services
var user_service_1 = require("./shared/services/user.service");
var booking_service_1 = require("./shared/services/booking.service");
var parkingStation_service_1 = require("./shared/services/parkingStation.service");
var auth_guard_1 = require("./shared/services/auth.guard");
var menu_service_1 = require("./shared/services/menu.service");
var email_service_1 = require("./shared/services/email.service");
var payment_service_1 = require('./shared/services/payment.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                core_module_1.CoreModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                map_component_1.MapComponent,
                menu_component_1.MenuComponent,
                user_authentication_component_1.UserAuthenticationComponent,
                user_account_component_1.UserAccountComponent,
                my_bookings_component_1.MyBookingsComponent,
                currentBooking_component_1.CurrentBookingComponent,
                user_billing_component_1.UserBillingComponent
            ],
            providers: [user_service_1.UserService,
                booking_service_1.BookingService,
                parkingStation_service_1.ParkingService,
                auth_guard_1.AuthGuard,
                menu_service_1.MenuService,
                email_service_1.EmailService,
                payment_service_1.PaymentService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
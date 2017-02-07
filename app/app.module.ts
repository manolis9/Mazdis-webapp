
// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from "./menu/menu.component";
import { UserAccountComponent } from "./users/user-account/user-account.component";
import { MapComponent } from "./map/map.component";
import { UserAuthenticationComponent } from "./users/user-authentication/user-authentication.component";
import { MyBookingsComponent } from "./bookings/my-bookings/my-bookings.component";

//Services
import { UserService } from "./shared/services/user.service";
import { BookingService } from "./shared/services/booking.service";
import { ParkingService } from "./shared/services/parkingStation.service";
import { AuthGuard } from "./shared/services/auth.guard";

@NgModule({
    imports: [ 
        BrowserModule,
        AppRoutingModule,
        CoreModule.forRoot()
    ],
    declarations: [
        AppComponent,
        MapComponent,
        MenuComponent,
        UserAuthenticationComponent,
        UserAccountComponent,
        MyBookingsComponent
    ],
<<<<<<< HEAD
    providers:[ UserService, BookingService, ParkingService, AuthGuard ],
=======
    providers:[ UserService, BookingService, AuthGuard, ParkingService ],
>>>>>>> d18a72b417ebc37f176cada1beeee7c86cabeebc
    bootstrap: [ AppComponent ]
})

export class AppModule { }
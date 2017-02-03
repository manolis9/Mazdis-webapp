// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

//Components
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {UserAccountComponent} from "./users/user-account/user-account.component";
import {MapComponent} from "./map/map.component";
import {UserAuthenticationComponent} from "./users/user-authentication/user-authentication.component";
import {UserService} from "./shared/services/user.service";

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
        UserAccountComponent
    ],
    providers:[ UserService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
/**
 * Created by Isaiah on 2017-01-31.
 */
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MapComponent } from "../map/map.component";
import { UserAuthenticationService } from "../users/services/user-authentication.service";
import { User } from "../users/model/user";



@Component({
    moduleId: module.id,
    selector: 'user-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    private currentUser = new User(null, null, null, null, null);

    constructor(private uas: UserAuthenticationService) {
    }

    ngOnInit() {
        this.getCurrentUser();
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    public closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    public openNav(){
        document.getElementById("myNav").style.width = "75%";
    }

    signOut() {
        this.uas.signOut();
    }

    getCurrentUser() {
        this.uas.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user;
                console.log("Current user - ", this.currentUser);
            },
            err => {
                console.error("Unable to get current user -", err);
            });
    }


}
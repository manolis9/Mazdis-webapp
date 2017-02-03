import { Component, OnInit } from '@angular/core';
import {ParkingStation} from "../shared/model/parkingStation";
import {UserAuthenticationService} from "../shared/services/user-authentication.service";
import {MenuComponent} from "../menu/menu.component";
declare let google: any;

@Component({
    moduleId: module.id,
    selector: 'map-map',
    template:
    '<user-menu></user-menu>' +
    '<div id="googleMap"></div>',

    styles: [`
    #googleMap {
        width: 100%;
        height:100%;
        padding: 0;
         }
`   ]
})
export class MapComponent implements OnInit {
    private map: any;
    private parkingStations: ParkingStation[];
    private markers: any;
    private infowindows: any;

    constructor( ) { }

    ngOnInit(){
        let testParking: ParkingStation = new ParkingStation('UBC Sub', '606 Something drive', 'MazDome', 49.2827, -123.1207, 100, true);
        let testParking2: ParkingStation = new ParkingStation('UBC asdf', '606 asdf drive', 'MazDome', 49.2727, -123.1207, 100, true);

        this.parkingStations = [testParking, testParking2];
        this.markers = [];
        this.infowindows = [];
        this.createMap();
        this.assignMarkersToParking();
        //
        // this.menu = new MenuComponent();

        let centerControlDiv = document.createElement('div');
        let centerControl = new this.CenterControl(centerControlDiv, this.map);

        centerControlDiv.tabIndex = 1;
        this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(centerControlDiv);

    }

    CenterControl(controlDiv, map) {
        let that = this;
        // Set CSS for the control border.
        let controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginTop = '5px';
        controlUI.style.marginLeft = '10px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Open Menu';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        let controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML =
            '<div style="width: 35px;height: 5px;background-color: black;margin: 6px 0;"></div>' +
            '<div style="width: 35px;height: 5px;background-color: black;margin: 6px 0;"></div>' +
            '<div style="width: 35px;height: 5px;background-color: black;margin: 6px 0;"></div>' ;
        controlUI.appendChild(controlText);

        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function () {
            document.getElementById("myNav").style.width = "75%";
        });
    }


    private createMap(){
        let mapProp = {
            center: new google.maps.LatLng(49.2827, -123.1207),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

    private assignMarkersToParking(){
        for (let parking of this.parkingStations){
            this.markers.push(this.createMarker(parking))
        }
    }

    private setMarkersToMap(){
        for (let marker of this.markers){
            marker.setMap(this.map);
        }
    }

    private createMarker(parking: ParkingStation){
        // Creating marker
        let that = this;

        let marker = new google.maps.Marker({
            position: {lat: parking.lat, lng: parking.lng},
            map: this.map,
            title: parking.title
        });

        // Creating Info Window which is related to this Parking Station
        let infowindow = new google.maps.InfoWindow({
           content: `
           <head>
           <script>
            myFuntion() {
                console.log("Button worked!!")
            }
           </script>
        </head>
        <div id="infoWindow">
             <h3>`+parking.title+`</h3><br>
             <p> Address: `+parking.address+`<br>
                 Type: `+parking.type+` <br>
                 Size: `+parking.size+`
             </p>
            <div class="col-sm-9 offset-sm-3"></div>
        </div>
        <input type="button" class="btn btn-info" onclick="myFunction()">Reserve</input>`,
        });

        // Pushes the newly created Info Window to the array of info windows
        this.infowindows.push(infowindow);

        // Listener made to open InfoWindow when user clicks on a marker
        marker.addListener('click', function() {
            document.getElementById('myNav').style.width = "0";
            // Closes all Info Windows before opening new one
            for (let i=0;i<that.infowindows.length;i++) {
                that.infowindows[i].close();
            }
            infowindow.open(this.map, marker);
        });

        // Closes the info window if a click occurs on the map
        this.map.addListener('click', function(){
            infowindow.close(this.map, marker);
        });

        return marker;
    }

    // myFunction() {
    //     console.log("Button worked!!");
    // }

}
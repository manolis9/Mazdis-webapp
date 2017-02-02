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
var parkingStation_1 = require("../model/parkingStation");
var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var testParking = new parkingStation_1.ParkingStation('UBC Sub', '606 Something drive', 'MazDome', 49.2827, -123.1207, 100, true);
        var testParking2 = new parkingStation_1.ParkingStation('UBC asdf', '606 asdf drive', 'MazDome', 49.2727, -123.1207, 100, true);
        this.parkingStations = [testParking, testParking2];
        this.markers = [];
        this.infowindows = [];
        this.createMap();
        this.assignMarkersToParking();
        //
        // this.menu = new MenuComponent();
        var centerControlDiv = document.createElement('div');
        var centerControl = new this.CenterControl(centerControlDiv, this.map);
        centerControlDiv.tabIndex = 1;
        this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(centerControlDiv);
    };
    MapComponent.prototype.CenterControl = function (controlDiv, map) {
        var that = this;
        // Set CSS for the control border.
        var controlUI = document.createElement('div');
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
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML =
            '<div style="width: 35px;height: 5px;background-color: black;margin: 6px 0;"></div>' +
                '<div style="width: 35px;height: 5px;background-color: black;margin: 6px 0;"></div>' +
                '<div style="width: 35px;height: 5px;background-color: black;margin: 6px 0;"></div>';
        controlUI.appendChild(controlText);
        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function () {
            document.getElementById("myNav").style.width = "75%";
        });
    };
    MapComponent.prototype.createMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(49.2827, -123.1207),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    };
    MapComponent.prototype.assignMarkersToParking = function () {
        for (var _i = 0, _a = this.parkingStations; _i < _a.length; _i++) {
            var parking = _a[_i];
            this.markers.push(this.createMarker(parking));
        }
    };
    MapComponent.prototype.setMarkersToMap = function () {
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            marker.setMap(this.map);
        }
    };
    MapComponent.prototype.createMarker = function (parking) {
        // Creating marker
        var that = this;
        var marker = new google.maps.Marker({
            position: { lat: parking.lat, lng: parking.lng },
            map: this.map,
            title: parking.title
        });
        // Creating Info Window which is related to this Parking Station
        var infowindow = new google.maps.InfoWindow({
            content: "\n        <div id=\"infoWindow\">\n             <h3>" + parking.title + "</h3><br>\n             <p> Address: " + parking.address + "<br>\n                 Type: " + parking.type + " <br>\n                 Size: " + parking.size + "\n             </p>\n            <div class=\"col-sm-9 offset-sm-3\"></div>\n        </div>\n        <button class=\"btn btn-info\" onclick=\"\">Reserve</button>",
        });
        // Pushes the newly created Info Window to the array of info windows
        this.infowindows.push(infowindow);
        // Listener made to open InfoWindow when user clicks on a marker
        marker.addListener('click', function () {
            // Closes all Info Windows before opening new one
            for (var i = 0; i < that.infowindows.length; i++) {
                that.infowindows[i].close();
            }
            infowindow.open(this.map, marker);
        });
        // Closes the info window if a click occurs on the map
        this.map.addListener('click', function () {
            infowindow.close(this.map, marker);
        });
        return marker;
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-map',
            template: '<user-menu></user-menu>' +
                '<div id="googleMap"></div>',
            styles: ["\n    #googleMap {\n        width: 100%;\n        height:100%;\n        padding: 0;\n         }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map
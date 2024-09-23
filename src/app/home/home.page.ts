import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.map = L.map('map').setView([-7.770115838142679, 110.37794672157405], 15);

    // Define the different base maps
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    });

    const satellite = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenTopoMap contributors'
    });

    const dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© CartoDB'
    });

    osm.addTo(this.map);

  
    const icon = L.icon({
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png',
      iconSize: [25, 41], 
      iconAnchor: [12, 41], 
      popupAnchor: [1, -34],
      shadowSize: [41, 41]  
    });

    const marker = L.marker([-7.770115838142679, 110.37794672157405], { icon }).addTo(this.map);
    marker.bindPopup('UGM broo').openPopup();

    
    const baseMaps = {
      "OpenStreetMap": osm,
      "OpenTopoMap": satellite,
      "Dark": dark
    };

    L.control.layers(baseMaps).addTo(this.map);
  }
}
import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Wait for the DOM to load
    document.addEventListener('DOMContentLoaded', () => {
      // Load the Google Maps API script dynamically
      this.loadGoogleMapsScript(() => {
        this.initMap();
      });
    });
  }

  loadGoogleMapsScript(callback: () => void) {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js'; // No API key needed
    script.onload = callback;
    document.body.appendChild(script);
  }

  initMap() {
    // Check if the 'map' element exists in the DOM
    const mapDiv = document.getElementById('map');
    if (!mapDiv) {
      console.error('The map element with ID "map" was not found in the DOM.');
      return;
    }

    const location = { lat: -25.858158, lng: 28.204744 }; // Replace with the actual coordinates

    const map = new google.maps.Map(mapDiv, {
      center: location,
      zoom: 15 // You can adjust the zoom level as needed
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Our Location' // Optional, tooltip for the marker
    });
  }
}
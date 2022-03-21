import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFuZHJvc29jY2VyY3I3IiwiYSI6ImNsMDl3N2wxeTBoZGczY3FzaXR3ZTNheDAifQ.o4SgLQtp24yls7swqCvnxQ';

if(!navigator.geolocation){
  alert('Navegador no soporta el geocalizador');
throw new Error("Navegador no soporta el geocalizador");


}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

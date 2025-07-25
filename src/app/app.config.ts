import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { tokenInterceptor } from '../core/interseptor/token.interceptor';
import { provideToastr } from 'ngx-toastr';




export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay())
    ,provideHttpClient(withFetch(),withInterceptors([tokenInterceptor])),
    provideAnimations(),
     provideToastr(), 
    
   
    
    

    
    
  ]
};

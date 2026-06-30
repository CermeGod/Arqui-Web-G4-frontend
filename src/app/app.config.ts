import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser'; // Quitamos withEventReplay de aquí
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { JwtModule } from '@auth0/angular-jwt';
import { errorInterceptor } from './components/errors/error.interceptor';

export function tokenGetter() {
  if (typeof window === 'undefined') {
    return null;
  }
  const token = window.sessionStorage.getItem('token');
  return token && token.split('.').length === 3 ? token : null;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    provideRouter(routes),
    
    // CORRECCIÓN: Hidratación estándar sin requerir configuraciones complejas de Zone
    provideClientHydration(), 
    
    provideCharts(withDefaultRegisterables()),
    
    provideHttpClient(
      withFetch(),
      withInterceptors([errorInterceptor]),
      withInterceptorsFromDi()
    ),
    
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter,
          allowedDomains: ['localhost:8080'],
          disallowedRoutes: ['http://localhost:8080/login/forget'],
        },
      })
    ),
  ]
};
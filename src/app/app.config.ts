import { ApplicationConfig } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), RouterOutlet]
};

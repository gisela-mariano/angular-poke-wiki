import {
	ApplicationConfig,
	inject,
	provideBrowserGlobalErrorListeners,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InMemoryCache } from '@apollo/client/core';
import Aura from '@primeuix/themes/aura';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
			},
		}),
		provideHttpClient(),
		provideApollo(() => {
			const httpLink = inject(HttpLink);

			return {
				link: httpLink.create({}),
				cache: new InMemoryCache(),
			};
		}),
	],
};

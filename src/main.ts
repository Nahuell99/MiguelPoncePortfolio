import { bootstrapApplication } from '@angular/platform-browser';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Métricas de rendimiento reales de los visitantes (Vercel Speed Insights).
// Es una sola página, así que la ruta se fija en "/".
injectSpeedInsights({ framework: 'angular', route: '/' });

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

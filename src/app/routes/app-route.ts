import {Routes} from '@angular/router';

export const APP_ROUTE: Routes = [
  {
    path: 'public',
    loadChildren: () => import('../modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

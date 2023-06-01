import {Routes} from '@angular/router';
import {LoginComponent} from '../views/login/login.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        component: LoginComponent
      },
      {
        path: '**',
        redirectTo: 'auth'
      }
    ]
  }
];
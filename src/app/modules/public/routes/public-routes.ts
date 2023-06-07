import {Routes} from '@angular/router';
import {LoginComponent} from '../views/login/login.component';
import {SignUpComponent} from '../views/sign-up/sign-up.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        component: LoginComponent
      },
      {
        path: 'signin',
        component: SignUpComponent
      },
      {
        path: '**',
        redirectTo: 'auth'
      }
    ]
  }
];

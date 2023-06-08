import {Routes} from '@angular/router';
import {SecureMainViewComponent} from '../views/secure-main-view/secure-main-view.component';
import {HomeViewComponent} from '../views/home-view/home-view.component';
import {MovieViewComponent} from '../views/movie-view/movie-view.component';

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    component: SecureMainViewComponent,
    children: [
      {
        path: 'home',
        component: HomeViewComponent
      },
      {
        path: 'movie',
        component: MovieViewComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

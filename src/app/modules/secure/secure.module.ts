import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecureMainViewComponent} from './views/secure-main-view/secure-main-view.component';
import {HomeViewComponent} from './views/home-view/home-view.component';
import {SecureRoutesModule} from './routes/secure-routes.module';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';
import {MovieViewComponent} from './views/movie-view/movie-view.component';


@NgModule({
  declarations: [
    SecureMainViewComponent,
    HomeViewComponent,
    ToolbarComponent,
    MovieViewComponent
  ],
  imports: [
    CommonModule,
    SecureRoutesModule
  ]
})
export class SecureModule {
}

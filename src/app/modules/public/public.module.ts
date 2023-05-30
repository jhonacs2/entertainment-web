import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './views/login/login.component';
import {PublicRoutesModule} from './routes/public-routes.module';
import {InputComponent} from '../../shared/components/input/input.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    PublicRoutesModule,
    CommonModule,
    InputComponent
  ]
})
export class PublicModule {
}

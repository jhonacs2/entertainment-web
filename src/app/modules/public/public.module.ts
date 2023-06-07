import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './views/login/login.component';
import {PublicRoutesModule} from './routes/public-routes.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EInputDirective} from '../../shared/directives/e-input/e-input.directive';
import {SignUpComponent} from './views/sign-up/sign-up.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PublicRoutesModule,
    ReactiveFormsModule,
    EInputDirective
  ]
})
export class PublicModule {
}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_ROUTE} from './app-route';


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTE)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

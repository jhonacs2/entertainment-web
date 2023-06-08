import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SECURE_ROUTES} from './secure-routes';

@NgModule({
  imports: [
    RouterModule.forChild(SECURE_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class SecureRoutesModule {
}

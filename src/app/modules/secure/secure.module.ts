import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SecureMainViewComponent} from './views/secure-main-view/secure-main-view.component';
import {HomeViewComponent} from './views/home-view/home-view.component';
import {SecureRoutesModule} from './routes/secure-routes.module';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';
import {MovieViewComponent} from './views/movie-view/movie-view.component';
import {EInputDirective} from '../../shared/directives/e-input/e-input.directive';
import { CardComponent } from './shared/card/card.component';
import { CarouselComponent } from './shared/carousel/carousel.component';


@NgModule({
  declarations: [
    SecureMainViewComponent,
    HomeViewComponent,
    ToolbarComponent,
    MovieViewComponent,
    CardComponent,
    CarouselComponent
  ],
    imports: [
        CommonModule,
        SecureRoutesModule,
        EInputDirective,
        NgOptimizedImage
    ]
})
export class SecureModule {
}

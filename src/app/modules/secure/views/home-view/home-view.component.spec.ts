import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeViewComponent} from './home-view.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CarouselComponent} from '../../shared/carousel/carousel.component';
import {MovieService} from '../../services/movie.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EInputDirective} from '../../../../shared/directives/e-input/e-input.directive';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeViewComponent, CarouselComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, EInputDirective],
      providers: [MovieService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

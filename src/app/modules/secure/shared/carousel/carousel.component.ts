import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper, {Autoplay} from 'swiper';
import {MovieService} from '../../services/movie.service';
import {MovieDetails} from '../../interfaces/movie-details.interface';
import {Observable, tap} from 'rxjs';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel') public carouselRef!: ElementRef<HTMLDivElement>;

  public swiperConfig!: Swiper;
  public trendingMovies: Observable<MovieDetails[]> = new Observable<MovieDetails[]>();

  constructor(private _movieService: MovieService) {
  }

  ngOnInit(): void {
    this.trendingMovies = this._movieService.getTrendingMovies()
      .pipe(tap(() => this._initCarousel()));
  }

  private _initCarousel(): void {
    this.swiperConfig = new Swiper(this.carouselRef.nativeElement, {
      slidesPerView: 3,
      spaceBetween: 50,
      autoHeight: false,
    });
  }
}

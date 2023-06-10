import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper, {Autoplay} from 'swiper';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') public carouselRef!: ElementRef<HTMLDivElement>;

  public swiperConfig!: Swiper;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._initCarousel();
  }

  private _initCarousel(): void {
    this.swiperConfig = new Swiper(this.carouselRef.nativeElement, {
      slidesPerView: 3,
      spaceBetween: 40,
      autoHeight: false,
    });
  }
}

import {AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[eInput]',
  standalone: true,
  host: {
    class: 'input-container form_input form_label'
  }
})
export class EInputDirective implements AfterViewInit {

  @HostListener('input', ['$event'])
  onInput(): void {
    this.updateElement();
  }

  constructor(public el: ElementRef, private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.updateElement();
  }

  private updateElement(): void {
    console.log(this.el.nativeElement.value);
  }
}

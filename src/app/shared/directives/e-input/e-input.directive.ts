import {AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener, Input, Optional} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
  selector: '[eInputText]',
  standalone: true,
  host: {
    class: 'input-container form_input form_label ',
    '[class.input-filled]': 'inputFilled',
    '[class.input-border-bottom]': 'isActiveBorderBottom'
  }
})
export class EInputDirective implements AfterViewInit {
  @Input() public isActiveBorderBottom = true;

  inputFilled: boolean = true;

  @HostListener('input', ['$event'])
  onInput(): void {
    this.updateElement();
  }

  constructor(public el: ElementRef,
              private cd: ChangeDetectorRef,
              @Optional() public ngModel: NgModel) {
  }

  ngAfterViewInit(): void {
    this.updateElement();
    this.cd.detectChanges();
  }

  public updateElement(): void {
    this.inputFilled = (this.el.nativeElement.value || this.ngModel);
  }
}

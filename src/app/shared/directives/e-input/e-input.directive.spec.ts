import {EInputDirective} from './e-input.directive';
import {ChangeDetectorRef, ElementRef} from '@angular/core';

describe('EInputDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const mockChangeDetectorRef = {} as ChangeDetectorRef;
    const directive = new EInputDirective(mockElementRef, mockChangeDetectorRef);

    expect(directive).toBeTruthy();
  });
});

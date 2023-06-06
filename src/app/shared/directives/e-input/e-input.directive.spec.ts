import {Component} from '@angular/core';
import {EInputDirective} from './e-input.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  template: `<input id="test_input" type="text" eInputText>`
})
class TestInputTextComponent {
}

describe('eInputText', () => {
  let inputText: EInputDirective;
  let fixture: ComponentFixture<TestInputTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestInputTextComponent],
      imports: [EInputDirective]
    });

    fixture = TestBed.createComponent(TestInputTextComponent);
    inputText = fixture.debugElement.children[0].componentInstance;
  });

  it('should input text display by default', () => {
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input'));

    expect(inputEl.nativeElement).toBeTruthy();
    expect(inputEl.nativeElement.className).toContain('input-container');
    expect(inputEl.nativeElement.className).toContain('form_input');
    expect(inputEl.nativeElement.className).toContain('form_label');
  });

  it('should call updateElement', () => {
    const inputEl = fixture.debugElement.query(By.css('input'));

    inputEl.nativeElement.value = 'entertainment app';
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputEl.nativeElement.className).toContain('input-filled');
  });
});

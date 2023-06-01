import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputComponent} from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have label input after construction', () => {
    expect(component.label).toBe('');
  });

  it('should have a placeholder called email', () => {
    component.placeholder = 'email';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input').placeholder).toEqual('email');
  });

  it('should have a label called email', () => {
    component.label = 'email';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('label').textContent).toEqual('email');
  });

  it('should have a input with id email', () => {
    component.idInput = 'email';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input').id).toEqual('email');
  });

  it('should have a label with for email', () => {
    component.idInput = 'email';
    fixture.detectChanges();
    const labelHtmlElement = fixture.nativeElement.querySelector('label');
    expect(labelHtmlElement.getAttribute('for')).toEqual('email');
  });
});

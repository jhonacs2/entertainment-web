import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecureMainViewComponent} from './secure-main-view.component';
import {ToolbarComponent} from '../../shared/toolbar/toolbar.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('SecureMainViewComponent', () => {
  let component: SecureMainViewComponent;
  let fixture: ComponentFixture<SecureMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecureMainViewComponent, ToolbarComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecureMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

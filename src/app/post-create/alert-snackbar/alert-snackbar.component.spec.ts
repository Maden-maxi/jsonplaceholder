import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSnackbarComponent } from './alert-snackbar.component';

describe('AlertSnackbarComponent', () => {
  let component: AlertSnackbarComponent;
  let fixture: ComponentFixture<AlertSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

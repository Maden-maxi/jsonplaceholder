import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolDialogComponent } from './bool-dialog.component';

describe('BoolDialogComponent', () => {
  let component: BoolDialogComponent;
  let fixture: ComponentFixture<BoolDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoolDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

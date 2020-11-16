import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralViewComponent } from './lateral-view.component';

describe('LateralViewComponent', () => {
  let component: LateralViewComponent;
  let fixture: ComponentFixture<LateralViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

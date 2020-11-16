import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFaciliterComponent } from './card-faciliter.component';

describe('CardFaciliterComponent', () => {
  let component: CardFaciliterComponent;
  let fixture: ComponentFixture<CardFaciliterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFaciliterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFaciliterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

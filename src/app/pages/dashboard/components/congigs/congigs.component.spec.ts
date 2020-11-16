import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongigsComponent } from './congigs.component';

describe('CongigsComponent', () => {
  let component: CongigsComponent;
  let fixture: ComponentFixture<CongigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

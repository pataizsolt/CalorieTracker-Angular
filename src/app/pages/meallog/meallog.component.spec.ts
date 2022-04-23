import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeallogComponent } from './meallog.component';

describe('MeallogComponent', () => {
  let component: MeallogComponent;
  let fixture: ComponentFixture<MeallogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeallogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeallogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

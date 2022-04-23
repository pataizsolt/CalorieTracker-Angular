import { TestBed } from '@angular/core/testing';

import { MeallogService } from './meallog.service';

describe('MeallogService', () => {
  let service: MeallogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeallogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RandomGuard } from './random.guard';

describe('RandomGuard', () => {
  let guard: RandomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RandomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

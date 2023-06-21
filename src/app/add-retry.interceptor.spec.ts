import { TestBed } from '@angular/core/testing';

import { AddRetryInterceptor } from './add-retry.interceptor';

describe('AddRetryInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddRetryInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddRetryInterceptor = TestBed.inject(AddRetryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

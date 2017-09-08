import { TestBed, inject } from '@angular/core/testing';

import { JsonPlaceholderInterceptorService } from './json-placeholder-interceptor.service';

describe('JsonPlaceholderInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPlaceholderInterceptorService]
    });
  });

  it('should be created', inject([JsonPlaceholderInterceptorService], (service: JsonPlaceholderInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { PostInfoResolverService } from './post-info-resolver.service';

describe('PostInfoResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostInfoResolverService]
    });
  });

  it('should be created', inject([PostInfoResolverService], (service: PostInfoResolverService) => {
    expect(service).toBeTruthy();
  }));
});

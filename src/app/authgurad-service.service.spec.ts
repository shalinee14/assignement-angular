import { TestBed } from '@angular/core/testing';

import { AuthguradServiceService } from './authgurad-service.service';

describe('AuthguradServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthguradServiceService = TestBed.get(AuthguradServiceService);
    expect(service).toBeTruthy();
  });
});

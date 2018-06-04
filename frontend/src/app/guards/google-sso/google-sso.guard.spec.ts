import { TestBed, async, inject } from '@angular/core/testing';

import { GoogleSSOGuard } from './google-sso.guard';

describe('GoogleSSOGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleSSOGuard]
    });
  });

  it('should ...', inject([GoogleSSOGuard], (guard: GoogleSSOGuard) => {
    expect(guard).toBeTruthy();
  }));
});

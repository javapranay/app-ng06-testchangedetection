import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    //service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated when there is a token', () => {
    //localStorage.setItem('token', '12345');
    service.authenticated = true;
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no a token', () => {
    service.authenticated = false;
    expect(service.isAuthenticated()).toBeFalsy();
  });
});

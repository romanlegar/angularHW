import { TestBed } from '@angular/core/testing';

import { CartHttpService } from './cart.http.service';

describe('Cart.HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartHttpService = TestBed.get(CartHttpService);
    expect(service).toBeTruthy();
  });
});

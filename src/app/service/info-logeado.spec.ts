import { TestBed } from '@angular/core/testing';

import { InfoLogeado } from './info-logeado';

describe('InfoLogeado', () => {
  let service: InfoLogeado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoLogeado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

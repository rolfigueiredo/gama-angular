import { TestBed } from '@angular/core/testing';

import { BuscadorCepService } from './buscador-cep.service';

describe('BuscadorCepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscadorCepService = TestBed.get(BuscadorCepService);
    expect(service).toBeTruthy();
  });
});

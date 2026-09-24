import { TestBed } from '@angular/core/testing';
import { Gestionfichier } from './gestionfichier';

describe('Gestionfichier', () => {
  let service: Gestionfichier;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gestionfichier);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

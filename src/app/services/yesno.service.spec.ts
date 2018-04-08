import { TestBed, inject } from '@angular/core/testing';

import { YesnoService } from './yesno.service';

describe('YesnoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YesnoService]
    });
  });

  it('should be created', inject([YesnoService], (service: YesnoService) => {
    expect(service).toBeTruthy();
  }));
});

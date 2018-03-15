import { TestBed, inject } from '@angular/core/testing';

import { HangmanService } from '../hangman.service';

describe('HangmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HangmanService]
    });
  });

  it('should be created', inject([HangmanService], (service: HangmanService) => {
    expect(service).toBeTruthy();
  }));
});

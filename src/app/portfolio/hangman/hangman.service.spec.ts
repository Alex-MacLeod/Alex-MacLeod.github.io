import { TestBed, inject } from '@angular/core/testing';

import { HangmanService } from './hangman.service';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HangmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        HangmanService
      ]
    });
  });

  it('should be created', inject([HangmanService], (service: HangmanService) => {
    expect(service).toBeTruthy();
  }));
});

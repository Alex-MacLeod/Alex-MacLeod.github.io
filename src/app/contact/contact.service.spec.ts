import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        ContactService
      ]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});

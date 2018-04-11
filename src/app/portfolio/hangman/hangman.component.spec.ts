import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanComponent } from './hangman.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { CommonService } from '../../app.service';
import { HangmanService } from './hangman.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HangmanComponent', () => {
  let component: HangmanComponent;
  let fixture: ComponentFixture<HangmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanComponent ],
      imports: [
        ReactiveFormsModule,
        AlertModule.forRoot(),
        CollapseModule.forRoot()
      ],
      providers: [
        HttpClient,
        HttpHandler,
        CommonService,
        HangmanService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

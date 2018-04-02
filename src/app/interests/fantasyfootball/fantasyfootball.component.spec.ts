import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyfootballComponent } from './fantasyfootball.component';

describe('FantasyfootballComponent', () => {
  let component: FantasyfootballComponent;
  let fixture: ComponentFixture<FantasyfootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyfootballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyfootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

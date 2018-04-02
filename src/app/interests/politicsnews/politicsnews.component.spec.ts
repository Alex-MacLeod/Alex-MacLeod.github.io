import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsnewsComponent } from './politicsnews.component';

describe('PoliticsnewsComponent', () => {
  let component: PoliticsnewsComponent;
  let fixture: ComponentFixture<PoliticsnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticsnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

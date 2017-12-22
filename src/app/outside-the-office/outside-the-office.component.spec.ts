import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideTheOfficeComponent } from './outside-the-office.component';

describe('OutsideTheOfficeComponent', () => {
  let component: OutsideTheOfficeComponent;
  let fixture: ComponentFixture<OutsideTheOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideTheOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideTheOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

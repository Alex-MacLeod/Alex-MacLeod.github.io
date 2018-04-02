import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategygamesComponent } from './strategygames.component';

describe('StrategygamesComponent', () => {
  let component: StrategygamesComponent;
  let fixture: ComponentFixture<StrategygamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategygamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategygamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

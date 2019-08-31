import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarComponent } from './owl-car.component';

describe('OwlCarComponent', () => {
  let component: OwlCarComponent;
  let fixture: ComponentFixture<OwlCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

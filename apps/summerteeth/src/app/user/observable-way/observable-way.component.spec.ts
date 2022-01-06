import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableWayComponent } from './observable-way.component';

describe('ObservableWayComponent', () => {
  let component: ObservableWayComponent;
  let fixture: ComponentFixture<ObservableWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

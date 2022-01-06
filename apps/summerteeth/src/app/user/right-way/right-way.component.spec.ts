import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightWayComponent } from './right-way.component';

describe('RightWayComponent', () => {
  let component: RightWayComponent;
  let fixture: ComponentFixture<RightWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

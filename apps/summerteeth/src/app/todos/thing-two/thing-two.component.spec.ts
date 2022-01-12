import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingTwoComponent } from './thing-two.component';

describe('ThingTwoComponent', () => {
  let component: ThingTwoComponent;
  let fixture: ComponentFixture<ThingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

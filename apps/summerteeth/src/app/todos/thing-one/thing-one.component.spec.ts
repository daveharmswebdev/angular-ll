import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingOneComponent } from './thing-one.component';

describe('ThingOneComponent', () => {
  let component: ThingOneComponent;
  let fixture: ComponentFixture<ThingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectWayComponent } from './subject-way.component';

describe('SubjectWayComponent', () => {
  let component: SubjectWayComponent;
  let fixture: ComponentFixture<SubjectWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWayComponent } from './page-way.component';

describe('PageWayComponent', () => {
  let component: PageWayComponent;
  let fixture: ComponentFixture<PageWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePiechartComponent } from './grade-piechart.component';

describe('GradePiechartComponent', () => {
  let component: GradePiechartComponent;
  let fixture: ComponentFixture<GradePiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradePiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

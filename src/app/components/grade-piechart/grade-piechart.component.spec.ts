import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { GradeService } from '../../services/grade.service';
import { GradePiechartComponent } from './grade-piechart.component';

describe('GradePiechartComponent', () => {
  let component: GradePiechartComponent;
  let fixture: ComponentFixture<GradePiechartComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ChartModule],
      declarations: [ GradePiechartComponent ],
      providers: [GradeService, { provide: Router, useValue: router}]
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

  it('selection of pie slice should navigate to list componant', () => {
    const e = { 'element': { '_index' : 0 }};
    component.selectData(e);
    expect(router.navigate).toHaveBeenCalledWith(['list']);
  });

  // it('setup', () => {
  //   component.ngOnInit();
  //   expect(1).toBe(1);
  // });
});

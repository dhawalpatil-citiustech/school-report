import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { GradeService } from '../../services/grade.service';
import { GradePiechartComponent } from './grade-piechart.component';
import { Student } from '../../interfaces/student';

describe('GradePiechartComponent', () => {
  let component: GradePiechartComponent;
  let fixture: ComponentFixture<GradePiechartComponent>;
  let gradeService;
  let student: Student[];
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
    gradeService = TestBed.inject(GradeService);
    fixture.detectChanges();

    student = [{
      "studentId": "1",
      "studentName": "Alice",
      "age": 12,
      "email": "Alice@gmail.com",
      "subject": [
        {
          "name": "English",
          "marks": 92
        },
        {
          "name": "Maths",
          "marks": 94
        },
        {
          "name": "Science",
          "marks": 90
        },
        {
          "name": "Social Studies",
          "marks": 90
        }
      ]
    }]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selection of pie slice should navigate to list componant', () => {
    const e = { 'element': { '_index' : 0 }};
    component.selectData(e);
    expect(gradeService.getGradeIndex()).toBe(0);
    expect(router.navigate).toHaveBeenCalledWith(['list']);
  });

  it('returned Promises should match the right data', fakeAsync(() => {
    spyOn(gradeService, 'getStudents').and.returnValue(Promise.resolve(student));
    tick();
    component.ngOnInit();
    gradeService.getStudents().then(studentList=>{
      expect(studentList).toBeTruthy();
      expect(component.gradeData.datasets[0].data[0]).toBe(1);
    })
  }));
});

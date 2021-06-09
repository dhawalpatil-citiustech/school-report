import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableModule } from 'primeng/table';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { GradeListComponent } from './grade-list.component';
import { Student } from '../../interfaces/student';

describe('GradeListComponent', () => {
  let component: GradeListComponent;
  let fixture: ComponentFixture<GradeListComponent>;
  let gradeService;
  let student: Student[];
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  let location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TableModule],
      declarations: [ GradeListComponent ],
      providers: [GradeService, { provide: Router, useValue: router}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeListComponent);
    component = fixture.componentInstance;
    gradeService = TestBed.inject(GradeService);
    location = TestBed.inject(Location);
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

  it('Should call get student API if student list not available', fakeAsync(() => {
    gradeService.studentList = [];

    spyOn(gradeService, 'getStudents').and.returnValue(Promise.resolve(student));
    tick();
    component.ngOnInit();
    gradeService.getStudents().then(studentList=>{
      expect(studentList).toBeTruthy();
      expect(component.studentList).toEqual(student);
    })
  }));

  it('Should not call get student API if student list available', () => {
    gradeService.studentList = student;
    component.ngOnInit();
    expect(component.studentList).toEqual(student);
  });

  it('Validation age is within range 8 to 18', () => {
    const object = {
      "studentId": "1",
      "age": 12
    };
    component.checkValidation('age', object);
    expect(object['error']['age']).toBeNull();
  });

  it('Validation age is not within range 8 to 18', () => {
    const object = {
      "studentId": "1",
      "age": 3
    };
    component.checkValidation('age', object);
    expect(object['error']['age']).toBe('Between 8 to 18');
  });

  it('Validation email is in correct pattern', () => {
    const object = {
      "studentId": "1",
      "email": 'john@gmail.com'
    };
    component.checkValidation('email', object);
    expect(object['error']['email']).toBeNull();
  });

  it('Validation email is in incorrect pattern', () => {
    const object = {
      "studentId": "1",
      "email": 'john'
    };
    component.checkValidation('email', object);
    expect(object['error']['email']).toBe('Invalid Email');

    // Repeat call to check error property is created or not
    component.checkValidation('email', object);
    expect(object['error']['email']).toBe('Invalid Email');
  });

  it('Validation marks should be in range 0 to 100', () => {
    const object = {
      "subject": [
        {
          "name": "English",
          "marks": 90
        }
      ]
    };
    component.checkValidation('marks', object.subject[0]);
    expect(object['subject'][0]['error']).toBeNull();
  });

  it('Validation marks should not below 0', () => {
    const object = {
      "subject": [
        {
          "name": "English",
          "marks": -3
        }
      ]
    };
    component.checkValidation('marks', object.subject[0]);
    expect(object['subject'][0]['error']).toBe('Nagative marks');
  });

  it('Validation marks should not above 100', () => {
    const object = {
      "email": 'john@gmail.com',
      "subject": [
        {
          "name": "English",
          "marks": 110
        }
      ]
    };
    component.checkValidation('marks', object.subject[0]);
    expect(object['subject'][0]['error']).toBe('Exceeds marks');
  });
});

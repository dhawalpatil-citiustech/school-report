import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GradeService } from './grade.service';

describe('GradeService', () => {
  let service: GradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GradeService]
    });
    service = TestBed.inject(GradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getStudentList function', () => {
    const service: GradeService = TestBed.inject(GradeService);
    expect(service.getStudents).toBeTruthy();
  });

  it('should be categarized student in grade 1 if total percentage is above 90', () => {
    const studentInfo = [{
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
          "marks": 95
        },
        {
          "name": "Science",
          "marks": 90
        },
        {
          "name": "Social Studies",
          "marks": 92
        }
      ]
    }];
    expect(service.getGrades(studentInfo).datasets[0].data[0]).toBe(1);
  });

  it('should be categarized student in grade 2 if total percentage is above 80 and below 90', () => {
    const studentInfo = [{
      "studentId": "1",
      "studentName": "Alice",
      "age": 12,
      "email": "Alice@gmail.com",
      "subject": [
        {
          "name": "English",
          "marks": 82
        },
        {
          "name": "Maths",
          "marks": 86
        },
        {
          "name": "Science",
          "marks": 82
        },
        {
          "name": "Social Studies",
          "marks": 84
        }
      ]
    }];
    expect(service.getGrades(studentInfo).datasets[0].data[1]).toBe(1);
  });

  it('should be categarized student in grade 3 if total percentage is above 70 and below 80', () => {
    const studentInfo = [{
      "studentId": "1",
      "studentName": "Alice",
      "age": 12,
      "email": "Alice@gmail.com",
      "subject": [
        {
          "name": "English",
          "marks": 72
        },
        {
          "name": "Maths",
          "marks": 74
        },
        {
          "name": "Science",
          "marks": 75
        },
        {
          "name": "Social Studies",
          "marks": 70
        }
      ]
    }];
    expect(service.getGrades(studentInfo).datasets[0].data[2]).toBe(1);
  });

  it('should be categarized student in grade 1 if total percentage is above 90', () => {
    service.studentList = [{
      "studentId": "12",
      "studentName": "Alice",
      "age": 12,
      "email": "Alice@gmail.com",
      "subject": [
        {
          "name": "English",
          "marks": 95
        },
        {
          "name": "Maths",
          "marks": 92
        },
        {
          "name": "Science",
          "marks": 94
        },
        {
          "name": "Social Studies",
          "marks": 96
        }
      ]
    }];
    service.setGradeIndex(0);
    expect(service.getStudentList()[0].studentId).toBe('12');
  });

  it('should be categarized student in grade 2 if total percentage is between 80 to 90', () => {
    service.studentList = [{
      "studentId": "12",
      "studentName": "Alice",
      "age": 12,
      "email": "Alice@gmail.com",
      "subject": [
        {
          "name": "English",
          "marks": 85
        },
        {
          "name": "Maths",
          "marks": 85
        },
        {
          "name": "Science",
          "marks": 85
        },
        {
          "name": "Social Studies",
          "marks": 85
        }
      ]
    }];
    service.setGradeIndex(1);
    expect(service.getStudentList()[0].studentId).toBe('12');
  });

  it('should be categarized student in grade 3 if total percentage is below 80', () => {
    service.studentList = [{
      "studentId": "12",
      "studentName": "Alice",
      "age": 12,
      "email": "Alice@gmail.com",
      "subject": [
        {
          "name": "English",
          "marks": 75
        },
        {
          "name": "Maths",
          "marks": 72
        },
        {
          "name": "Science",
          "marks": 77
        },
        {
          "name": "Social Studies",
          "marks": 78
        }
      ]
    }];
    service.setGradeIndex(2);
    expect(service.getStudentList()[0].studentId).toBe('12');
  });
});

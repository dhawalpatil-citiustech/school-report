import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableModule } from 'primeng/table';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { GradeListComponent } from './grade-list.component';

describe('GradeListComponent', () => {
  let component: GradeListComponent;
  let fixture: ComponentFixture<GradeListComponent>;
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
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

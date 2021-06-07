import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  selectedGrade: number;
  studentList: Student[] = [{
    studentId: 1,
    studentName: 'Alice',
    age: 12,
    email: 'Alice@gmail.com',
    subject: [{
      name: 'English',
      marks: 92
    }, {
      name: 'Maths',
      marks: 85,
    }, {
      name: 'Science',
      marks: 90,
    }, {
      name: 'Social Studies',
      marks: 82
    }]
  }, {
    studentId: 2,
    studentName: 'Brandon',
    age: 12,
    email: 'Brandon@gmail.com',
    subject: [{
      name: 'English',
      marks: 95
    }, {
      name: 'Maths',
      marks: 85,
    }, {
      name: 'Science',
      marks: 90,
    }, {
      name: 'Social Studies',
      marks: 95
    }]
  }, {
    studentId: 3,
    studentName: 'Liam',
    age: 12,
    email: 'Liam@gmail.com',
    subject: [{
      name: 'English',
      marks: 75
    }, {
      name: 'Maths',
      marks: 77,
    }, {
      name: 'Science',
      marks: 79,
    }, {
      name: 'Social Studies',
      marks: 82
    }]
  }, {
    studentId: 4,
    studentName: 'Emma',
    age: 12,
    email: 'Emma@gmail.com',
    subject: [{
      name: 'English',
      marks: 72
    }, {
      name: 'Maths',
      marks: 82,
    }, {
      name: 'Science',
      marks: 76,
    }, {
      name: 'Social Studies',
      marks: 74
    }]
  }, {
    studentId: 5,
    studentName: 'Sophia',
    age: 12,
    email: 'Sophia@gmail.com',
    subject: [{
      name: 'English',
      marks: 92
    }, {
      name: 'Maths',
      marks: 99,
    }, {
      name: 'Science',
      marks: 86,
    }, {
      name: 'Social Studies',
      marks: 88
    }]
  }, {
    studentId: 6,
    studentName: 'Henry',
    age: 12,
    email: 'Henry@gmail.com',
    subject: [{
      name: 'English',
      marks: 91
    }, {
      name: 'Maths',
      marks: 94,
    }, {
      name: 'Science',
      marks: 89,
    }, {
      name: 'Social Studies',
      marks: 90
    }]
  }, {
    studentId: 7,
    studentName: 'Alexander',
    age: 12,
    email: 'Alexander@gmail.com',
    subject: [{
      name: 'English',
      marks: 92
    }, {
      name: 'Maths',
      marks: 92,
    }, {
      name: 'Science',
      marks: 90,
    }, {
      name: 'Social Studies',
      marks: 96
    }]
  }, {
    studentId: 8,
    studentName: 'Benjamin',
    age: 12,
    email: 'Benjamin@gmail.com',
    subject: [{
      name: 'English',
      marks: 84
    }, {
      name: 'Maths',
      marks: 85,
    }, {
      name: 'Science',
      marks: 92,
    }, {
      name: 'Social Studies',
      marks: 90
    }]
  }, {
    studentId: 9,
    studentName: 'James',
    age: 12,
    email: 'James@gmail.com',
    subject: [{
      name: 'English',
      marks: 88
    }, {
      name: 'Maths',
      marks: 88,
    }, {
      name: 'Science',
      marks: 89,
    }, {
      name: 'Social Studies',
      marks: 90
    }]
  }, {
    studentId: 10,
    studentName: 'Isabella',
    age: 12,
    email: 'Isabella@gmail.com',
    subject: [{
      name: 'English',
      marks: 84
    }, {
      name: 'Maths',
      marks: 85,
    }, {
      name: 'Science',
      marks: 89,
    }, {
      name: 'Social Studies',
      marks: 82
    }]
  }, {
    studentId: 11,
    studentName: 'Sophia',
    age: 12,
    email: 'Sophia@gmail.com',
    subject: [{
      name: 'English',
      marks: 88
    }, {
      name: 'Maths',
      marks: 85,
    }, {
      name: 'Science',
      marks: 88,
    }, {
      name: 'Social Studies',
      marks: 82
    }]
  }, {
    studentId: 12,
    studentName: 'Olivia',
    age: 12,
    email: 'Olivia@gmail.com',
    subject: [{
      name: 'English',
      marks: 82
    }, {
      name: 'Maths',
      marks: 85,
    }, {
      name: 'Science',
      marks: 84,
    }, {
      name: 'Social Studies',
      marks: 82
    }]
  }];

  constructor() { }

  setGradeIndex(index) {
    this.selectedGrade = index;
  }

  getGradeIndex() {
   return  this.selectedGrade;
  }

  getGrades() {
    return {
      labels: ['Grade 1', 'Grade 2', 'Grade 3'],
      datasets: [
        {
          data: this.calculateGrade(),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    }
  }

  calculateGrade() {
    let greadArr = [0, 0, 0];
    this.studentList.filter((student) => {
      let total = 0;
      student.subject.forEach((subject)=>{
        total += subject.marks;
      });
      if(total > 360){
        greadArr[0]++;
      } else if(total <= 360 && total > 320) {
        greadArr[1]++;
      } else if(total <= 320) {
        greadArr[2]++;
      }
    });
    return greadArr;
  }

  getStudentList(): Student[] {
    return this.studentList.filter((student) => {
      let total = 0;
      student.subject.forEach((subject)=>{
        total += subject.marks;
      });
      if(this.getGradeIndex() === 0 && total > 360){
        return student;
      } else if(this.getGradeIndex() === 1 && (total <= 360 && total > 320)) {
        return student;
      } else if(this.getGradeIndex() === 2 && total <= 320) {
        return student;
      }
    });
  }
}

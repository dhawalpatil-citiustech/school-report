import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import studentsList from '../../assets/json/students.json'
@Injectable({
  providedIn: 'root'
})
export class GradeService {
  selectedGrade: number;
  studentList: Student[] = studentsList;

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

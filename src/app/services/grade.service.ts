import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import { HttpClient } from '@angular/common/http';
import studentsList from '../../assets/json/students.json'
@Injectable({
  providedIn: 'root'
})
export class GradeService {
  selectedGrade: number;
  studentList: Student[];

  constructor(private http: HttpClient) { }

  /*
   * API call to get student list
   */
  getStudents() {
    return this.http.get<any>('assets/json/students.json')
    .toPromise()
    .then(res => <Student[]>res)
    .then(data => { return data; });
  }

  /*
   * Setter method to store selected grade index
   */
  setGradeIndex(index) {
    this.selectedGrade = index;
  }

  /*
   * Gettor method to get selected grade index
   */
  getGradeIndex() {
   return  this.selectedGrade;
  }

  /*
   * Provides grade object for pie chart
   */
  getGrades(studentListData) {
    this.studentList = studentListData;
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

  /*
   * Provides grade count for Grade 1, 2, 3
   */
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

  /*
   * Provides student list as per selected grade index
   */
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

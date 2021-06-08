import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Student } from '../../interfaces/student';

import { GradeService } from '../../services/grade.service'

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {
  grading = ['First', 'Second', 'Third'];
  studentList: Student[]

  constructor(
    private gradeService: GradeService,
    public _location: Location) { }

  ngOnInit(): void {
    this.studentList = this.gradeService.getStudentList();
  }

  getTableTitle() {
    return `${this.grading[this.gradeService.getGradeIndex()]} Grade Students`;
  }

  checkValidation(type, object) {
    object['error']?'':object['error']={};
    if(type === 'age') {
      if(object.age < 8 || object.age > 18) {
        object['error']['age'] = 'Between 8 to 18';
      } else {
        object['error']['age'] = null;
      }
    } else if(type === 'email') {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(object.email)) {
        object['error']['email'] = 'Invalid Email';
      } else {
        object['error']['email'] = null;
      }
    } if(type === 'marks' && object.marks > 100) {
      object['error'] = 'Exceeds marks';
    } else if(type === 'marks' && object.marks < 0) {
      object['error'] = 'Nagative marks';
    } else if(type === 'marks') {
      object['error'] = null;
    }
  }

}

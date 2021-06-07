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
    private _location: Location) { }

  ngOnInit(): void {
    this.studentList = this.gradeService.getStudentList();
  }

  backClicked() {
    this._location.back();
  }

  getTableTitle() {
    return `${this.grading[this.gradeService.getGradeIndex()]} Grade Students`;
  }

}

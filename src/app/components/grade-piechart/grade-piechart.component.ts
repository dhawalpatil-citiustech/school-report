import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GradeService } from '../../services/grade.service'

@Component({
  selector: 'app-grade-piechart',
  templateUrl: './grade-piechart.component.html',
  styleUrls: ['./grade-piechart.component.scss']
})
export class GradePiechartComponent implements OnInit {

  gradeData: any;

  constructor(
    private gradeService: GradeService, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.gradeService.getStudents().then(data => {
      this.gradeData = this.gradeService.getGrades(data);
    });
  }

  selectData(e: any) {
    this.gradeService.setGradeIndex(e.element._index);
    this.router.navigate(['list']);
  }
}

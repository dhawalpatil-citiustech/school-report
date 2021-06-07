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
    this.gradeData = this.gradeService.getGrades();
  }

  selectData(e: any) {
    this.gradeService.setGradeIndex(e.element._index);
    this.router.navigate(['list']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-piechart',
  templateUrl: './grade-piechart.component.html',
  styleUrls: ['./grade-piechart.component.scss']
})
export class GradePiechartComponent implements OnInit {

  data: any;

  constructor() {

  }

  ngOnInit(): void {
    this.data = {
      labels: ['Grade 1', 'Grade 2', 'Grade 3'],
      datasets: [
        {
          data: [4, 6, 2],
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
        }]
    };
  }

  selectData(e: any) {
    console.log(e.dataset);
    console.log(e.element);
    console.log(e.element._datasetIndex);
    console.log(e.element._index);
  }

}

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  chartBar = [];
  chartPie = [];
  constructor() { }

  ngOnInit() {
    this.chartBar = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ["Chưa hoàn thành", "Đang thực hiện", "Hoàn thành"],
        datasets: [
          {
            backgroundColor: "#d4d4d4",
            data: [50, 20, 30, 100, 0]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chartPie = new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: ["Chưa hoàn thành", "Đang thực hiện", "Hoàn thành"],
        datasets: [
          {
            backgroundColor: ["#e78158", "#83b156", "#558abe"],
            data: [50, 20, 30]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });
  }

}

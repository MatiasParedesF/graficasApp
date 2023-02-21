import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartData, ChartEvent, ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartOptions: ChartConfiguration['options'] = {
  };

  public barChartType: ChartType = 'bar';
  public barCharLegend = true;

  @Input() barChartData: ChartData<'bar'> = {
    labels: [ /*'2022', '2023', '2024', '2025', '2026', '2027', '2028'*/],
    datasets: [/*
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#FFDD29', hoverBackgroundColor:'#3698FF' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#6D0BB3', hoverBackgroundColor:'#3698FF' },
      { data: [ 8, 38, 70, 89, 26, 57, 100 ], label: 'Series C', backgroundColor:'#A11CFF', hoverBackgroundColor:'#3698FF' }
  */]
  };

  constructor(){
    console.log(this.barChartOptions?.indexAxis)
    //console.log(this.horizontal);
  }
  ngOnInit(): void {

  }


  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

}

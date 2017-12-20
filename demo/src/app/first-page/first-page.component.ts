import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ScriptService } from "./first-page.scriptservice";
import { ScriptStore } from "./first-page.script";
import { map } from "rxjs/operators/map";


declare let google: any;


@Component({
  selector:'nl-first-page',
  templateUrl:'./first-page.component.html',
  styleUrls: ['./first-page.component.css']
})

export class FirstPageComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) { }

  ngOnInit() {
    this.createGoogleChart();
  }

  // createGoogleChart() {
  //   this.scriptService.loadScript(ScriptStore).then((res) => {
  //     this.createGoogleChartStructure();
  //   });
  // }

  createGoogleChart(){
    this.scriptService.loadScript(ScriptStore).subscribe(
      value => console.log('value'),
      err => { },
      () => {
        this.createGoogleChartStructure();
      }
    )
  }

  createGoogleChartStructure(){
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ]);

      var options = {
        title: 'My Daily Activities'
      };

      var chart = new google.visualization.PieChart(document.getElementById('divChart'));

      chart.draw(data, options);
    }
  }


}
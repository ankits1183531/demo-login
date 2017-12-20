import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ScriptService } from "./first-page.scriptservice";
import { ScriptStore } from "./first-page.script";
import { map } from "rxjs/operators/map";
import { ChartDataAPIService } from "./chartAPI.service";
import { Observable } from 'rxjs/Observable';

declare let google: any;


@Component({
  selector: 'nl-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})

export class FirstPageComponent implements OnInit {

  private barChartData;
  private pieChartData;
  private complaintStatuswise = [];

  constructor(
    private scriptService: ScriptService,
    private getChartData: ChartDataAPIService,
  ) { }

  ngOnInit() {
    this.createGoogleChart();
    this.getBarChartData();
    this.getPieChartData();
  }

  createGoogleChart() {
    this.scriptService.loadScript(ScriptStore).subscribe(
      value => console.log('value'),
      err => { },
      () => {
        console.log('Google chart js loaded successfully');
      }
    )
  }

  getBarChartData() {
    this.getChartData.getBarChartBuildingData().subscribe(
      (res: any) => {
        this.barChartData = res;
        var parsedData = this.fetchDataFieldsForBarCharts();
        this.createGoogleBarChart(parsedData);
      }, (err) => {
        console.log(err);
      }
    )
  }


  createGoogleBarChart(parsedData) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChartBar);
    function drawChartBar() {


      var dataBar = new google.visualization.DataTable();
      dataBar.addColumn('string', 'categoryName');
      dataBar.addColumn('number', 'New');
      dataBar.addColumn('number', 'Assigned');
      dataBar.addColumn('number', 'InProgress');
      dataBar.addColumn('number', 'Closed');
      dataBar.addColumn('number', 'Reopen');
      dataBar.addColumn('number', 'Satisfied');

      dataBar.addRows(parsedData);

      var options_fullStacked = {
        title: 'First Chart',
        isStacked: 'percent',
        height: 300,
        legend: { position: 'top', maxLines: 3 },
        hAxis: {
          minValue: 0,
        }
      };


      var piechart = new google.visualization.BarChart(document.getElementById('divChart-Bar'));
      piechart.draw(dataBar, options_fullStacked);
    }
  }

  fetchDataFieldsForBarCharts() {
    var dataJson = [];
    this.complaintStatuswise = [];
    for (let i = 0; i < this.barChartData.length; i++) {
      var obj = [];
      obj.push(this.barChartData[i].categoryName);
      this.complaintStatuswise.push([this.barChartData[i].categoryName, this.barChartData[i].totalCount])
      for (let j = 0; j < this.barChartData[i].statusResults.length; j++) {
        obj.push(this.barChartData[i].statusResults[j].count);
      }
      dataJson.push(obj);
    }
    return dataJson;
  }

  getPieChartData() {
    this.getChartData.getPieChartBuildingData().subscribe(
      (res: any) => {
        this.pieChartData = res;
        this.createGooglePieChart(res);
      }, (err) => {
        console.log(err);
      }
    )
  }

  createGooglePieChart(data) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChartPie);

    function drawChartPie() {
      var dataBar = new google.visualization.DataTable();
      dataBar.addColumn('string', "statusName");
      dataBar.addColumn('number', "count");
      let check = [];
      data.forEach(element => {
        check.push([element.statusName, element.count]);
      });
      dataBar.addRows(check);

      var options = {
        'title': 'Compliant Status',
        'width': 400,
        'height': 300,
        'legend': { position: 'top', maxLines: 3 },
      };

      var piechart = new google.visualization.PieChart(document.getElementById('divChart-Pie'));
      piechart.draw(dataBar, options);
    }
  }

}
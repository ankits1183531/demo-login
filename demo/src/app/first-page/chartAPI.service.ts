import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const url: string = 'http://cornerstone.njs.jelastic.vps-host.net/principal/1718494345/complaint';

@Injectable()
export class ChartDataAPIService{


  constructor(
    private httpClient : HttpClient
  ){}

  getBarChartBuildingData(){
    return this.httpClient.get(url + '/category-status').pipe(
      tap(res =>{
      })
    );
  }

  getPieChartBuildingData(){
    return this.httpClient.get(url + '/status').pipe(
      tap(res => {
      })
    )
  }

}
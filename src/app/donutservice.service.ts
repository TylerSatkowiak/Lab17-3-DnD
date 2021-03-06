import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Donut, DonutDetail, DonutResponse} from './interfaces/donut';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutServiceService {
  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  
  constructor(private http:HttpClient) { }

  getDonut(){
    return this.http.get<DonutResponse>(this.apiUrl);
  }
  
  getDonutStuff(d: number){
    return this.http.get<DonutDetail>(`https://grandcircusco.github.io/demo-apis/donuts/${d}.json`)
  }
}

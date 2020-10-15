import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Donut, DonutResponse} from './interfaces/donut';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutServiceService {
  apiUrl: 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http:HttpClient) { }

  getDonut(): Observable<DonutResponse>{
    return this.http.get<DonutResponse>(this.apiUrl);
  }
  
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Donut} from './interfaces/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutserviceService {
  apiUrl: 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http:HttpClient) { }
  getPost(){
    return this.http.get<Donut>(this.apiUrl);
  }
}

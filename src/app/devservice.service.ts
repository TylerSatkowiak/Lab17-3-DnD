import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dev, FamousDevs} from './interfaces/dev';
@Injectable({
  providedIn: 'root'
})
export class DevServiceService {
  apiURL: string = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json'
  constructor(private http: HttpClient) { }

  getDev(){
    return this.http.get<Dev>(this.apiURL);
  }
}

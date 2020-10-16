import { Component, OnInit } from '@angular/core';
import { DevServiceService } from '../devservice.service';
import {Dev, FamousDevs} from '../interfaces/dev';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit {
  devs: FamousDevs[];
  constructor(private APIDev: DevServiceService) { }

  ngOnInit(): void {
    this.APIDev.getDev().subscribe(response => this.devs = response.complete);
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Donut } from '../interfaces/donut';

@Component({
  selector: 'app-donut-view',
  templateUrl: './donut-view.component.html',
  styleUrls: ['./donut-view.component.css']
})
export class DonutViewComponent implements OnInit {
  donut:Donut;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Donut } from '../interfaces/donut';
import { DonutserviceService } from '../donutservice.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donut: Donut;
  constructor(private route: DonutserviceService) { }

  ngOnInit(): void {
    this.route.getPost().subscribe(
      (data: Donut) =>{this.donut = data});
  }

  getDonut = function(){
    

  }


}

import { Component, OnInit } from '@angular/core';
import { Donut, DonutResponse} from '../interfaces/donut';
import { DonutServiceService } from '../donutservice.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  
  donuts: Donut[];
  constructor(private APIDonut: DonutServiceService){}
   
  
  ngOnInit(){
    debugger;
    this.APIDonut.getDonut().subscribe(response => this.donuts = response.results
    //this.APIDonut.getDonut().subscribe((data:Donut) =>{this.donut = data;}
      
    );
      debugger;
  }

}

/*
  donut: Donut;
  constructor(private route: DonutServiceService) { }
*/
 
    /*
    this.route.getPost().subscribe(
      (data: Donut) =>{this.donut = data});
      */
/*

import { Component, OnInit } from '@angular/core';
import { DonutServiceService } from '../donutservice.service';
import { Donut } from '../interfaces/donut';

 
@Component({
  selector: 'app-donut-display',
  templateUrl: './donut-display.component.html',
  styleUrls: ['./donut-display.component.scss']
})
export class DonutDisplayComponent implements OnInit {
 
  public donuts: Donut[];
  constructor(public donutService: DonutServiceService) { }
 
  ngOnInit(): void {
    this.donutService.getDonut().subscribe(response => this.donuts = response.results);
  }
}
*/
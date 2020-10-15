import { Component, OnInit } from '@angular/core';
import { Donut, DonutResponse} from '../interfaces/donut';
import { DonutServiceService } from '../donutservice.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  /*
  donut: Donut;
  constructor(private route: DonutServiceService) { }
*/
 
    /*
    this.route.getPost().subscribe(
      (data: Donut) =>{this.donut = data});
      */
  response: DonutResponse;
  constructor(private APIDonut: DonutServiceService){}
   
  ngOnInit(){
    debugger;
    this.APIDonut.getDonut().subscribe(
      
      data =>{this.response = data;}
    );
      debugger;
  }

}

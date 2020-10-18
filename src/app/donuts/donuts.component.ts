import { Component, OnInit } from '@angular/core';
import { Donut} from '../interfaces/donut';
import { DonutServiceService } from '../donutservice.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  
  donuts: Donut[];
  selected: number;

  constructor(private APIDonut: DonutServiceService){}
   
  
  ngOnInit(){
    this.APIDonut.getDonut().subscribe(response => this.donuts = response.results);
    //this.APIDonut.getDonut().subscribe((data:Donut) =>{this.donuts = data;}
    
  }

  setSelected(i: number){
    this.selected = i;
  }

}

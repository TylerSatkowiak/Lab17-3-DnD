import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutServiceService } from '../donutservice.service';
import { Donut, DonutDetail } from '../interfaces/donut';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donut-view',
  templateUrl: './donut-view.component.html',
  styleUrls: ['./donut-view.component.css']
})
export class DonutViewComponent implements OnInit {
  thisDonut$:Observable<DonutDetail>;
  constructor(private route: ActivatedRoute, private service: DonutServiceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.thisDonut$ = this.service.getDonutStuff(Number (id));

  }

}

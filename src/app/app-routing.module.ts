import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevsComponent } from './devs/devs.component';
import { DonutViewComponent } from './donut-view/donut-view.component';
import { DonutsComponent } from './donuts/donuts.component';

const routes: Routes = [
  {path: 'devs', component: DevsComponent},
  {path: 'donuts', component: DonutsComponent},
  {path: 'donut-view/:id', component: DonutViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

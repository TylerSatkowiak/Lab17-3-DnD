import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevsComponent } from './devs/devs.component';
import { DonutsComponent } from './donuts/donuts.component';

const routes: Routes = [
  {path: 'devs', component: DevsComponent},
  {path: 'donuts', component: DonutsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

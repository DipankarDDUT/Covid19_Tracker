import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatewiseComponent } from './statewise/statewise.component';


const routes: Routes = [
  { path: '', redirectTo:"./dashboard/dashboard.component", pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'statewise',component:StatewiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

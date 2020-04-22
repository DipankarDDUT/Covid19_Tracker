import { Component, OnInit } from '@angular/core';
// ----
import { CovidrequestService } from '../covidrequest.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard2: any = [];
  constructor(private cr:CovidrequestService ){

  }
  ngOnInit(){

    this.dashboard2=this.cr.getDashboard();
    this.cr.getDashboard().subscribe((data: any[])=>{
      console.log(data);
      this.dashboard2 = data;
    }) 
    // this.cr.getDashboard()
    // .subscribe(data => {
    //   for (const d of (data as any)) {
    //     this.dashboard2.push({
    //       date: d.date,
    //       dailyconfirmed: d. dailyconfirmed,
    //       dailyrecovered: d.dailyrecovered,
    //       dailydeceased: d.dailydeceased
  
    //     });
    //   }
    // });
  }
//   getTimeSeries() {
//     this.cr.getDashboard()
//       .subscribe(data => {
//         for (const d of (data as any)) {
//           this.dashboard2.push({
//             date: d.date,
//             dailyconfirmed: d. dailyconfirmed,
//             dailyrecovered: d.dailyrecovered,
// 			      dailydeceased: d.dailydeceased
		
//           });
//         }
//       });
//   }
 }

import { Component,OnInit } from '@angular/core';
import { CovidrequestService } from './covidrequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // dashboard2: any = [];
  // constructor(private cr:CovidrequestService ){

  // }
  ngOnInit(){

    // this.dashboard2=this.cr.getDashboard();
  }
  // getTimeSeries() {
  //   this.cr.getDashboard()
  //     .subscribe(data => {
  //       for (const d of (data as any)) {
  //         this.dashboard2.push({
  //           date: d.date,
  //           dailyconfirmed: d. dailyconfirmed,
  //           dailyrecovered: d.dailyrecovered,
	// 		      dailydeceased: d.dailydeceased
		
  //         });
  //         console.log(this.dashboard2);
  //       }
  //     });
  // }
  
}

			// "totalconfirmed": "1",
			// "totaldeceased": "0",
			// "totalrecovered": "0"

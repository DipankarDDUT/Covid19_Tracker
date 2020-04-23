import { Component, OnInit } from '@angular/core';
import { CovidrequestService } from '../covidrequest.service';

@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent implements OnInit {
  state: any = [];
  constructor(private cr:CovidrequestService ){

  }
  ngOnInit(){

    this.state=this.cr.getDashboard();
    this.cr.getStatewise().subscribe((data: any[])=>{
      console.log(data);
      this.state = data;
    })

  }

 
}

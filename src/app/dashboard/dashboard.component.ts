import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
 
})
export class DashboardComponent implements OnInit {
name:string= "Pedro"
  constructor() { }

  ngOnInit() {
  }

}

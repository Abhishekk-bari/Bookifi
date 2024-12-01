import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrl: './dash-home.component.css'
})
export class DashHomeComponent implements OnInit {

  currentDate: Date;
  ngOnInit(): void {
    this.updateCurrentDate()
  }
  constructor(private router: Router) {
    this.currentDate = new Date();
  }
  updateCurrentDate():void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

}


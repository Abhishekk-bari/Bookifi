import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  

  currentDate: Date;
  ngOnInit(): void {
    this.updateCurrentDate()
  }
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private router: Router) {
    this.currentDate = new Date();
  }
  updateCurrentDate():void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
  

  logout() {
    this.router.navigate(['/']); // Redirect to the homepage
  }
}




  

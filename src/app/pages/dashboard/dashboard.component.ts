import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private router: Router) {
    
  }
  

  logout() {
    this.router.navigate(['/']); // Redirect to the homepage
  }
}




  

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correct spelling: 'styleUrls'
})
export class AppComponent {
  title = 'site';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update the condition to check for multiple routes
        this.showNavbar = !['/dashboard', '/dashboard/list'].includes(event.url);
      }
    });
  }

  isDashboard(): boolean {
    // This function can be simplified if needed
    return this.router.url.startsWith('/dashboard');
  }
}

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
iscontact(): any {
throw new Error('Method not implemented.');
}

  title = 'site';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !['/dashboard'].includes(event.url);
      }
    });
  }

  isDashboard(): boolean {
    return this.router.url === '/dashboard';
  }
}

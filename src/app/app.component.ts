import { Component } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private router: Router) {}

  isDashboard(): boolean {
    return this.router.url === '/dashboard';
  }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Standalone flag
  imports: [HttpClientModule, RouterModule, NotificationComponent, NavbarComponent, CommonModule] // Import standalone component here
})
export class AppComponent {
  showNavbar = true;

  constructor(public router: Router){

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide navbar for login and signup routes
        this.showNavbar = !(event.url === '/login' || event.url === '/signup');
      }
    });
  }
  }

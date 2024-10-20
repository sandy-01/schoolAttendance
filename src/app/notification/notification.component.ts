import { Component, Injector, OnInit } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' | 'warning' | null = null;
  showNotification = false;

  constructor(public baseService: BaseService, private injector: Injector) {

  }

  ngOnInit(): void {
     // Subscribe to notifications
     this.baseService.notification$.subscribe((notification) => {
      this.notificationMessage = notification.message;
      this.notificationType = notification.type;
      this.showNotification = true;

      // Hide notification after 3 seconds
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    });
  }

  }


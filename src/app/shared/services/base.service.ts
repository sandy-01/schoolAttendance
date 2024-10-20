import { User } from './../model/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, shareReplay, Subject, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/nest';
  listapi = "http://localhost:3000/residency"

  private notificationSubject = new Subject<Notification>();

  // Observable for other components to subscribe to
  notification$ = this.notificationSubject.asObservable();

    // Method to trigger success notifications
    showSuccess(message: string) {
      this.notificationSubject.next({ message, type: 'success' });
    }

    showError(message: string) {
      this.notificationSubject.next({ message, type: 'error' });
    }

    getUsers(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }

    getResidencyList(): Observable<any> {
      return this.http.get<any>(this.listapi)
    }

    private cachedData$: Observable<any> | null = null;

    getCachedData(): Observable<any> {
      if (!this.cachedData$) {
        this.cachedData$ = this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
          .pipe(
            tap(() => console.log('Fetching data from API...')), // Logs when API is called
            shareReplay(1) // Caches the data and replays it to future subscribers
          );
      }
      return this.cachedData$;
    }


}

interface Notification {
  message: string;
  type: 'success' | 'error' | 'warning';
}

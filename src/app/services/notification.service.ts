import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly URL = `${environment.apiUrl}/notification`;

  constructor(private http: HttpClient) {}

  toggleNotification(notificationId: string): Observable<any> {
    return this.http.patch(`${this.URL}/${notificationId}/toggle`, undefined);
  }

  getNotificationsForUser(username: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.URL}/${username}`);
  }
}
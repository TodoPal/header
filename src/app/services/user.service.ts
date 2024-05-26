import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

declare const System: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private cookieService: CookieService) {}

  async getUser(): Promise<string> {
    const storeEvents = await System.import('@TodoPal/utils');
    return storeEvents.getUsername(this.cookieService.get('jwtToken'));
  }
}

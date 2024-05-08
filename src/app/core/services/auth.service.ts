import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string = 'fake token';

  getToken(): string {
    return this.token;
  }
}

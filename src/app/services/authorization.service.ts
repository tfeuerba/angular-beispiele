import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  isUserAuthenticated(): Observable<boolean> {
    return of(true);
  }
}

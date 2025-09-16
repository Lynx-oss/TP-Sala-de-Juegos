import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoLogeado {
  private email : string = '';
  private isAuthenticated: boolean = false;

  setEmail(email: string) {
    this.email = email;
    this.isAuthenticated = true;
  }
  
  getEmail(): string {
    return this.email;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.email='';
    this.isAuthenticated = false;
  }
  
}

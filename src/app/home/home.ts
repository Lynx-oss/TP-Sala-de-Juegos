import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoLogeado } from '../service/info-logeado';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  email: string = '';
  isLoggedIn: boolean = false;


  constructor(private InfoLogeado: InfoLogeado) {
    this.email = this.InfoLogeado.getEmail();
    this.isLoggedIn = this.InfoLogeado.isLoggedIn();
  }


  logout() {
    this.InfoLogeado.logout();

}
}

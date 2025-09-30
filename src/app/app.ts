import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Chat } from './chat/chat';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Chat ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mostrarChat = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarChat = !(event.url.includes('/login') || event.url.includes('/registro'));
      }
    });
  }
}

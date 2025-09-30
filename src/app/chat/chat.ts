import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SupabaseServices } from '../service/supabase-services';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [NgFor, FormsModule, DatePipe ],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat implements OnInit{
  mensajes: any[] = [];
  nuevoMensaje: string = '';
  userEmail: string = '';
  private suscripcion: Subscription | null = null;
  

  constructor(private supabaseService: SupabaseServices, private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email') || '';

    this.supabaseService.getMensajes().subscribe(data => {
      this.mensajes = data;
    })

    this.supabaseService.listenMensajes((msg) => {
      this.mensajes.push(msg);
      this.cdr.detectChanges();
    })
  }

  enviarMensaje(): void {
    if (!this.nuevoMensaje.trim()) return;

    this.supabaseService.addMensaje(this.userEmail, this.nuevoMensaje).subscribe(() => {
      this.nuevoMensaje = '';
    });
  }


}

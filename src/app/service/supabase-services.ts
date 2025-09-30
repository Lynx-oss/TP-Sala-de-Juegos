import { Injectable } from '@angular/core';
import { AuthResponse, createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class SupabaseServices {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://qbqgbqfuitirbcalomdo.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicWdicWZ1aXRpcmJjYWxvbWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4OTg0ODUsImV4cCI6MjA3MzQ3NDQ4NX0.s8KdFzwfF3CzA4YsjIwlttETeozUbp_DniIE4hft-RE'
    )
  } 

    getUsuarios(): Observable<any> {
      return from (
        this.supabase.from('usuarios').select('*')
        .then(({ data, error }) => {
          if (error) {
            throw error;
          }
          return data;
        })
      );
    }

    addUsuario(nombre: string, email: string): Observable<any> {
  return from(
    this.supabase
      .from('usuarios')
      .insert([{ nombre, email }])
      .then(({ data, error }) => {
        if (error) throw error;
        return data;
      })
  );
}
      

    login( email: string, password: string): Observable<any> {
      return from (
        this.supabase.auth.signInWithPassword({ email, password})
        .then(({ data, error}) =>{
          if(error) throw error;
          return data.user;
        })
      )
    }

    register( email: string, password: string): Observable<AuthResponse> {
      return from (
        this.supabase.auth.signUp({ email, password})
      );
    }

    registrarLog(email: string): Observable<any> {    
      return from(
        this.supabase.from('user_logs').insert([{ email, fecha_ingreso : new Date().toISOString() }])
        .then(({ data, error }) => {
          if (error) throw error;
          return data;
        })
      );
    }

    getMensajes(): Observable<any> {
      return from(
        this.supabase.from('mensajes').select('*').order('fecha', { ascending: true }).then(({ data, error }) => {
          if (error) {
            throw error;
          }
          return data;
        }
      )
      );
    }

    addMensaje(email: string, contenido: string): Observable<any> {
      return from (
        this.supabase.from('mensajes')
        .insert([{email, contenido}])
        .then(({ data, error}) => {
          if (error) throw error;
          return data;
        })
      )
    }


    listenMensajes(callback: (payload: any) => void){ this.supabase
      .channel('mensajes-channel')
      .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'mensajes'}, payload => {
        callback(payload.new);
      })
      .subscribe();
    }
    














  }

  
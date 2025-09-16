import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InfoLogeado } from '../service/info-logeado';
import { SupabaseServices } from '../service/supabase-services';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  email = '';
  password = '';

  constructor(
    private router: Router, 
    private infoLogeado: InfoLogeado, 
    private supabaseService: SupabaseServices
  ) {}

  registro() {
    // Validar campos vacíos
    if (this.email === '' || this.password === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos antes de registrarte.',
      });
      return;
    }

    // Validar longitud mínima de contraseña
    if (this.password.length < 6) {
      Swal.fire({
        icon: 'warning',
        title: 'Contraseña muy corta',
        text: 'La contraseña debe tener al menos 6 caracteres.',
      });
      return;
    }

    // Registrar usuario en Supabase
    this.supabaseService.register(this.email, this.password).subscribe({
      next: (res) => {
        if (res.error) {
          Swal.fire({
            icon: 'error',
            title: 'Error en el registro',
            text: res.error.message || 'El usuario ya se encuentra registrado.',
          });
        } else {
          // Registro exitoso: registrar log y auto-login
          this.supabaseService.registrarLog(this.email).subscribe({
            next: () => {
              console.log('Log de nuevo usuario registrado exitosamente');
            },
            error: (err) => {
              console.error('Error al registrar log:', err);
            }
          });

          this.infoLogeado.setEmail(this.email);
          
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Tu cuenta ha sido creada correctamente!',
          }).then(() => {
            this.router.navigate(['/home']);
          });
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error de conexión',
          text: 'Hubo un problema al conectar con el servidor',
        });
      }
    });
  }
}

  




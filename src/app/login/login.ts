import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';
import { InfoLogeado } from '../service/info-logeado';
import { SupabaseServices } from '../service/supabase-services';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class login {
  email = '';
  password = '';
  
  
  constructor(private router: Router, private infoLogeado: InfoLogeado, private supabaseService: SupabaseServices) {
    
  }

  login() {
    if(this.email === '' || this.password === ''){ 
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos antes de iniciar sesión.',
      });
      return;
    }

    this.supabaseService.login(this.email, this.password).subscribe({
      next: (res) => {
        if (res.error) {
          Swal.fire({
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: res.error.message,
          });
        } else {
          this.supabaseService.registrarLog(this.email).subscribe({
            next: () => {
              console.log('Log de usuario registrado exitosamente');
            },
            error: (err) => {
              console.error('Error al registrar log:', err);
            }
          });

          this.infoLogeado.setEmail(this.email);
          
          Swal.fire({
            icon: 'success',
            title: 'Login exitoso',
            text: '¡Has iniciado sesión correctamente!',
          }).then(() => {
            this.router.navigate(['/home']);
          });
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al conectar con el servidor',
        });
      }
    });
  }

  testUser(){
    this.email ='test@test.com'
    this.password ='123456'
  }

  testAdmin(){
    this.email = 'admin@test.com'
    this.password = '123456'
  }



  

  goRegistro(){
    this.router.navigate(['/registro']);
  }
}
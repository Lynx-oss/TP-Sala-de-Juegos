import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class login {
  email = '';
  password = '';
  
  
  constructor(private router: Router) {}

  login() {
    if(this.email === '' || this.password === ''){
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos antes de iniciar sesión.',
      });
      return;
    }

    if(this.email === 'testeo' && this.password === '123'){
      Swal.fire({
        icon: 'success',
        title: 'Login exitoso',
        text: '¡Has iniciado sesión correctamente!',
      }).then(() => {
        this.router.navigate(['/home']);
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.',
      });

    }
    
  }


}

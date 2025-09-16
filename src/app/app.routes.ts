import { Routes } from '@angular/router';
import { login } from './login/login';
import { Home } from './home/home';
import { QuienSoy } from './quien-soy/quien-soy';
import { Registro } from './registro/registro';
import { Juegos } from './juegos/juegos';

export const routes: Routes = [
   { path: 'login', component: login},
   { path: 'registro', component: Registro},
   { path: 'Juegos', component: Juegos},
   { path: 'home', component: Home},
   { path: 'quien-soy', component: QuienSoy},
   { path: '', redirectTo: 'login', pathMatch: 'full' }

];

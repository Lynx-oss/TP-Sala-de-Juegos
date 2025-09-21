import { Routes } from '@angular/router';


export const routes: Routes = [
   { path: 'login', loadComponent: () => import('./login/login').then(m => m.login) },
   { path: 'registro', loadComponent: () => import('./registro/registro').then(m => m.Registro) },
   { path: 'Juegos', loadComponent: () => import('./juegos/juegos').then(m => m.Juegos) },
   { path: 'juegos/ahorcado', loadComponent: () => import('./juegos/ahorcado/ahorcado').then(m => m.Ahorcado) },
   { path: 'como-jugar', loadComponent: () => import('./juegos/como-jugar/como-jugar').then(m => m.ComoJugar) },
   { path: 'juegos/mayor-menor', loadComponent: () => import('./juegos/mayor-menor/mayor-menor').then(m => m.MayorMenor) },
   { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
   { path: 'quien-soy', loadComponent: () => import('./quien-soy/quien-soy').then(m => m.QuienSoy) },
   { path: '', redirectTo: 'login', pathMatch: 'full' }

];

import { Routes } from '@angular/router';

export const juegosRoutes: Routes = [
     {
    path: '',
    loadComponent: () => import('./juegos').then(c => c.Juegos)
  },
  {
    path: 'ahorcado',
    loadComponent: () => import('./ahorcado/ahorcado').then(c => c.Ahorcado)
  },
  {
    path: 'mayor-menor',
    loadComponent: () => import('./mayor-menor/mayor-menor').then(c => c.MayorMenor)
  },
  {
    path: 'como-jugar',
    loadComponent: () => import('./como-jugar/como-jugar').then(c => c.ComoJugar)
  }
]
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juegos',
  imports: [MatCardModule, RouterLink],
  templateUrl: './juegos.html',
  styleUrl: './juegos.css'
})
export class Juegos {

}

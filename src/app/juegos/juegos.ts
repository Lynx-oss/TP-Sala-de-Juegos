import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Popup } from '../popup/popup';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-juegos',
  imports: [MatCardModule, RouterLink],
  templateUrl: './juegos.html',
  styleUrl: './juegos.css'
})
export class Juegos {
  constructor(private dialog: MatDialog){}

    openDialog(titulo: String, descripcion: String){ {
      this.dialog.open(Popup, {
        width: '250px',
        data: {titulo, descripcion}
      });
    }
  }

}

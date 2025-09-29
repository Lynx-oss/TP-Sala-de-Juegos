import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-popup',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './popup.html',
  styleUrl: './popup.css'
})
export class Popup {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}


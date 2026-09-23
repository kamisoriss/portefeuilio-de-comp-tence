import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acceuil } from './acceuil/acceuil';
import {Header} from './header/header';
import { Projets } from './projets/projets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Acceuil, Header, Projets],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'portfolio-sio';
}

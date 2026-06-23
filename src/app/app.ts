import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acceuil } from './acceuil/acceuil';
import { Projets } from './projets/projets';

@Component({
  selector: 'app-root',
  standalone: true,
  // C'est ici que tu déclares que app a le droit d'utiliser tes balises
  imports: [CommonModule, Acceuil, Projets],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'portfolio-sio';
}

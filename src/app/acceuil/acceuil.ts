import {Component, inject} from '@angular/core';
import {Gestionfichier} from '../service/gestionfichier';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css',
})
export class Acceuil {
  private gestionfichierService = inject(Gestionfichier);
  telechargementfichier(event: Event, url: string,nomfichier: string) {
    event.preventDefault();
    this.gestionfichierService.telechargerfichier(url,nomfichier);
  }
}

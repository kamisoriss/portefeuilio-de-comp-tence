import { Component, inject } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Gestionfichier} from '../service/gestionfichier';

@Component({
  selector: 'app-projets',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {
  private gestionfichierService = inject(Gestionfichier);
  telechargementfichier(event: Event, url: string,nomfichier: string) {
    event.preventDefault();
    this.gestionfichierService.telechargerfichier(url,nomfichier);
  }
}

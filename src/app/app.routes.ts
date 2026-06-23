import { Routes } from '@angular/router';
// Attention à bien importer tes composants avec leur nom exact (souvent avec le suffixe Component)
import { Acceuil } from './acceuil/acceuil';
import { Projets } from './projets/projets';

export const routes: Routes = [
  { path: '', component: Acceuil }, // La page par défaut
  { path: 'projets', component: Projets }, // La page /projets
];

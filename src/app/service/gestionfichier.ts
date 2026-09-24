import { Service } from '@angular/core';

@Service()
export class Gestionfichier {
  telechargerfichier(url: string,nomfichiercv:string):void
  {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const lientelechargement = document.createElement('a');
        lientelechargement.href = url;
        lientelechargement.download = nomfichiercv;
        document.body.appendChild(lientelechargement);
        lientelechargement.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(lientelechargement);
      })
      .catch(error => console.error('erreur de téléchargement',error));
  }
}

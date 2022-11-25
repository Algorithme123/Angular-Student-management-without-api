import { Injectable } from '@angular/core';
import { AnneeUniversitaire } from '../models/AnneeUniversitaire';

@Injectable({
  providedIn: 'root'
})
export class AnneeUniversitaireService {

  constructor() { }

  listeAnneeUniversiatire : AnneeUniversitaire[] = [

    {
      id : 1,
      code: "2020 - 2021",
    },
    {
      id : 2,
      code: "2021 - 2022",
    },

    {
      id : 1,
      code: "2022 - 2023",
    }





  ]

  ajouterAnnneUniversitaire(anneeUniversitaire : AnneeUniversitaire) : void {

      this.listeAnneeUniversiatire.push(anneeUniversitaire);
  }

  afficherAnneeUniversitaire(){
    return this.listeAnneeUniversiatire;
  }
}

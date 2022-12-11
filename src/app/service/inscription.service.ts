import { Injectable } from '@angular/core';
import { Inscription } from '../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor() { }

  inscriptionListe : Inscription[] = [

    {
      etudiant: {
        id : 1,
        nom: "CEH",
        prenom: " Ethical",
        filiere :  {
          'id': 1,
          "code" : "GL",
          'libelle' :  "Genie Logiciel",

        },
        status : true
    },
    filiere :  {
      id : 1,
      code : "GL",
      libelle : "Genie Logiciel",
     },
     anneeUniversitaire :     {
      id : 1,
      code: "2020 - 2021",
    },
    }

  ];



  ajouterInscription(inscription:Inscription):void{

    this.inscriptionListe.push(inscription)

  }


  afficherInscription(){

      return this.inscriptionListe

  }
}

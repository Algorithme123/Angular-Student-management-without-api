import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor() { }


  etudiantListe: Etudiant[] = [
    {
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
    {
      id : 2,
      nom: "eJPT",
      prenom: "Black",
      filiere : {
        'id': 2,
        "code" : "CS",
        'libelle' :  "CybertSécurité",

      },
      status : false

    },
  ];



  ajouterEtudiant(etudiant:Etudiant):void{

    this.etudiantListe.push(etudiant)

  }


  afficherEtudiants(){

      return this.etudiantListe

  }
}

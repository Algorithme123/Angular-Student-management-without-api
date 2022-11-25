import { Injectable } from '@angular/core';
import { Filiere } from '../models/filiere';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor() {

   }


  filiereListe : Filiere[]=[
    {
     id : 1,
     code : "GL",
     libelle : "Genie Logiciel",
    },
    {
      id : 2,
      code : "CS",
      libelle : "CybertSécurité",
     },
     {
      id : 3,
      code : "RSS",
      libelle : "Reseaux Systeme et Securité",
     },
  ]

  ajouterFiliere(filiere:Filiere):void{

    this.filiereListe.push( filiere)

  }


  afficherFiliere(){

      return this.filiereListe

  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';

import { AnneeUniversitaireService } from '../service/annee-universitaire.service';
import { AnneeUniversitaire } from '../models/AnneeUniversitaire';

@Component({
  selector: 'app-anne-universitaire',
  templateUrl: './anne-universitaire.component.html',
  styleUrls: ['./anne-universitaire.component.css']
})
export class AnneUniversitaireComponent implements OnInit {

  constructor( private anneeUniversitaireService : AnneeUniversitaireService) {

    this.anneeUniversitaireService = anneeUniversitaireService;
   }


  ngOnInit(): void {

    this.afficherListeAnnneUniversitaire()

  }

  afficherFormulaire : boolean = false;

  fonctionModifierVariable(){
    this.afficherFormulaire= !this.afficherFormulaire;
  }


newListeUniversitaire : AnneeUniversitaire[] =[]

  afficherListeAnnneUniversitaire (){


    this.newListeUniversitaire = this.anneeUniversitaireService.afficherAnneeUniversitaire();

  }


  formulaireAnneeScolaire = new FormGroup ({

    'code': new FormControl('',Validators.required),
  })

  anneeUniversitaire : AnneeUniversitaire = new AnneeUniversitaire();

  sauvegardeAnne(){
    this.anneeUniversitaireService.ajouterAnnneUniversitaire(this.anneeUniversitaire);
    console.log(this.anneeUniversitaire)
  }





}

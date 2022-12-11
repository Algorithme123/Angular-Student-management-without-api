import { Component, OnInit } from '@angular/core';
import { AnneeUniversitaire } from '../models/AnneeUniversitaire';
import { EtudiantService } from '../service/etudiant.service';
import { FiliereService } from '../service/filiere.service';
import { Inscription } from '../models/inscription';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../service/inscription.service';
import { Etudiant } from '../models/etudiant';
import { Filiere } from '../models/filiere';
import { AnneeUniversitaireService } from '../service/annee-universitaire.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private etudiantService : EtudiantService, private etudiantFiliereService : FiliereService, private anneeUniversitaireService: AnneeUniversitaireService,private inscriptionservice : InscriptionService) {

    this.etudiantService =etudiantService;
    this.etudiantFiliereService = etudiantFiliereService;
    this.anneeUniversitaireService = anneeUniversitaireService;
    this.inscriptionservice = inscriptionservice;
   }

  ngOnInit(): void {
    this.afficherEtudiant();
    this.afficherListeInscription();
    this.afficherFiliere();
    this.afficherAnneeUniversitaire();


  }

  errorMessage :  any;

  successMessage : any;

  afficherFormulaire : boolean = false;
  status : boolean= true;

  inscription : Inscription = new Inscription();
  fonctionModifierVariable(){
    this.afficherFormulaire= !this.afficherFormulaire;
  }

  changerStatus(inscription : any){
    // console.log(id);
    this.status=!this.status;
    console.log("bouton changer");
    console.log(this.status);
  }


  formulaireAjoutInscription = new FormGroup ({

    'etudiant': new FormControl('',Validators.required),
    'filiere' : new FormControl('', Validators.required),
    'anneeUniversitaire' : new FormControl('', Validators.required)
  })

  sauvegardeInscription(){

    if(this.formulaireAjoutInscription.valid){
      this.inscriptionservice.ajouterInscription(this.inscription);
      console.log(this.inscription);


      this.successMessage = "Inscription successfully";

    }else{
      this.errorMessage = "Erreur d'Inscription";

    }

  }

  newInscriptionListe : Inscription[] =[]

afficherListeInscription (){


  this.newInscriptionListe = this.inscriptionservice.afficherInscription();


}

listEtudiant : Etudiant[] =[]

afficherEtudiant(){

  this.listEtudiant = this.etudiantService.afficherEtudiants();

}


listFiliere : Filiere[] =[]

afficherFiliere(){

  this.listFiliere = this.etudiantFiliereService.afficherFiliere();

}



listAnneeUniversitaire : AnneeUniversitaire[] =[]

afficherAnneeUniversitaire(){

  this.listAnneeUniversitaire = this.anneeUniversitaireService.afficherAnneeUniversitaire();

}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Filiere } from '../models/filiere';
import { FiliereService } from '../service/filiere.service';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  constructor(private filiereService: FiliereService) {

   }


   errorMessage :  any;

   successMessage : any;

  ngOnInit(): void {
    this.afficherListeFiliere()
  }


afficherFormulaire : boolean = false;

filiere : Filiere = new Filiere();

fonctionModifierVariable(){
  return this.afficherFormulaire= !this.afficherFormulaire;
}


formulaireAjoutFiliere = new FormGroup ({
  'code': new FormControl('',Validators.required),
  'libelle' : new FormControl('', Validators.required),

});

sauvegardeFiliere(){

  if(this.formulaireAjoutFiliere.valid){

  console.log(this.filiere);
  this.filiereService.ajouterFiliere(this.filiere);
  this.successMessage = "Filiere Enregister avec Succes";

}else{
  this.errorMessage = "Erreur d'Enregistrement";

}
}


newFiliereListe : Filiere[] = []


afficherListeFiliere (){

  this.newFiliereListe = this.filiereService.afficherFiliere();

}



}

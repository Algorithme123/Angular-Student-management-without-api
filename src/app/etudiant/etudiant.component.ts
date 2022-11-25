import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Etudiant } from '../models/etudiant';
import { EtudiantService } from '../service/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor( private etudiantService : EtudiantService) {

    this.etudiantService =etudiantService;
   }



  ngOnInit(): void {
    this.afficherListeEtudiant();
  }

  afficherFormulaire : boolean = false;
  status : boolean= true;

  etudiant : Etudiant = new Etudiant();


  fonctionModifierVariable(){
    this.afficherFormulaire= !this.afficherFormulaire;
  }

  changerStatus(etudiant : any){
    // console.log(id);
    this.status=!this.status;
    etudiant.status = !etudiant.status;
    console.log("bouton changer");
    console.log(this.status);
  }


  activerEtudiant(etudiant :any){
    etudiant.status =true;


  }
  desactiverEtudiant(etudiant :any){
    etudiant.status =false;


  }

  formulaireAjoutEtudiant = new FormGroup ({

    'nom': new FormControl('',Validators.required),
    'prenom' : new FormControl('', Validators.required),
    'filiere' : new FormControl('', Validators.required)
  })

sauvegardeEtudiant(){
  this.etudiantService.ajouterEtudiant(this.etudiant);
  console.log(this.etudiant)
}

newEtudiantListe : Etudiant[] =[]

afficherListeEtudiant (){


  this.newEtudiantListe = this.etudiantService.afficherEtudiants();


}

}

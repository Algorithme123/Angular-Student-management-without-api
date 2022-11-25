import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FiliereComponent } from './filiere/filiere.component';
import { AnneeUniversitaire } from './models/AnneeUniversitaire';
import { AnneUniversitaireComponent } from './anne-universitaire/anne-universitaire.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: '**',redirectTo: 'tableau-de-bord', pathMatch: 'full'},
  {path: 'etudiant',component : EtudiantComponent},



  {path: 'filiere',component : FiliereComponent},
  {path: 'anneeScolaire',component : AnneUniversitaireComponent},
  {path: 'inscription',component : InscriptionComponent}
  // {path: 'anneeUniv',component : AnneeUniversitaire}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

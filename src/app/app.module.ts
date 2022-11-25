import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { RouterModule } from '@angular/router';
import { FiliereComponent } from './filiere/filiere.component';
import { FiliereService } from './service/filiere.service';
import { AnneUniversitaireComponent } from './anne-universitaire/anne-universitaire.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    TableauDeBordComponent,
    FiliereComponent,
    AnneUniversitaireComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])

  ],
  providers: [
    FiliereService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

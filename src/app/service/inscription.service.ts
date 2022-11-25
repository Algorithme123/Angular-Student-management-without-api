import { Injectable } from '@angular/core';
import { Inscription } from '../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor() { }

  inscriptionListe : Inscription[] = []
}

import { Filiere } from './filiere';
export class Etudiant{

  id! : number;
  nom! :  string ;
  prenom!: string;
  filiere! : Filiere;
  status!: boolean;

  public constructor(){
    this.id=0;
    this.nom= '';
    this.prenom='';
    this.filiere= new Filiere();
    this.status = false

  }


}

import { Compte } from './Compte';
import { Client } from './Client';

export class ComptePayant extends Compte {
    constructor(proprietaire: Client, soldeInitial: number = 0) {
        super(proprietaire, soldeInitial);
    }
    public toString():string{
        return super.toString();
    }
    public retirer(mt:number){
        super.retirer(mt);
    }
    public verser(mt:number){
        super.verser(mt);
    }
}
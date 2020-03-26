import { Compte } from './Compte';
import { Client } from './Client';

export class CompteEparagne extends Compte {
    private taux: number;

    constructor(proprietaire: Client, soldeInitial: number = 0) {
        super(proprietaire, soldeInitial);
    }

    public getTaux() {
        return this.taux;
    }
    public setTaux(taux: number) {
        this.taux = taux;
    }

    public calculateInterets() {

    }
    public toString(): string {
        return super.toString();
    }
    
}
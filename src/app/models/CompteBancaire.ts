import { Compte } from './Compte';
import { Client } from './Client';

export class CompteBancaire extends Compte {
    constructor(proprietaire: Client, soldeInitial: number = 0) {
        super(proprietaire, soldeInitial);
    }
    public toString(): string {
        return super.toString();
    }
}
import { Client } from './Client';

export class Compte {
    public static nbComptes: number = 0;
    protected decouvert: number;
    protected proprietaire: Client;
    protected solde: number;
    private code: number;

    constructor(proprietaire: Client, soldeInitial: number = 0) {

        this.proprietaire = proprietaire;
        this.solde = soldeInitial;
        this.code = Compte.nbComptes++;

    }

    public verser(mt: number) {
        this.solde += mt;
    }
    public retirer(mt: number) {
        this.solde -= mt;
    }




    public toString(): string {
        return "\nCode: " + this.code + "\nClient: " + this.proprietaire.toString() + "\nDecouvert: " + this.decouvert + "\nSolde: " + this.solde;
    }


    public getProprietaire(): Client {
        return this.proprietaire;
    }

    public getCode(): number {
        return this.code;
    }

    public getDecouvert(): number {
        return this.decouvert;
    }
    public getSolde(): number {
        return this.solde;
    }

    public setSolde(v: number) {
        this.solde = v;
    }

    public setDecouvert(v: number) {
        this.decouvert = v;
    }

}
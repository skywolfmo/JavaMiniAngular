import { Client } from './Client';
import { Compte } from './Compte';

export class Agence {
    id:string;
    private clientCourant: Client;
    private compteCourant: Compte;
    private lesClients: Client[];
    private lesComptes: Compte[];
    private code: number;
    private nomAgence: string;

    constructor(code: number, nomAgence: string) {

        this.code = code;
        this.nomAgence = nomAgence;

    }

    public toString(): string {
        return "Code: " + this.code + "\nNom Agence: " + this.nomAgence + this.lesComptes.forEach(compte => {
            compte.toString();
        });
    }

    public getClients() {
        return this.lesClients;
    }
    public getComptes(): Compte[] {
        return this.lesComptes;
    }

    public ajoutClFient(client: Client) {
        this.lesClients.push(client);
    }
    public ajoutCompte(compte: Compte) {
        this.lesComptes.push(compte);
    }

    public getCompte(code: number): Compte {
        this.lesComptes.forEach(compte => {
            if (compte.getCode() == code) {
                return compte;
            }
        });
        return null;
    }

    public getClient(matricule: number): Client {
        this.lesClients.forEach(client => {
            if (client.getMatricule() == matricule) {
                return client;
            }
        });
        return null;
    }

    public getNomAgence(): string {
        return this.nomAgence;

    }
    public setNomAgence(nomAgence: string) {
        this.nomAgence = nomAgence;
    }




}
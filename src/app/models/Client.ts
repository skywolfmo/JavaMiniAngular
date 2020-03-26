export class Client {
    public static nbClients: number = 0;
    private cin: string;
    private matricule: number;
    private nom: string;
    private prenom: string;


    constructor(cin: string, nom: string, prenom: string) {

        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.matricule = Client.nbClients++;

    }

    public toString(): string {
        return "Matricule: " + this.matricule + "\nCin: " + this.cin + "\nNom: " + this.nom + "\nPrenom: " + this.prenom;
    }
    public getCin(): string {
        return this.cin;
    }

    public getMatricule(): number {
        return this.matricule;
    }

    public getPrenom(): string {
        return this.prenom;
    }
    public getNom(): string {
        return this.nom;
    }

    public setCin(v: string) {
        this.cin = v;
    }

    public setNom(v: string) {
        this.nom = v;
    }

    public setPrenom(v: string) {
        this.prenom = v;
    }



}
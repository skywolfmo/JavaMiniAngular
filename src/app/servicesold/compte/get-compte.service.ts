import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from 'src/app/models/Compte';

@Injectable({
  providedIn: 'root'
})
export class GetCompteService {
  serverIpPort: string = "server.com";
  url = 'http://' + this.serverIpPort + '/comptes/';
  constructor(private http: HttpClient) { }
  getCompte(id: string): Observable<Compte> {

    return this.http.get<Compte>(this.url + id);
  }

}



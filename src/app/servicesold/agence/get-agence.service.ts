import { Injectable } from '@angular/core';
import { Agence } from 'src/app/models/Agence';

@Injectable({
  providedIn: 'root'
})
export class GetAgenceService {

  serverIpPort: string = "server.com";
  url = 'http://' + this.serverIpPort + '/agences/';
  constructor(private http: HttpClient) { }

  getAgence(id: string): Observable<Agence> {

    return this.http.get<Agence>(this.url + id);
  }
}

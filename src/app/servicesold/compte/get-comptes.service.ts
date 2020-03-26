import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from 'src/app/models/Compte';

@Injectable({
  providedIn: 'root'
})
export class GetComptesService {
  serverIpPort: string = 'server.com';
  compteUrl = 'http://' + this.serverIpPort + '/clients';
  limitSt = ' ?_limit=';
  limit: 0;
  constructor(private http: HttpClient) { }
  getComptes(limit: any): Observable<Compte[]> {
    if (this.limit > 0) {
      this.compteUrl = this.compteUrl + this.limitSt + this.limit;
    }

    return this.http.get<Compte[]>(this.compteUrl);
  }

}



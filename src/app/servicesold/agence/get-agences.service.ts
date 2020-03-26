import { Injectable } from '@angular/core';
import { Agence } from 'src/app/models/Agence';

@Injectable({
  providedIn: 'root'
})
export class GetAgencesService {

  serverIpPort: string = 'server.com';
  clientUrl = 'http://' + this.serverIpPort + '/agences';
  limitSt = ' ?_limit=';
  limit: 0;
  constructor(private http: HttpClient) { }
  getAgences(limit: any): Observable<Agence[]> {
    if (this.limit > 0) {
      this.clientUrl = this.clientUrl + this.limitSt + this.limit;
    }

    return this.http.get<Agence[]>(this.clientUrl);
  }
}

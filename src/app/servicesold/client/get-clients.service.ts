import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';

@Injectable({
  providedIn: 'root'
})
export class GetClientsService {
  serverIpPort: string = 'server.com';
  clientUrl = 'http://' + this.serverIpPort + '/clients';
  limitSt = ' ?_limit=';
  limit: 0;
  constructor(private http: HttpClient) { }
  getClients(limit: any): Observable<Client[]> {
    if (this.limit > 0) {
      this.clientUrl = this.clientUrl + this.limitSt + this.limit;
    }

    return this.http.get<Client[]>(this.clientUrl);
  }

}

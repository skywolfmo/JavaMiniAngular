import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';

@Injectable({
  providedIn: 'root'
})
export class GetClientService {
  serverIpPort: string = "server.com";
  url = 'http://' + this.serverIpPort + '/clients/';
  constructor(private http: HttpClient) { }

  getClient(id: string): Observable<Client> {

    return this.http.get<Client>(this.url + id);
  }

}






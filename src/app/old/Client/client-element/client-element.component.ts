import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-client-element',
  templateUrl: './client-element.component.html',
  styleUrls: ['./client-element.component.css']
})
export class ClientElementComponent implements OnInit {
  @Input() client: Client;
  constructor() { }

  ngOnInit(): void {
  }

}

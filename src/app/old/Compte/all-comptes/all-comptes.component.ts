import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/app/models/Compte';

@Component({
  selector: 'app-all-comptes',
  templateUrl: './all-comptes.component.html',
  styleUrls: ['./all-comptes.component.css']
})
export class AllComptesComponent implements OnInit {
@Input() compte: Compte;
  constructor() { }

  ngOnInit(): void {
  }

}

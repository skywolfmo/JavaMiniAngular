import { Component, OnInit, Input } from '@angular/core';
import { Agence } from 'src/app/models/Agence';

@Component({
  selector: 'app-all-agences',
  templateUrl: './all-agences.component.html',
  styleUrls: ['./all-agences.component.css']
})
export class AllAgencesComponent implements OnInit {
@Input() agence: Agence;
  constructor() { }

  ngOnInit(): void {
  }

}

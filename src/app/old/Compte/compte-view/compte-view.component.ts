import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/app/models/Compte';

@Component({
  selector: 'app-compte-view',
  templateUrl: './compte-view.component.html',
  styleUrls: ['./compte-view.component.css']
})
export class CompteViewComponent implements OnInit {
  @Input() comptes: Compte[];
  constructor() { }

  ngOnInit(): void {
  }

}

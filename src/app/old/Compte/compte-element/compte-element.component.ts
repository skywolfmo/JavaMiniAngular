import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/app/models/Compte';

@Component({
  selector: 'app-compte-element',
  templateUrl: './compte-element.component.html',
  styleUrls: ['./compte-element.component.css']
})
export class CompteElementComponent implements OnInit {
  @Input() compte: Compte;
  constructor() { }

  ngOnInit(): void {
  }

}

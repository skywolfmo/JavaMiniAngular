import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agence-view',
  templateUrl: './agence-view.component.html',
  styleUrls: ['./agence-view.component.css']
})
export class AgenceViewComponent implements OnInit {
  agence: any;
  constructor() { }

  ngOnInit(): void {
  }

}

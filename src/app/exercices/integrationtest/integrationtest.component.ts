import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrationtest',
  templateUrl: './integrationtest.component.html',
  styleUrls: ['./integrationtest.component.css']
})
export class IntegrationtestComponent implements OnInit {
  public isSolved = false;

  constructor() { }

  ngOnInit(): void {
  }

}

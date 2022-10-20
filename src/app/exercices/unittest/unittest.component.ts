import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unittest',
  templateUrl: './unittest.component.html',
  styleUrls: ['./unittest.component.css']
})
export class UnittestComponent implements OnInit {
  private language = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }
  
  public getLanguage(): string {
    return this.language;
  }

  public setLanguage(language: string): void {
    this.language = language;
  }
}

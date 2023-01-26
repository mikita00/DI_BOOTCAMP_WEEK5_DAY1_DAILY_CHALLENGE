import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements Oninit {
  constructor() {}

  ngOnInit(): void {
    this.http.get("https://swapi.dev/api/films").subscribe(
      films => console.log(films)
    );
  }
}

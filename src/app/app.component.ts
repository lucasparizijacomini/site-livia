import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isMenuHidden = true;
  linkwppSite: string;

  constructor() {
    this.linkwppSite =
      'https://wa.me/16993493657/?text=Olá, vim através do site e gostaria de mais informações.';
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}

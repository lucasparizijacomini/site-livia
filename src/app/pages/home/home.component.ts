import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  linkwppSite: string;
  arrayBeneficios: string[];

  constructor() {
    this.linkwppSite =
      'https://wa.me/16993493657/?text=Olá, vim através do site e gostaria de mais informações.';

    this.arrayBeneficios = [
      'APOSENTADORIAS',
      'AUXILIO DOENÇA',
      'APOSENTADORIA POR INVALIDEZ',
      'SALÁRIO MATERNIDADE',
      'PENSÃO POR MORTE',
      'BPC/LOAS',
      'PLANEJAMENTO PREVIDENCIARIO',
      'AUXÍLIO ACIDENTE',
      'AUXÍLIO RECLUSÃO',
    ];
  }

  returnLinkSite(beneficio: string): string {
    return `https://wa.me/16993493657/?text=Olá, vim através do site e gostaria de mais informações sobre ${beneficio}.`;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuSectionComponent } from '../menu-section/menu-section.component';
import { Piatto } from '../../models/Piatto';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'gnnz-menu',
  standalone: true,
  imports: [CommonModule, MenuSectionComponent, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  piatti: Piatto[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti') 
    .subscribe({
      next: (response) => console.log(response),
      //error: (err) => console.log(err),   //lo ignoriamo perchè in questo caso siamo sicuri dell'api e non lo stiamo gestendo
      //complete: () => console.log('completo!') // eliminato perchè nel caso di una chiamata api non ci serve
    });
  }

  antipastiItems = this.piatti.filter(x => x.category === 'antipasti');
  primiItems = this.piatti.filter(x => x.category === 'primi');
  dolciItems = this.piatti.filter(x => x.category === 'dolci');
}

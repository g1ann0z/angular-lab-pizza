import { Component, Input, OnChanges } from '@angular/core';
import { MenuSectionComponent } from '../menu-section/menu-section.component';
import { Piatto } from '../../models/Piatto';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gnnz-menu',
  standalone: true,
  imports: [CommonModule, MenuSectionComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnChanges {
  @Input() menu: Piatto[] = []

  piattiCategories: Piatto[][] = [];

  ngOnChanges() {

    console.log('aksjdlakdjlaskdjal')

    const categories = [...new Set(this.menu.map(x => x.category))];

    

    for (let category of categories) {
      this.piattiCategories.push(this.menu.filter(x => x.category === category))
    }

  }
}

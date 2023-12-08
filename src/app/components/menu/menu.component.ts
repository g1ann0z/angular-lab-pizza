import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuSectionComponent } from '../menu-section/menu-section.component';

@Component({
  selector: 'gnnz-menu',
  standalone: true,
  imports: [CommonModule, MenuSectionComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}

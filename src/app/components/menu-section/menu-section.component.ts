import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';


@Component({
  selector: 'gnnz-menu-section',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent {
  @Input() sectionTitle = '';


}

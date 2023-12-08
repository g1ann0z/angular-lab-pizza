import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { __importDefault } from 'tslib';
import { Piatto } from '../../models/Piatto';


@Component({
  selector: 'gnnz-menu-section',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent {
  @Input() sectionTitle = '';
  @Input() sectionMenuItems: Piatto[] = [];

}

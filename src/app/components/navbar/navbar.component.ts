import { Component} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'gnnz-navbar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  constructor(public apiService: ApiService){
    
  }
  
}

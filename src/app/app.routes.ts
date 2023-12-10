import { Routes } from '@angular/router';
import { PiattoDetailComponent } from './components/piatto-detail/piatto-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageMenuComponent } from './components/page-menu/page-menu.component';

export const routes: Routes = [
    { path: 'menu', component: PageMenuComponent},                  //caricamento principale del menu
    { path: 'menu/:piattoId', component: PiattoDetailComponent},      //caricamento del dettaglio piatto quando si clicca sul piatto
    { path: '', redirectTo: 'menu', pathMatch: 'full'}          //in caso di indirizzo sbagliato redirect su menu, patmatch significa che varrà solo per la stringa vuota e non per qualsiasi url digitato
];

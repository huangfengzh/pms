import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {AddComponent} from './add.component';
import {ListComponent} from './list.component';
import {PopularListComponent} from './popular-list.component';
import {EditComponent} from './edit.component';
import {SearchComponent} from './search.component';
import {HelpComponent} from './help.component';
import {PrivacySecurityComponent} from './privacy-security.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'popular-list', component: PopularListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'search', component: SearchComponent},
  {path: 'privacy-security', component: PrivacySecurityComponent},
  {path: 'help', component: HelpComponent},
  {path: '', redirectTo:"/home", pathMatch: 'full'},
];

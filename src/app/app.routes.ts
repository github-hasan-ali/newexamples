import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CardsComponent } from './cards/cards.component';
import { PostComponent } from '../components/post/post.component';
import { TransferComponent } from '../components/transfer/transfer.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent },
  {path:'cards',component:CardsComponent},
  {path:'posts',component:PostComponent},
  {path:'transfers',component:TransferComponent}
];

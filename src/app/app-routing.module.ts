import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { DetailuserComponent } from './detailuser/detailuser.component';

const routes: Routes = [
  { path: '', component: ListuserComponent },
  { path: 'detail/:id', component: DetailuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

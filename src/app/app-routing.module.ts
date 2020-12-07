import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './libro/delete/delete.component';
import { LibroComponent } from './libro/libro.component';
import { AddComponent } from './products/add/add.component';
import { ProductsComponent } from './products/products.component';
import { ChangeStatusComponent } from './users/change-status/change-status.component';
import { EditComponent } from './users/edit/edit.component';
import { ListComponent } from './users/list/list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {path:'',component: ProductsComponent},
  {path:'products/add', component: AddComponent},
  {path:'usuarios',component: UsersComponent},
  {path: 'libros',component: LibroComponent},
  {path:'libro/edit/:id',component: EditComponent},
  {path:'libro/delete',component: LibroComponent},
  {path: 'usuarios/edit/:id', component: EditComponent},
  {path: 'usuarios/delete', component: DeleteComponent},
  {path: 'usuarios/add',component: AddComponent},
  {path: 'usuarios/list',component: ListComponent},
  {path: 'usuarios/changeStatus',component: ChangeStatusComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

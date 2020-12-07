import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddComponent } from './products/add/add.component';

import { UsersComponent } from './users/users.component';
import { EditComponent } from './users/edit/edit.component';
import { LibroComponent } from './libro/libro.component';

import { AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { DeleteComponent } from './libro/delete/delete.component';
import { GetComponent } from './libro/get/get.component';
import { ListComponent } from './users/list/list.component';
import { ChangeStatusComponent } from './users/change-status/change-status.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddComponent,
    UsersComponent,
    EditComponent,
    LibroComponent,
    DeleteComponent,
    GetComponent,
    ListComponent,
    ChangeStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

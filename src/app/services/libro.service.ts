import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private db: AngularFirestore) { }

  async getAll(){

    return this.db.collection('libros').snapshotChanges();
    
    }

    async getAllPending(){
      return this.db.collection('libros').snapshotChanges();
    }
    

    add(){

    }

    delete(){

    }

}

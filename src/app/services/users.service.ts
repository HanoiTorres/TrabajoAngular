import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFirestore) { }

 async getAll(){

return this.db.collection('libros').snapshotChanges().pipe(map(documents => {
                          return documents.map(doc => {
                            return {id: doc.payload.doc.id, data: doc.payload.doc.data()}
                          })
                        }))

}


async getAllPending(){
  return this.db.collection('libros').snapshotChanges();
}

add(){

}

delete(){

}

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }
  
  create_Newemployee(Record:any)
  {
    return this.fireservices.collection('Employee').add(Record);
  }

  get_Allemployee(){
    return this.fireservices.collection('Employee').snapshotChanges();
  }
  
}

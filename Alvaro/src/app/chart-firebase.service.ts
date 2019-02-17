import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ChartFirebaseService {

  todos$: AngularFireList<any[]>;
  constructor(private db: AngularFireDatabase) {
    // this.todos$ = this.db.list('Nivel');
    this.db.list('Nivel').snapshotChanges().subscribe(ds => ds.map(a => {
      console.log(a.payload.val());
    }));
  }

}

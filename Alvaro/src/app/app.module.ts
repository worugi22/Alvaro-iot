import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyD0_XfdIxbPXnkTfn-6hTSZWXJG9OJC9bE',
      authDomain: 'alvaro-6241c.firebaseapp.com',
      databaseURL: 'https://alvaro-6241c.firebaseio.com',
      projectId: 'alvaro-6241c',
      storageBucket: 'alvaro-6241c.appspot.com',
      messagingSenderId: '845561393485'
    }),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

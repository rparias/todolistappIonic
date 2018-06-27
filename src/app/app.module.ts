import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAo_RdS68xKrpaaYALpiTn-YgvX8baDpBg",
  authDomain: "todolistapp-4312c.firebaseapp.com",
  databaseURL: "https://todolistapp-4312c.firebaseio.com",
  projectId: "todolistapp-4312c",
  storageBucket: "todolistapp-4312c.appspot.com",
  messagingSenderId: "229749699586"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'demo104'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    SplashScreen,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

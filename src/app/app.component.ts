import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedfeature = 'recipe';

  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQEPoy4pYsAdP_QpleG7jAVSA6oeRk-sM',
      authDomain: 'myrecipeproject-de485.firebaseapp.com',
    });
  }

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}

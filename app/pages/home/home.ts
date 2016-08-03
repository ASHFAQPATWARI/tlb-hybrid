import { Component } from '@angular/core';
import { NavController, Modal, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class Home {

  constructor(private navCtrl: NavController, private view: ViewController) {
  }

}

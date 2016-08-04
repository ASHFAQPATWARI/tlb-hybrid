import { Component } from '@angular/core';
import { NavController, Modal, ViewController } from 'ionic-angular';

import { searchRestaurants } from './../../components/search-restaurants/search-restaurants';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [searchRestaurants]
})
export class Home {

  constructor(private navCtrl: NavController, private view: ViewController) {
  }

}

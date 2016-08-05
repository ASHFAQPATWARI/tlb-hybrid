import { Component } from '@angular/core';
import { NavController, Modal, ViewController } from 'ionic-angular';

import { HomeData } from './../../providers/home-data/home-data';

import { searchRestaurants } from './../../components/search-restaurants/search-restaurants';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [searchRestaurants],
  providers: [HomeData]
})
export class Home {
  public homeareas:any;
  constructor(private navCtrl: NavController, private view: ViewController, private homeDataService: HomeData) {
    this.loadData();
  }

  loadData = function(){
    this.homeDataService.load().then((data) => {
      console.log('api response', data);
      this.homeareas = data.result.areas;
    });
  }

}

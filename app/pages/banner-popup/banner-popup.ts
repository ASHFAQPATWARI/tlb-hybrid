import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { Home } from '../home/home';
/*
  Generated class for the BannerPopupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/banner-popup/banner-popup.html',
})
export class BannerPopupPage {

  constructor(private nav: NavController, private view: ViewController) {

  }

  hideBanner(){
    if(this.nav.canGoBack())
      this.nav.pop();
    else
      this.nav.setRoot(Home);
  }

}

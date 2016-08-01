import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Home } from './pages/home/home';
import { Page2 } from './pages/page2/page2';

@Component({
  templateUrl: 'build/app.html'
})
class TlbHybrid {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home, icon: 'icon_home.png' },
      { title: 'Page dos', component: Page2, icon: '' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.resume.subscribe(() => {
          alert('I will show ');
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(this.platform.is('ios')){
        StatusBar.overlaysWebView(false);
      }
      StatusBar.backgroundColorByHexString('#7a5230');
        
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(TlbHybrid);

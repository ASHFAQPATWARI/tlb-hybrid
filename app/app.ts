import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav, Modal } from 'ionic-angular';
import { StatusBar, DeviceMotion } from 'ionic-native';

// pages
import { Home } from './pages/home/home';
import { BannerPopupPage } from './pages/banner-popup/banner-popup';
import { FeedbackPage } from './pages/feedback/feedback';
import { Page2 } from './pages/page2/page2';

@Component({
  templateUrl: 'build/app.html'
})
class TlbHybrid {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BannerPopupPage;

  pages: Array<{title: string, component: any, icon: string}>;

  //below variables for shake feedback
  private lastX:number;
  private lastY:number;
  private lastZ:number;
  private moveCounter:number = 0;

  constructor(private platform: Platform) {
    this.initializeApp();
    let self = this;
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home, icon: 'icon_home.png' },
      { title: 'Page dos', component: Page2, icon: '' },
      { title: 'App Feedback', component: FeedbackPage, icon: '' }
    ];

  }

  initializeApp() {
    var self = this;

    setTimeout(function() {
      if(self.nav.getActive().name == 'BannerPopupPage')      
        self.nav.setRoot(Home);
    }, 5000);

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      //shake feedback code
      var feedbackSubscription = DeviceMotion.watchAcceleration({frequency:200}).subscribe(acc => {

        if(!this.lastX) {
          this.lastX = acc.x;
          this.lastY = acc.y;
          this.lastZ = acc.z;
          return;
        }

        let deltaX:number, deltaY:number, deltaZ:number;
        deltaX = Math.abs(acc.x-this.lastX);
        deltaY = Math.abs(acc.y-this.lastY);
        deltaZ = Math.abs(acc.z-this.lastZ);

        if(deltaX + deltaY + deltaZ > 3) {
          this.moveCounter++;
        } else {
          this.moveCounter = Math.max(0, --this.moveCounter);
        }

        if(this.moveCounter > 5) { 
          this.moveCounter=0;
          if(this.nav.getActive().name != 'FeedbackPage')
            this.nav.push(FeedbackPage); 
        }

        this.lastX = acc.x;
        this.lastY = acc.y;
        this.lastZ = acc.z;

      });
    

      //show banner Ad on resume
      this.platform.resume.subscribe(() => {
          this.nav.push(BannerPopupPage);
          setTimeout(function() {
            if(self.nav.getActive().name == 'BannerPopupPage')
              self.nav.pop();
          }, 5000);
      });

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

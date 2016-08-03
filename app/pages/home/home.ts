import { Component } from '@angular/core';
import { NavController, Modal, ViewController } from 'ionic-angular';

import { SelectionPopup } from './../../modals/selectionPopup/selection-popup';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class Home {

  constructor(private navCtrl: NavController, private view: ViewController) {
  }

  showalert = () => {
    let modal = Modal.create(SelectionPopup);
    this.navCtrl.present(modal);
  }
}

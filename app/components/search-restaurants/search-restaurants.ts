import { Component } from '@angular/core';
import { ViewController, Modal, NavController } from 'ionic-angular';
import { SelectionPopup } from './../../modals/selectionPopup/selection-popup';

@Component({
    selector: 'search-section',
    templateUrl: 'build/components/search-restaurants/search-restaurants.html',
})
export class searchRestaurants {

  constructor(private nav: NavController, private view: ViewController) {
      
  }

  public areaName:string = 'Sharq';

  showalert = () => {
    let modal = Modal.create(SelectionPopup);
    modal.onDismiss(data => {
     console.log(data);
   });
   this.nav.present(modal);
  }

}

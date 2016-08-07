import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ViewController, Modal, NavController } from 'ionic-angular';
import { SelectionPopup } from './../../modals/selectionPopup/selection-popup';

@Component({
    selector: 'search-section',
    templateUrl: 'build/components/search-restaurants/search-restaurants.html',
    inputs: ['areas']
})
export class searchRestaurants implements OnChanges  {

  public areaName:string = 'Sharq';
  public areas:any;
  constructor(private nav: NavController, private view: ViewController) {
      
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges - myProp = ' , changes['areas'].currentValue);
  }

  showalert = () => {
    let modal = Modal.create(SelectionPopup);
    modal.onDismiss(data => {
     console.log(data);
   });
   this.nav.present(modal);
  }

}

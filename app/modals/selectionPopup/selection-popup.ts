import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/modals/selectionPopup/selection-popup.html',
})
export class SelectionPopup {

  constructor(private nav: NavController, private view: ViewController) {

  }

}

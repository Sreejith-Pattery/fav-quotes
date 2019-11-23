import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person:string;
  text:string;

  constructor(public navParams: NavParams,private viewCntl:ViewController) {
  }

  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
    console.log(this.person+","+this.text);
  }

  onClose(remove = false){
    this.viewCntl.dismiss(remove);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup:{ category:string, quotes:Quote[], icon:string};

  constructor(private navParams:NavParams, private alertCtrl:AlertController, private quotesService:QuotesService){};


  ngOnInit(): void {
    this.quoteGroup = this.navParams.get('quoteObject');
    console.log(this.quoteGroup);
  }

  onAddToFavorite(quote){
    const alert=this.alertCtrl.create({
      title:"Add Quote",
      subTitle:"Are you sure?",
      message:"Are you sure you want to add the quote?",
      buttons:[{
        text:'Yes, go ahead',
        role:'ok',
        handler:()=>{ 
          console.log('OK');
          this.quotesService.addQuoteToFavorites(quote);
        } 
      },
      {
        text:'No I changed my mind',
        role:'cancel',
        handler:()=>{ console.log('Cancelled')}
      }]
    });

    alert.present();
  }

  isFavorite(quote:Quote){
    return !(this.quotesService.isQuoteFavorite(quote) == -1);
  }

  onRemoveFromFavorite(quote:Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
  }

}

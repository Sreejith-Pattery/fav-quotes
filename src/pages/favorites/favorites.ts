import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes:Quote[];
  constructor(private quoteService:QuotesService,
    private modalCntl:ModalController
  ){}

  onViewQuote(quote:Quote){
    const modal = this.modalCntl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onRemoveFromFavorites(quote:Quote){
    this.quoteService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl:Quote)=>{
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }


}

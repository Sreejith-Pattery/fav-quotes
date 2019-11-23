import { Component} from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
import {  NavController } from 'ionic-angular';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quoteCollection:{ category:string, quotes:Quote[], icon:string}[];
  quotesPage:QuotesPage;

  constructor(private navCntrl:NavController){}
  
  ngOnInit(): void {
    this.quoteCollection = quotes;
  }

  onClickQuote(selectedQuote) {
    this.navCntrl.push(QuotesPage, {quoteObject:selectedQuote});
  }
  

}

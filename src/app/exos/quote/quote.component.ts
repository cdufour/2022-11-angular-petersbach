import { Component, OnInit } from '@angular/core';

interface Quote {
  body: string;
  author: string;
}

@Component({
  selector: 'exos-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]  = [
    { body: "Ad Astra per Aspera", author: "Inconnu"},
    { body: "La femme est l'avenir de l'homme", author: "Aragon"},
    { body: "The World is yours", author: "Toni Montana"},
  ];

  selectedQuote: Quote = this.quotes[0];

  constructor() {
    setInterval(() => this.selectedQuote = 
      this.quotes[this.randInt(this.quotes.length)], 4000)
  }

  ngOnInit(): void {
  }

  private randInt(max: number): number {
    return Math.floor(Math.random() * max);
  } 




}

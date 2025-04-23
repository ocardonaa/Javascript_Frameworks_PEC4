import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {

  public article: Article;
  public articleClasses;
  public priceClasses;

  constructor() {

  }

  ngOnInit() {
    this.article = new Article('Ball', 'https://media.istockphoto.com/id/91712739/es/foto/pelota-de-f%C3%BAtbol.jpg?s=612x612&w=0&k=20&c=YTrM0cjnsDMBagE47GTiHxDtE00Mb3v27jvD_yyxyfk=', 10, true, 1);
    this.articleClasses = {
      'available': this.article.isOnSale,
      'unavailable': !this.article.isOnSale
    }
    this.priceClasses = {
      'available-price': this.article.isOnSale,
      'unavailable-price': !this.article.isOnSale
    }
  }

  incrementUnits() {
    this.article.incrementUnits();
  }

  decrementUnits() {
    this.article.decrementUnits();
  }
}

import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionService, Collection, Card } from '../services/collection.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  public id: number;
  public currentCollection: Collection;
  public cards: Array<Card>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private collection: CollectionService) {
  }
  
  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getCollection();
  }

  public getCollection() {
    this.currentCollection = this.collection.find(this.id);
    this.getCards();
  }

  public getCards(){
    this.cards = this.currentCollection.cards;
  }

  public flipCard(){
    console.log('meu botão');
  }

}
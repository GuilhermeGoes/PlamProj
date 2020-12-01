import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  public flipCard(){
    console.log('meu botão');
  }

}


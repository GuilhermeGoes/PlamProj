import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

}


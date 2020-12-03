import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CoverService } from '../../../services/cover/cover.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  
  public images: any;
  public searchImage: string;
  public erro: any;

  constructor(public imgModalCtrl: ModalController, private coverService: CoverService) { }

  ngOnInit() {
  }

  public getImages(query){
    return this.coverService.getImages(query).subscribe(
      (data: any) => this.images = data.results,
      (error: any) => this.erro = error
    )
  }

  public dismissModal() {
    this.imgModalCtrl.dismiss({
      'dismissed': true
    });
  }

}

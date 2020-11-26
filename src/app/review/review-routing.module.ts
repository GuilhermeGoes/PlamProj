import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPage } from './review.page';

const routes: Routes = [
  {
    path: ':id',
    component: ReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewPageRoutingModule {}

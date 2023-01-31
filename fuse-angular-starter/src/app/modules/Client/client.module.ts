import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexClientComponent } from './index-client/index-client.component';
import { Route, RouterModule } from '@angular/router';




const Routes : Route[] = [
  {
      path     : '',
      component: IndexClientComponent
  }
];

@NgModule({
  declarations: [
    IndexClientComponent
  ],
  imports: [
    RouterModule.forChild(Routes),
    CommonModule
  ]
})
export class ClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { Child1Component } from './child1/child1.component';

console.log("child1 module loaded");
@NgModule({
  declarations: [
    Child1Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

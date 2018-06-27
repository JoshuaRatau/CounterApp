import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  score1=0;
  score2=0;

  constructor(public navCtrl: NavController) {

  }
onClickthree(){
  this.score1 +=3;
}
onClicktwo(){
  this.score1 += 2;
}
onClickthrow(){
  this.score1 += 1;
}

onClickthee(){
  this.score2 += 3;
}
 onClicktoo(){
   this.score2 += 2;
 } 

 onClickthow(){
   this.score2 += 1;
 }
 onClickReset(){
  this.score1=0;
  this.score2=0;
}
}

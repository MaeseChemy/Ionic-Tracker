import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';

import { UserService } from "../../services/user.service";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {
  @ViewChild(Slides) 
  slides: Slides;

  key: string = "jmbg";

  constructor(private userSrv: UserService) {
  }

  ngAfterViewInit(){
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress";
  }

  verifyUser(){
    this.userSrv.verifyUser(this.key);
  }

  access(){

  }
}

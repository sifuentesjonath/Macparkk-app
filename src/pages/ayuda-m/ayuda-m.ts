import { Component,ElementRef } from '@angular/core';
import { IonicPage,NavController,NavParams,LoadingController,AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';//conexión
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-ayuda-m',
  templateUrl: 'ayuda-m.html',
})
export class AyudaMPage {
  private data: FormGroup;
  constructor(private elementRef:ElementRef,private fb: FormBuilder,private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.fb.group({
      mensaje: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9 ]{10,200}$/)]]
    });
  }
  //Metodos
  ionViewCanEnter(){
  }
  sumit(){}

}

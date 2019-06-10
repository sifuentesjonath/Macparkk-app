import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
@IonicPage()
@Component({
  selector: 'page-perfil-e',
  templateUrl: 'perfil-e.html',
})
export class PerfilEPage {
  data:any={};
  imgP:any='assets/imgs/perfil.png';
  constructor(public navCtrl:NavController,public navParams: NavParams,private camara:Camera,private transfer:FileTransfer,private file:File,private loadingCtrl:LoadingController) {
    this.data.nombre = '';
    this.data.appm = '';
    this.data.mail = '';
    this.data.password = '';
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PerfilEPage');
  }
  changeImg(){
    /*let loader=this.loadingCtrl.create({
      content:'Subiendo...'
    });*/
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camara.DestinationType.DATA_URL,
      sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    this.camara.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgP = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  Guardar(){}
}

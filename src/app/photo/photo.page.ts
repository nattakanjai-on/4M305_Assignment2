import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {

  imgURL;

  constructor(
      private camera: Camera
  ){
  }

  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res) => {
      this.imgURL = res;
    }).catch(e => {
      console.log(e);
    }

    )}

  getUpload() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch(e => {
      console.log(e);
    }

    )
  }

}



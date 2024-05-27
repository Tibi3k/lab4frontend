import { Injectable } from '@angular/core';
import { GoogleUserData } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {
  static imgPath: string;
  static imgname: string;
  getImagePath() {
    return ImageUrlService.imgPath
  }

  setImagePath(path: string) {
    ImageUrlService.imgPath = path
  }

  getName() {
    return ImageUrlService.imgname
  }

  setName(imgname: string) {
    ImageUrlService.imgname = imgname
  }
}
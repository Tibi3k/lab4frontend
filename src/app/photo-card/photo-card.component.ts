import { Component, Input,Output,EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ImageService } from '../services/ImageService';
import { ImageUrlService } from '../services/imageurl.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent {
  @Input() name: string = ""
  @Input() imageUrl: string = "";
  @Input() _id: string = "";
  @Input() userId: string = "";
  @Input() createdAt: string = "";
  @Output() deletedItems = new EventEmitter<string>();

  modalSrc: string = ""
  imageSrc: string = ""; // Holds the dynamically created object URL

  constructor(public authService: AuthService, private imageService: ImageService, private router: Router, public imageUrlService: ImageUrlService){}

  ngOnInit(): void {
    this.imageSrc = this.imageUrl.replace(/images/g, "thumbnails")
  }


  onClick(event: any){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imageUrlService.setImagePath(this.imageUrl)
    this.imageUrlService.setName(this.name)
    this.modalSrc = srcAttr.nodeValue;
  }

  deleteImage(){
    this.imageService.deleteImage(this._id).subscribe(res => {
      console.log(res)
      this.deletedItems.emit(this._id)
    })
  }

  getId(){
    return "#mymodal" + this._id
  }
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent {
  @Input() name: string = ""
  @Input() imageUrl: string = "";

  imageSrc: string = ""; // Holds the dynamically created object URL

  constructor() { }

  ngOnInit(): void {
    //this.downloadImage(this.imageUrl);
  }

  downloadImage(url: string): void {
    fetch(url)
      .then(response => {
        console.log(response)
        return response.blob()
      }) // Download the image as a Blob
      .then(blob => {
        console.log(blob)
        this.imageSrc = URL.createObjectURL(blob); // Create object URL
        console.log(this.imageSrc)
      })
      .catch(error => {
        console.error('Error downloading image:', error);
      });
  }
}
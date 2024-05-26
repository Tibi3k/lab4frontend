import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/ImageService';
import { ImageSchema } from '../model/ImageSchema';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  images: ImageSchema[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      console.log(data)
      this.images = data;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/ImageService';
import { ImageSchema } from '../model/ImageSchema';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  images: ImageSchema[] = [];
  formatDate = formatDate
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      console.log(data)
      this.images = data;
    });
  }

  handleDelete(id: string) {
    this.images = this.images.filter(i => i._id !== id);
  }


  sortByDateAsc() {
    this.images.sort((a, b) => <any>new Date(a.createdAt) - <any>new Date(b.createdAt));
  }

  sortByDateDesc() {
    this.images.sort((a, b) => <any>new Date(b.createdAt) - <any>new Date(a.createdAt));
  }

  sortByNameAsc() {
    this.images.sort((a, b) => a.imageName.localeCompare(b.imageName));
  }

  sortByNameDesc() {
    this.images.sort((a, b) => b.imageName.localeCompare(a.imageName));
  }
}
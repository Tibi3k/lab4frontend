// image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ImageSchema } from '../model/ImageSchema';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
    
   }

   getImages() {
    return this.http.get<ImageSchema[]>(environment.apiUrl + 'images');
   }


   uploadImage(formData: FormData) {
    let headers = new HttpHeaders();
    headers = headers.append('enctype', 'multipart/form-data');
    console.log('uploading', formData)
    return this.http.post<any>('http://localhost:3000/api/images/upload', formData, {
      reportProgress: true, // If you want to track upload progress
      observe: 'events', // If you want to receive upload progress events
      headers: headers
    });
  }
}
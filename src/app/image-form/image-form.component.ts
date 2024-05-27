import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageService } from '../services/ImageService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent {
  imageForm: FormGroup;
  selectedImage: File | undefined;

  constructor(private fb: FormBuilder, private imageService: ImageService, private router: Router) {
    this.imageForm = this.fb.group({
      userId: ['aswdfasdfasdf', Validators.required],
      imageName: ['', Validators.required],
      image: [null, Validators.required] // Set initial value to null
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log(file)
    this.selectedImage = file;
    this.imageForm.patchValue({ image: this.selectedImage })
  }

  onSubmit():  void {
    if (!this.selectedImage) {
      alert('Please select an image.');
      return;
    }

    // Update the imageForm control value with the selected image
    this.imageForm.patchValue({ image: this.selectedImage });
    console.log('uploading', this.imageForm.value)
    // Call your image service to upload the image
    const formData = new FormData();
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedImage!);
    reader.onload = (e: any) => {
      const bytes = e.target.result.split('base64,')[1];

      formData.append('userId', this.imageForm.get('userId')?.value);
      formData.append('imageName', this.imageForm.get('imageName')?.value);
      formData.append('image', bytes);
  
      this.imageService.uploadImage(formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error uploading image:', error);
          this.router.navigate(['/']);
        }
      )
    }

  }
}
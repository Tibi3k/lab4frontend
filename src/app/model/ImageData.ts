export class ImageData {
  userId: string;
  creationTime: Date;
  image: string; // This could be a URL or Base64 representation of the image
  imageName: string;

  constructor(userId: string, creationTime: Date, image: string, imageName: string) {
    this.userId = userId;
    this.creationTime = creationTime;
    this.image = image;
    this.imageName = imageName;
  }
}
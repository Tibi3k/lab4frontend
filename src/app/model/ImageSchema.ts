export class ImageSchema {
  _id: string;
  imageName: string;
  imageUrl: string;
  userId: string;
  createdAt: Date;
  __v: number;

  constructor(data: any) {
    this._id = data._id;
    this.imageName = data.imageName;
    this.imageUrl = data.imageUrl;
    this.userId = data.userId;
    this.createdAt = new Date(data.createdAt);
    this.__v = data.__v;
  }
}
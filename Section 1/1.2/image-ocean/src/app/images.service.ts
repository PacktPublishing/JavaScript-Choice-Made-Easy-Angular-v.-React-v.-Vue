import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './entities/image';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImagesService {
  host = 'http://localhost:3000'

  constructor(private http : HttpClient) { }

  fetchImages() : Promise<Image[]> {
    return new Promise(async resolve => {
      const response = await this.http.get(`${this.host}/images`).toPromise();

      resolve(response['images'].map(imageData => new Image(imageData)));
    });
  }

  fetchImage(id : number) : Promise<Image> {
    return new Promise(async resolve => {
      const response = await this.http.get(`${this.host}/images/${+id}`).toPromise();

      resolve(new Image(response['image']));
    });
  }

  addImage(title : string, file) : Promise<Image> {
    return new Promise(async resolve => {
      const formData = new FormData();

      formData.append('title', title);

      formData.append('image', file);

      const response = await this.http.post(`${this.host}/image-upload-file`, formData).toPromise();

      resolve(new Image(response['image']));
    });
  }

}

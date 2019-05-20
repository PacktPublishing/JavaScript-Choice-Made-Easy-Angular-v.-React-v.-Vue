import { Component, ViewChild } from '@angular/core';
import { ImagesService } from '../images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.scss'],
  providers: [ImagesService]
})
export class ImageAddComponent {
  imageName : string = null

  @ViewChild('imageInput') imageInput

  constructor(
    private imagesService : ImagesService,
    private router : Router
  ) { }

  async upload() {
    const nativeElement = this.imageInput.nativeElement;
    const file = nativeElement.files[0];

    if (!nativeElement.files || !file) {
      return;
    }

    const image = await this.imagesService.addImage(this.imageName, file);

    this.router.navigate([`image/${image.id}`]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Image } from '../entities/image';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
  providers: [ImagesService]
})
export class ImageDetailComponent implements OnInit {
  image : Image

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private imagesService : ImagesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.image = await this.imagesService.fetchImage(+params.id);
    });
  }

}

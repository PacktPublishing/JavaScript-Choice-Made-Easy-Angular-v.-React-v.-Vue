import { Component, OnInit } from '@angular/core';
import { Image } from '../entities/image';
import { HttpClient } from '@angular/common/http';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ImagesService]
})
export class DashboardComponent implements OnInit {
  images : Image[] = []

  constructor(
    private imagesService : ImagesService
  ) {

  }

  async ngOnInit() {
    this.images = await this.imagesService.fetchImages();
  }

}

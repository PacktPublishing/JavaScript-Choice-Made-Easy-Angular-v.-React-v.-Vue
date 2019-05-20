import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { SingleImageComponent } from './single-image.component';

import { Image } from '../entities/image';

import {
  RouterTestingModule
} from '@angular/router/testing';

describe('SingleImageComponent', () => {
  let component: SingleImageComponent;
  let fixture: ComponentFixture<SingleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleImageComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should be created', () => {
    expect(component).toBeTruthy();
  });

  fit('it should render image', () => {
    component.image = new Image({
      id: 0,
      title: 'Test image',
      fileName: 'red_fish.jpg'
    });

    fixture.detectChanges();

    const singleImageEl = fixture.debugElement.query(By.css('.single-image'));

    expect(singleImageEl.query(By.css('img')).properties.src)
      .toBe('http://localhost:3000/uploads/red_fish.jpg');
  });

  fit('it should like image when user clicks footer', () => {
    component.image = new Image({
      id: 0,
      title: 'Test image',
      fileName: 'red_fish.jpg'
    });

    fixture.detectChanges();

    const singleImageEl = fixture.debugElement.query(By.css('.single-image'));
    const footerEl = singleImageEl.query(By.css('footer'));

    expect(footerEl.nativeElement.textContent.trim()).toBe('like');

    footerEl.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(footerEl.nativeElement.textContent.trim()).toBe('liked');
  });
});

const IMAGES_HOST = 'http://localhost:3000/uploads';

export class Image {
  id : number

  fileName : string

  title : string

  liked : Boolean

  like() : void {
    this.liked = true;
  }

  get imagePath() : string {
    return `${IMAGES_HOST}/${this.fileName}`
  }

  constructor(fields?) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}

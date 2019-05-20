import { ImageOceanPage } from './app.po';

describe('image-ocean App', () => {
  let page: ImageOceanPage;

  beforeEach(() => {
    page = new ImageOceanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

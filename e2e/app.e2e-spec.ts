import { Ipl2Page } from './app.po';

describe('ipl2 App', () => {
  let page: Ipl2Page;

  beforeEach(() => {
    page = new Ipl2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

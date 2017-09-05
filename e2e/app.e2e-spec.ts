import { AngScssPage } from './app.po';

describe('ang-scss App', () => {
  let page: AngScssPage;

  beforeEach(() => {
    page = new AngScssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

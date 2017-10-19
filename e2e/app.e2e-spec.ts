import { GGBlihPage } from './app.po';

describe('ggblih App', () => {
  let page: GGBlihPage;

  beforeEach(() => {
    page = new GGBlihPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

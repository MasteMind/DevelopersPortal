import { DevelopersPortalPage } from './app.po';

describe('developers-portal App', () => {
  let page: DevelopersPortalPage;

  beforeEach(() => {
    page = new DevelopersPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

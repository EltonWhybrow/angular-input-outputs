import { InputOutputsPage } from './app.po';

describe('input-outputs App', function() {
  let page: InputOutputsPage;

  beforeEach(() => {
    page = new InputOutputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

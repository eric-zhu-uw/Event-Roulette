import { EventRoulettePage } from './app.po';

describe('event-roulette App', function() {
  let page: EventRoulettePage;

  beforeEach(() => {
    page = new EventRoulettePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

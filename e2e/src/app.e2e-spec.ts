import { browser, logging, by, element, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Pie Chart welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Grade Pie Chart');
  });

  it('should display Student List welcome message', async () => {
    await page.navigateToList();
    expect(await page.getTitleText()).toEqual('Student List');
  });

  it('should display table head text as per table data', async () => {
    await page.navigateToList();
    expect(await page.getTableHeaderText()).toEqual('First Grade Students');
  });

  it('should display Student List welcome message', async () => {
    await page.navigateToList();
    expect(await page.getTableHeaderText()).toEqual('First Grade Students');
  });

  // TODO
  // it('should edit name of student', async () => {
  //   await page.navigateToList();
  //   element(by.css('p-celleditor.name_2')).click();
  //   browser.waitForAngular();
  //   expect(await element(by.css('p-celleditor .name_2_input')).getAttribute('value')).toEqual('Brandon');
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

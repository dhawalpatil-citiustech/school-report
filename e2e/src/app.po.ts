import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToList(): Promise<unknown> {
    return browser.get('/list');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('.jumbotron h1')).getText();
  }

  async getTableHeaderText(): Promise<string> {
    return element(by.css('.tableHeader')).getText();
  }
}

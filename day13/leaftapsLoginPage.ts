import { Locator, Page } from '@playwright/test'
import { LTHomePage } from './leafTaps-homePage';

export class LoginPage {
  page: Page;
  userNameField: Locator
  readonly passwrdfield: Locator
  readonly loginButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.userNameField = this.page.locator("#username");
    this.passwrdfield = this.page.locator("#password");
    this.loginButton = this.page.locator(".decorativeSubmit");
  }
  async fillUsername(uname: string) {
    await this.userNameField.fill(uname)




  }
  async fillPassword(pwd: string) {
    await this.passwrdfield.fill(pwd)

  }
  async clickLogin() {
    await this.loginButton.click();

  }
}
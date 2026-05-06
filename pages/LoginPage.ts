import { expect,  Locator,  Page } from '@playwright/test';
import { getCredential } from '../fixtures/creden';

export class LoginPage {

    readonly fieldUsername;
    readonly fieldPassword
    readonly textError;

  constructor(private page: Page) {
   
  
    this.fieldUsername = page.getByPlaceholder('Username');
    this.fieldPassword = page.getByPlaceholder('Password');
    this.textError = page.locator('text=Epic sadface:');

  }
   async fillFieldsUsername(username: string) {
    await this.fieldUsername.fill(username);
  }
  async fillFieldsPassword(password: string) {
    await this.fieldPassword.fill(password);
  }
    async clickButtonLogin(btnName: string) {  
    await this.page.getByRole('button', { name: btnName }).click();
    }

    async loginAsStandardUser(username: string, password: string) {
    await this.fieldUsername.fill(username);
    await this.fieldPassword.fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
    
    async checkErrorMessage(text: string) {
    await expect(this.textError).toBeVisible();
    await expect(this.textError).toHaveText(new RegExp(text));
   }
   
}
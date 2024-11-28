import { browser, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('My Login Application', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await LoginPage.open();

        // Perform login
        await LoginPage.login('durjoy@gmail.com', '12345678');

        
    });
    it('Edit user profile', async()=>{
        await $('//div[@class="nav-user-bg-x pointer dropbtn"]').click();
        await $('//div[@class="text-start px-2"][1]').click();
        await $('//button[@class="btn btn-sm green-button py-0"]').click();
        await $('//input[@id="first_name"]').addValue('Djy');
    });
});
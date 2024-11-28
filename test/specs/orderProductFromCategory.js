import { browser, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('My Login Application', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await LoginPage.open();

        // Perform login
        await LoginPage.login('durjoy@gmail.com', '12345678');

        
    });
    it('Order product from Product Category', async()=>{
        //Scroll to element
        await $('(//h3[@class="title-with-lines"])[2]').scrollIntoView({ block: 'start', inline: 'nearest' });
        await $('(//h3[@class="title-with-lines"])[3]').scrollIntoView({ block: 'start', inline: 'nearest' });
        //Click on Category
        await $('(//div[@class="d-flex flex-column justify-content-center align-items-center"])[2]').click();
        //Click on a Category from list
        await $('//li[6]').click();
        //Click on a product category
        await $('(//div[@class="light-gray-background d-flex flex-column justify-content-end align-items-center custom-shadow"])[1]').click();
        //Click on a Product
        await $('(//div[@class="card border-0 shadow-sm h-100"])[1]').click();
         //Clcik on order button
        await $('//button[@class="btn yellow-button w-100 py-2 py-md-3"]').click();
        //Click on Order cart
        await $('//div[@class="dark-background py-1"]').click();
        //Click on Procced
        await $('//class="btn btn-sm dark-button text-uppercase"').click();





        await browser.pause(3000);

    });
});
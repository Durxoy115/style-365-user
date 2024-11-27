import { browser, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

describe('My Login Application', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await LoginPage.open();

        // Perform login
        await LoginPage.login('durjoy@gmail.com', '12345678');

        //security
    });

    it('should order a product', async () => {
        // Click on the second product card
    const productCard = await $('(//div[@class="col-6 col-md-3 col-lg-2 mb-4 pointer product-card"])[2]');
    await productCard.waitForClickable({ timeout: 5000 }); // Wait for up to 5 seconds
    await productCard.click();

    // Scroll to the "Add to Cart" button and click it
    const addToCartButton = await $('//button[@class="btn yellow-button w-100 py-2 py-md-3"]');
    await addToCartButton.waitForClickable({ timeout: 5000 }); // Wait for up to 5 seconds
    await addToCartButton.scrollIntoView({ block: 'start', inline: 'nearest' });

    await $('//div[@class="pointer card  m-2"][2]').click();
    // Wait before interacting with the increment button
    const incrementButton = await $('(//button[@class="btn btn-outline-secondary"])[8]');
    await incrementButton.waitForClickable({ timeout: 5000 }); // Wait for up to 5 seconds

    // Increment product quantity (click "+" button 3 times)
    for (let i = 0; i < 3; i++) {
        await incrementButton.click();
    }

    await addToCartButton.click();

    
    // Click on the floating cart icon
    const floatingCart = await $('//div[@class="floated-cart mb-4 ms-3 text-white shadow-sm pointer"]');
    await floatingCart.waitForClickable({ timeout: 5000 }); // Wait for up to 5 seconds
    await floatingCart.click();

    // Proceed to checkout
    const checkoutButton = await $('//button[@class="btn btn-sm dark-button text-uppercase"]');
    await checkoutButton.waitForClickable({ timeout: 5000 }); // Wait for up to 5 seconds
    await checkoutButton.click();
    //Select default address
    await $("//div[contains(@class, 'address-card') and contains(@class, 'light-gray-background')]").click();

    //Click on Terms & Condition Check Box
    await $('//input[@id="acceptCheck"]').click();

    //Click to placde an Order
    await $('//button[@class="btn btn-sm yellow-button text-uppercase my-3"]').click();

    // Pause to observe the result (replace with assertions if possible)
    await browser.pause(5000);
    });

});

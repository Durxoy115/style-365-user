import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await LoginPage.open()

        await LoginPage.login('durjoy77@gmail.com', '12345678')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
})


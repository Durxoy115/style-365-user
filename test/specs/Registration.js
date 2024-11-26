describe('User Registration', () => {

    it('Should register with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url('https://main.365.style/login');
        // Find the element using its text
        const registerWithEmail = await $("//span[contains(text(),'Register with Email')]");

        // Ensure the element is displayed and clickable
        await expect(registerWithEmail).toBeDisplayed();
        await expect(registerWithEmail).toBeClickable();

        // Click the element
        await registerWithEmail.click();
        
        const emailField = await $('#email'); 
        //await expect(emailField).toBeDisplayed();

        // Fill in the email
        await emailField.setValue('testuser@example.com');

        // Fill in the password
        const passwordField = await $('#password'); 
        await passwordField.setValue('Test@1234');
        
        // Fill in the date of birth
        const dobField = await $('#dob'); 
        await dobField.setValue('22/02/1998')

        // Select gender from dropdown
        const genderDropdown = await $('#gender'); 
        await genderDropdown.selectByVisibleText('Male'); 

        // Submit the form (adjust selector as needed)
        const submitButton = await $('button[type="submit"]'); 
        await expect(submitButton).toBeClickable();
        await submitButton.click();
        
        
    })
})
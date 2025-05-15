const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { validUser, invalidUser } = require('../utils/testData');

// Group of tests related to user login functionality
test.describe('Login Tests', () => {
  // Positive test: verify login succeeds with valid credentials
  test('Should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // Navigate to the login page
    await loginPage.login(validUser.email, validUser.password); // Perform login with valid credentials

    // Assert that the navbar shows the logged-in user's username
    await expect(page.locator('a.nav-link', { hasText: validUser.username })).toBeVisible();
  });

  // Negative test: verify login fails with invalid password
  test('Should not login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // Navigate to the login page
    await loginPage.login(validUser.email, invalidUser.password); // Attempt login with wrong password

    // Assert that the error message for invalid credentials is displayed
    await expect(page.locator('.error-messages')).toHaveText('email or password:is invalid');
  });
});
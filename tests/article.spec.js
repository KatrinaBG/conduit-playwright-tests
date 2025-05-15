const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { EditorPage } = require('../pages/EditorPage');
const { validUser, article } = require('../utils/testData');

// Group tests related to article creation
test.describe('Article Creation', () => {
  // This hook runs before each test in this describe block
  // It ensures that user is logged in before starting article creation tests
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto(); // Navigate to login page
    await login.login(validUser.email, validUser.password, validUser.username); // Perform login
  });

  // Positive test case: verify article can be created successfully
  test('Should create an article successfully', async ({ page }) => {
    const editor = new EditorPage(page);
    await editor.goto(); // Navigate to article editor page
    await editor.createArticle(article.title, article.description, article.body); // Fill and submit article form

    // Assert that the article page shows the correct article title
    await expect(page.locator('h1')).toHaveText(article.title);
  });

  // Negative test case: verify publishing fails when required fields are empty
  test('Should not publish with empty fields', async ({ page }) => {
    const editor = new EditorPage(page);
    await editor.goto(); // Navigate to article editor page

    await editor.publishButton.click(); // Attempt to publish without filling fields

    // Assert that error messages are visible on the page
    await expect(page.locator('.error-messages')).toBeVisible();
  });
});
